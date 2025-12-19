import { useMemo } from "react";

interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  const formattedContent = useMemo(() => {
    // Pre-process: handle tables and normalize line breaks
    let processedContent = content;
    
    // Ensure proper line breaks before numbered headings
    processedContent = processedContent
      .replace(/([.!?])\s*(\d+\.\s+[A-Z])/g, '$1\n\n$2')
      // Ensure line breaks before special blocks (PT, EN, NL)
      .replace(/([.!?])\s*(Cenário|Scenario|Veredito|Verdict|Resumo|Summary|Dica|Tip|Samenvatting)/g, '$1\n\n$2');
    
    // Split into lines first to better handle the structure
    const rawLines = processedContent.split('\n');
    
    // Pre-process: combine standalone numbers with next line
    const lines: string[] = [];
    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i].trim();
      if (!line) continue;
      
      // Check if this is just a number with a period (possibly a broken heading)
      if (/^\d+\.$/.test(line) && i + 1 < rawLines.length) {
        const nextLine = rawLines[i + 1]?.trim();
        // If next line looks like a heading (starts with capital)
        if (nextLine && /^[A-Z]/.test(nextLine)) {
          // Combine them: "1." + "The Big Villain: Housing" => "1. The Big Villain: Housing"
          lines.push(`${line} ${nextLine}`);
          i++; // Skip next line since we merged it
          continue;
        }
      }
      
      // Check if this is just a number (possibly a broken heading)
      if (/^\d+$/.test(line) && i + 1 < rawLines.length) {
        const nextLine = rawLines[i + 1]?.trim();
        // If next line looks like a heading (starts with capital)
        if (nextLine && /^[A-Z]/.test(nextLine)) {
          // Combine them: "1" + "The Big Villain: Housing" => "1. The Big Villain: Housing"
          lines.push(`${line}. ${nextLine}`);
          i++; // Skip next line since we merged it
          continue;
        }
      }
      lines.push(line);
    }
    
    const sections: { type: string; content: string; items?: string[]; rows?: string[][] }[] = [];
    let currentCenario: { title: string; items: string[] } | null = null;
    let currentTable: { headers: string[]; rows: string[][] } | null = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      
      // Check for table-like content (lines with | separators or tab-separated values)
      const isTableRow = line.includes('|') || (line.includes('\t') && line.split('\t').length >= 3);
      
      if (isTableRow) {
        const cells = line.includes('|') 
          ? line.split('|').map(c => c.trim()).filter(c => c)
          : line.split('\t').map(c => c.trim()).filter(c => c);
        
        if (cells.length >= 2) {
          // If we have a pending cenário, save it first
          if (currentCenario) {
            sections.push({ type: 'cenario', content: currentCenario.title, items: currentCenario.items });
            currentCenario = null;
          }
          
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
      if (line.startsWith('Cenário') || line.startsWith('Scenario')) {
        // Save previous cenário if exists
        if (currentCenario) {
          sections.push({ type: 'cenario', content: currentCenario.title, items: currentCenario.items });
        }
        currentCenario = { title: line, items: [] };
        continue;
      }
      
      // Check if this is an expense item (Label: € value or Label: ~€ value)
      const expenseMatch = line.match(/^([^:]+):\s*(~?€?\s*[\d.,]+.*)/);
      const isTotalLine = line.toUpperCase().startsWith('TOTAL');
      
      if (currentCenario && (expenseMatch || isTotalLine)) {
        currentCenario.items.push(line);
        continue;
      }
      
      // If we hit a non-expense line and have a cenário, save it
      if (currentCenario) {
        sections.push({ type: 'cenario', content: currentCenario.title, items: currentCenario.items });
        currentCenario = null;
      }
      
      // Add regular content
      sections.push({ type: 'text', content: line });
    }
    
    // Don't forget the last cenário or table
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
    
    // Now render the sections
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
                        {formatInlineText(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      
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
      
      const trimmed = section.content;
      if (!trimmed) return null;
      
      // Check if it's a numbered section heading (e.g., "1. O Grande Vilão: Moradia")
      const numberedHeadingFullMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
      
      if (numberedHeadingFullMatch) {
        const [, number, restOfLine] = numberedHeadingFullMatch;
        
        // Try to extract just the title (usually ends at first sentence boundary)
        // Look for patterns that indicate content starting after title
        let title = restOfLine;
        let contentAfter = '';
        
        // Check for explicit title/content separation patterns
        const separatorPatterns = [
          // Patterns that indicate start of explanation content
          /^(.+?[.!?:])(\s+(?:If\s+you|Se\s+você|Many\s|Muitos\s|Beyond\s|Além\s|The\s+market|O\s+mercado|From\s|De\s|For\s+a\s|Para\s+um|When\s|Quando\s|This\s+is|Isso\s+é|You\s+|Você\s+|It\s+|É\s+|A\s+|O\s+|The\s+).+)$/i,
          // Pattern: Title followed by explanation starting with common words
          /^(.+?[.!?:])(\s+[A-Z][a-z].+)$/,
        ];
        
        for (const pattern of separatorPatterns) {
          const match = restOfLine.match(pattern);
          if (match) {
            const potentialTitle = match[1].trim();
            const potentialContent = match[2].trim();
            // Only split if title is reasonable length (not too short, not too long)
            if (potentialTitle.length >= 10 && potentialTitle.length <= 100) {
              title = potentialTitle;
              contentAfter = potentialContent;
              break;
            }
          }
        }
        
        // If no split found and title is very long, try to split at reasonable boundary
        if (!contentAfter && title.length > 80) {
          // Find first sentence ending after reasonable title length
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
              <span className="pt-2 font-heading text-2xl">{formatInlineText(title)}</span>
            </h2>
            {contentAfter && (
              <p className="text-muted-foreground ml-16">{formatInlineText(contentAfter)}</p>
            )}
          </div>
        );
      }
      
      // Check if it starts with "Veredito/Verdict" or "Resumo/Summary" (PT, EN, NL)
      if (trimmed.startsWith("Veredito") || trimmed.startsWith("Verdict") || 
          trimmed.match(/^Resumo:/) || trimmed.match(/^Summary:/) || trimmed.match(/^Samenvatting:/)) {
        return (
          <div key={index} className="highlight-box">
            <p className="mb-0">
              <strong>{trimmed.split(':')[0]}:</strong>
              {trimmed.includes(':') ? trimmed.substring(trimmed.indexOf(':') + 1) : ''}
            </p>
          </div>
        );
      }
      
      // Check if it's a tip (starts with "Dica/Tip") (PT, EN, NL)
      if (trimmed.match(/^(Dica|Tip)\s/i)) {
        return (
          <div key={index} className="tip-box">
            <div>
              <p className="mb-0">{trimmed}</p>
            </div>
          </div>
        );
      }
      
      // Check if it's a subheading with colon (e.g., "O Preço Real (2026):")
      if (trimmed.match(/^[A-Z][^.!?]*:/) && trimmed.split(':')[0].length < 60) {
        const colonIndex = trimmed.indexOf(':');
        const heading = trimmed.substring(0, colonIndex);
        const rest = trimmed.substring(colonIndex + 1).trim();
        
        // If there's content after the colon, it's a definition
        if (rest) {
          return (
            <div key={index} className="mb-6">
              <p className="mb-2">
                <strong className="text-foreground">{heading}:</strong>{' '}
                <span className="text-muted-foreground">{formatInlineText(rest)}</span>
              </p>
            </div>
          );
        }
        
        return <h3 key={index}>{heading}</h3>;
      }
      
      // Check if paragraph contains multiple items with colons (list-like content)
      const contentLines = trimmed.split('\n');
      if (contentLines.length > 1 && contentLines.every(line => line.includes(':'))) {
        return (
          <ul key={index} className="space-y-4 mb-8">
            {contentLines.map((line, i) => {
              const colonIndex = line.indexOf(':');
              if (colonIndex > -1) {
                const label = line.substring(0, colonIndex);
                const value = line.substring(colonIndex + 1).trim();
                return (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="font-semibold text-foreground min-w-fit">{label}:</span>
                    <span className="text-muted-foreground">{formatInlineText(value)}</span>
                  </li>
                );
              }
              return <li key={i}>{line}</li>;
            })}
          </ul>
        );
      }
      
      // Regular paragraph with inline formatting
      return (
        <p key={index}>
          {formatInlineText(trimmed)}
        </p>
      );
    }).filter(Boolean);
  }, [content]);

  return <div className="prose prose-lg max-w-none">{formattedContent}</div>;
};

// Helper function to format inline text (bold, currency highlighting)
function formatInlineText(text: string): React.ReactNode {
  // Split by currency values to highlight them
  const parts = text.split(/(€\s*[\d.,]+(?:\/mês)?)/g);
  
  return parts.map((part, i) => {
    // Highlight currency values
    if (part.match(/^€\s*[\d.,]+/)) {
      return (
        <span key={i} className="font-semibold text-primary whitespace-nowrap">
          {part}
        </span>
      );
    }
    
    // Handle text in quotes as emphasis
    const quoteParts = part.split(/(".*?")/g);
    if (quoteParts.length > 1) {
      return quoteParts.map((qPart, j) => {
        if (qPart.startsWith('"') && qPart.endsWith('"')) {
          return <em key={`${i}-${j}`} className="text-foreground">{qPart}</em>;
        }
        return <span key={`${i}-${j}`}>{qPart}</span>;
      });
    }
    
    return part;
  });
}
