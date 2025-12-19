import { useMemo } from "react";

interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  const formattedContent = useMemo(() => {
    // Pre-process: group Cenário sections with their expense items
    // Look for "Cenário" followed by expense lines (Label: € value)
    let processedContent = content;
    
    // Replace expense item patterns to ensure they're on separate lines within Cenário blocks
    processedContent = processedContent
      // Ensure proper line breaks before numbered headings
      .replace(/([.!?])\s*(\d+\.\s+[A-Z])/g, '$1\n\n$2')
      // Ensure line breaks before Cenário, Veredito, Dica
      .replace(/([.!?])\s*(Cenário|Veredito|Resumo|Dica)/g, '$1\n\n$2');
    
    // Split into lines first to better handle the structure
    const lines = processedContent.split('\n');
    const sections: { type: string; content: string; items?: string[] }[] = [];
    let currentCenario: { title: string; items: string[] } | null = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Check if this is a Cenário header
      if (line.startsWith('Cenário')) {
        // Save previous cenário if exists
        if (currentCenario) {
          sections.push({ type: 'cenario', content: currentCenario.title, items: currentCenario.items });
        }
        currentCenario = { title: line, items: [] };
        continue;
      }
      
      // Check if this is an expense item (Label: € value or Label: ~€ value or TOTAL: ~€ value)
      // More permissive regex to catch items like "Transporte (Bike + Transporte ocasional): € 50"
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
    
    // Don't forget the last cenário
    if (currentCenario) {
      sections.push({ type: 'cenario', content: currentCenario.title, items: currentCenario.items });
    }
    
    // Now render the sections
    return sections.map((section, index) => {
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
      
      // Check if it's a numbered section heading (e.g., "1. O Grande Vilão: Moradia (Aluguel)")
      // Match number, then capture title until we hit a sentence pattern
      const numberedHeadingMatch = trimmed.match(/^(\d+)\.\s+(.+?)(?:\s+)(Se\s|Além\s|Muitos\s|[A-Z][a-z]+\s+você|[A-Z][a-z]+\s+expatriados|[A-Z][a-z]+\s+do\s+teto)/);
      
      if (numberedHeadingMatch) {
        const [, number, title, startOfContent] = numberedHeadingMatch;
        const fullTitle = title.trim();
        const contentStart = trimmed.indexOf(startOfContent);
        const restOfText = contentStart > -1 ? trimmed.substring(contentStart).trim() : '';
        
        return (
          <div key={index} className="mb-8">
            <h2 className="flex items-start gap-4 mb-4">
              <span className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full text-xl font-bold flex-shrink-0 shadow-lg">
                {number}
              </span>
              <span className="pt-2 font-heading text-2xl">{formatInlineText(fullTitle)}</span>
            </h2>
            {restOfText && (
              <p className="text-muted-foreground ml-16">{formatInlineText(restOfText)}</p>
            )}
          </div>
        );
      }
      
      // Simpler numbered heading - just the number and title with no content
      const simpleNumberedMatch = trimmed.match(/^(\d+)\.\s+([^.]+)\.?\s*$/);
      if (simpleNumberedMatch) {
        const [, number, title] = simpleNumberedMatch;
        return (
          <div key={index} className="mb-8">
            <h2 className="flex items-start gap-4 mb-4">
              <span className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full text-xl font-bold flex-shrink-0 shadow-lg">
                {number}
              </span>
              <span className="pt-2 font-heading text-2xl">{formatInlineText(title)}</span>
            </h2>
          </div>
        );
      }
      
      // Skip Cenário here - it's handled above in the pre-processing
      
      // Check if it starts with "Veredito" or "Resumo"
      if (trimmed.startsWith("Veredito") || trimmed.match(/^Resumo:/)) {
        return (
          <div key={index} className="highlight-box">
            <p className="mb-0">
              <strong>{trimmed.split(':')[0]}:</strong>
              {trimmed.includes(':') ? trimmed.substring(trimmed.indexOf(':') + 1) : ''}
            </p>
          </div>
        );
      }
      
      // Check if it's a tip (starts with "Dica")
      if (trimmed.match(/^Dica\s/i)) {
        return (
          <div key={index} className="tip-box">
            <div>
              <p className="mb-0">{trimmed}</p>
            </div>
          </div>
        );
      }
      
      // Check for "Taxas Invisíveis" or similar quoted terms in headings
      if (trimmed.match(/^(\d+)\.\s+As?\s+"[^"]+"/)) {
        const match = trimmed.match(/^(\d+)\.\s+(.+?)(?:\s+)([A-Z][a-z].+)?$/);
        if (match) {
          const [, number, title, content] = match;
          return (
            <div key={index} className="mb-6">
              <h2 className="flex items-start gap-4 mb-4">
                <span className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full text-xl font-bold flex-shrink-0 shadow-lg">
                  {number}
                </span>
                <span className="pt-2">{formatInlineText(title)}</span>
              </h2>
              {content && (
                <p className="text-muted-foreground ml-16">{formatInlineText(content)}</p>
              )}
            </div>
          );
        }
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
      const lines = trimmed.split('\n');
      if (lines.length > 1 && lines.every(line => line.includes(':'))) {
        return (
          <ul key={index} className="space-y-4 mb-8">
            {lines.map((line, i) => {
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
