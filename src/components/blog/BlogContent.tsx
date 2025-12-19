import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  const formattedContent = useMemo(() => {
    // Pre-process content to handle special blocks before markdown parsing
    let processedContent = content;
    
    // Ensure proper line breaks before numbered headings
    processedContent = processedContent
      .replace(/([.!?])\s*(\d+\.\s+[A-Z])/g, '$1\n\n$2')
      // Ensure line breaks before special blocks (PT, EN, NL)
      .replace(/([.!?])\s*(Cenário|Scenario|Veredito|Verdict|Resumo|Summary|Dica|Tip|Samenvatting)/g, '$1\n\n$2');
    
    // Split into lines for processing
    const rawLines = processedContent.split('\n');
    
    // Pre-process: combine standalone numbers with next line
    const lines: string[] = [];
    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i].trim();
      if (!line) {
        lines.push('');
        continue;
      }
      
      // Check if this is just a number with a period (possibly a broken heading)
      if (/^\d+\.$/.test(line) && i + 1 < rawLines.length) {
        const nextLine = rawLines[i + 1]?.trim();
        if (nextLine && /^[A-Z]/.test(nextLine)) {
          lines.push(`${line} ${nextLine}`);
          i++;
          continue;
        }
      }
      
      // Check if this is just a number (possibly a broken heading)
      if (/^\d+$/.test(line) && i + 1 < rawLines.length) {
        const nextLine = rawLines[i + 1]?.trim();
        if (nextLine && /^[A-Z]/.test(nextLine)) {
          lines.push(`${line}. ${nextLine}`);
          i++;
          continue;
        }
      }
      lines.push(line);
    }
    
    // Parse into sections
    const sections: { type: string; content: string; items?: string[]; rows?: string[][] }[] = [];
    let currentCenario: { title: string; items: string[] } | null = null;
    let currentTable: { headers: string[]; rows: string[][] } | null = null;
    let markdownBuffer: string[] = [];
    
    const flushMarkdown = () => {
      if (markdownBuffer.length > 0) {
        const content = markdownBuffer.join('\n').trim();
        if (content) {
          sections.push({ type: 'markdown', content });
        }
        markdownBuffer = [];
      }
    };
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check for table-like content (lines with | separators)
      const isTableRow = trimmedLine.includes('|') && trimmedLine.split('|').filter(c => c.trim()).length >= 2;
      
      if (isTableRow) {
        // Skip markdown table separator lines
        if (/^\|?[\s\-:|]+\|?$/.test(trimmedLine)) {
          continue;
        }
        
        const cells = trimmedLine.split('|').map(c => c.trim()).filter(c => c);
        
        if (cells.length >= 2) {
          if (currentCenario) {
            sections.push({ type: 'cenario', content: currentCenario.title, items: currentCenario.items });
            currentCenario = null;
          }
          flushMarkdown();
          
          if (!currentTable) {
            currentTable = { headers: cells, rows: [] };
          } else {
            currentTable.rows.push(cells);
          }
          continue;
        }
      }
      
      // If we have a table and hit a non-table line, save it
      if (currentTable) {
        sections.push({ 
          type: 'table', 
          content: '', 
          items: currentTable.headers,
          rows: currentTable.rows 
        });
        currentTable = null;
      }
      
      // Check if this is a Cenário/Scenario header (PT, EN, NL)
      if (trimmedLine.startsWith('Cenário') || trimmedLine.startsWith('Scenario')) {
        if (currentCenario) {
          sections.push({ type: 'cenario', content: currentCenario.title, items: currentCenario.items });
        }
        flushMarkdown();
        currentCenario = { title: trimmedLine, items: [] };
        continue;
      }
      
      // Check if this is an expense item within a cenário
      const expenseMatch = trimmedLine.match(/^([^:]+):\s*(~?€?\s*[\d.,]+.*)/);
      const isTotalLine = trimmedLine.toUpperCase().startsWith('TOTAL');
      
      if (currentCenario && (expenseMatch || isTotalLine)) {
        currentCenario.items.push(trimmedLine);
        continue;
      }
      
      // If we hit a non-expense line and have a cenário, save it
      if (currentCenario) {
        sections.push({ type: 'cenario', content: currentCenario.title, items: currentCenario.items });
        currentCenario = null;
      }
      
      // Check for numbered headings (1. Title Here)
      const numberedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)/);
      if (numberedMatch) {
        flushMarkdown();
        sections.push({ type: 'numbered', content: trimmedLine });
        continue;
      }
      
      // Check for special blocks (Veredito, Resumo, Dica, etc.)
      if (trimmedLine.match(/^(Veredito|Verdict|Resumo|Summary|Samenvatting):/i)) {
        flushMarkdown();
        sections.push({ type: 'highlight', content: trimmedLine });
        continue;
      }
      
      if (trimmedLine.match(/^(Dica|Tip)\s/i)) {
        flushMarkdown();
        sections.push({ type: 'tip', content: trimmedLine });
        continue;
      }
      
      // Everything else goes to markdown buffer
      markdownBuffer.push(line);
    }
    
    // Flush remaining content
    flushMarkdown();
    
    if (currentCenario) {
      sections.push({ type: 'cenario', content: currentCenario.title, items: currentCenario.items });
    }
    if (currentTable) {
      sections.push({ 
        type: 'table', 
        content: '', 
        items: currentTable.headers,
        rows: currentTable.rows 
      });
    }
    
    // Render sections
    return sections.map((section, index) => {
      // Render tables
      if (section.type === 'table' && section.items && section.rows) {
        return (
          <div key={index} className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  {section.items.map((header, i) => (
                    <th key={i} className="border border-border/30 px-4 py-3 text-left font-semibold text-foreground">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-muted/30' : 'bg-background'}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-border/30 px-4 py-3 text-muted-foreground">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{cell}</ReactMarkdown>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      
      // Render cenário blocks
      if (section.type === 'cenario') {
        return (
          <div key={index} className="summary-card my-6">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">{section.content}</h3>
            {section.items && section.items.length > 0 && (
              <div className="space-y-1">
                {section.items.map((item, i) => {
                  const itemMatch = item.match(/^(.+?):\s*(.+)$/);
                  if (itemMatch) {
                    const [, label, value] = itemMatch;
                    const isTotal = label.toLowerCase().includes('total');
                    return (
                      <div 
                        key={i} 
                        className={`flex justify-between items-center py-3 ${isTotal ? 'border-t-2 border-primary pt-4 mt-4' : 'border-b border-border/30'}`}
                      >
                        <span className={isTotal ? 'font-bold text-lg' : 'text-muted-foreground'}>
                          {label}
                        </span>
                        <span className={`font-mono ${isTotal ? 'text-primary font-bold text-xl' : 'font-semibold text-foreground'}`}>
                          {value}
                        </span>
                      </div>
                    );
                  }
                  return <p key={i} className="text-muted-foreground">{item}</p>;
                })}
              </div>
            )}
          </div>
        );
      }
      
      // Render numbered headings
      if (section.type === 'numbered') {
        const match = section.content.match(/^(\d+)\.\s+(.+)/);
        if (match) {
          const [, number, restOfLine] = match;
          
          // Try to separate title from content
          let title = restOfLine;
          let contentAfter = '';
          
          const separatorPatterns = [
            /^(.+?[.!?:])(\s+(?:If\s+you|Se\s+você|Many\s|Muitos\s|Beyond\s|Além\s|The\s+market|O\s+mercado|From\s|De\s|For\s+a\s|Para\s+um|When\s|Quando\s|This\s+is|Isso\s+é|You\s+|Você\s+|It\s+|É\s+|A\s+|O\s+|The\s+).+)$/i,
            /^(.+?[.!?:])(\s+[A-Z][a-z].+)$/,
          ];
          
          for (const pattern of separatorPatterns) {
            const patternMatch = restOfLine.match(pattern);
            if (patternMatch) {
              const potentialTitle = patternMatch[1].trim();
              const potentialContent = patternMatch[2].trim();
              if (potentialTitle.length >= 10 && potentialTitle.length <= 100) {
                title = potentialTitle;
                contentAfter = potentialContent;
                break;
              }
            }
          }
          
          if (!contentAfter && title.length > 80) {
            const sentenceMatch = title.match(/^(.{20,60}[.!?:])\s+(.+)$/);
            if (sentenceMatch) {
              title = sentenceMatch[1];
              contentAfter = sentenceMatch[2];
            }
          }
          
          return (
            <div key={index} className="mb-8">
              <h2 className="flex items-start gap-4 mb-4">
                <span className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full text-xl font-bold flex-shrink-0 shadow-lg">
                  {number}
                </span>
                <span className="pt-2 font-heading text-2xl">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]} 
                    components={{ p: ({ children }) => <>{children}</> }}
                  >
                    {title}
                  </ReactMarkdown>
                </span>
              </h2>
              {contentAfter && (
                <div className="text-muted-foreground ml-16">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentAfter}</ReactMarkdown>
                </div>
              )}
            </div>
          );
        }
      }
      
      // Render highlight boxes (Veredito, Resumo, etc.)
      if (section.type === 'highlight') {
        const colonIndex = section.content.indexOf(':');
        const label = section.content.substring(0, colonIndex);
        const text = section.content.substring(colonIndex + 1).trim();
        
        return (
          <div key={index} className="highlight-box">
            <p className="mb-0">
              <strong>{label}:</strong>{' '}
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]} 
                components={{ p: ({ children }) => <>{children}</> }}
              >
                {text}
              </ReactMarkdown>
            </p>
          </div>
        );
      }
      
      // Render tip boxes
      if (section.type === 'tip') {
        return (
          <div key={index} className="tip-box">
            <div>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.content}</ReactMarkdown>
            </div>
          </div>
        );
      }
      
      // Render markdown content
      if (section.type === 'markdown' && section.content) {
        return (
          <div key={index} className="markdown-content">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                // Style links
                a: ({ href, children }) => (
                  <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                // Style lists
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 my-4 ml-4">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 my-4 ml-4">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-muted-foreground">{children}</li>
                ),
                // Style headings
                h1: ({ children }) => (
                  <h1 className="font-heading text-3xl font-bold mt-8 mb-4">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="font-heading text-2xl font-bold mt-6 mb-3">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-heading text-xl font-semibold mt-4 mb-2">{children}</h3>
                ),
                // Style paragraphs
                p: ({ children }) => (
                  <p className="mb-4 text-muted-foreground leading-relaxed">{children}</p>
                ),
                // Style bold/italic
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic">{children}</em>
                ),
                // Style code
                code: ({ children }) => (
                  <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
                ),
                // Style blockquotes
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
                    {children}
                  </blockquote>
                ),
                // Style horizontal rules
                hr: () => (
                  <hr className="my-8 border-border" />
                ),
              }}
            >
              {section.content}
            </ReactMarkdown>
          </div>
        );
      }
      
      return null;
    }).filter(Boolean);
  }, [content]);

  return <div className="prose prose-lg max-w-none">{formattedContent}</div>;
};
