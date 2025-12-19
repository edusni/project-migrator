import { useMemo } from "react";

interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  const formattedContent = useMemo(() => {
    // First, normalize line breaks and split into logical sections
    // Look for numbered headings and ensure they're separated
    let normalizedContent = content
      // Add paragraph breaks before numbered headings
      .replace(/([.!?])\s*(\d+\.\s+[A-Z])/g, '$1\n\n$2')
      // Add paragraph breaks before "Cenário", "Veredito", "Dica"
      .replace(/([.!?])\s*(Cenário|Veredito|Resumo|Dica)/g, '$1\n\n$2');
    
    // Split content into paragraphs
    const paragraphs = normalizedContent.split(/\n\n+/);
    
    return paragraphs.map((paragraph, index) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return null;
      
      // Check if it's a numbered section heading (e.g., "1. O Grande Vilão: Moradia")
      // More flexible regex to catch various formats
      const numberedHeadingMatch = trimmed.match(/^(\d+)\.\s+([^.]+?)(?:\s+(?=[A-Z][a-z])|\s*$)/);
      if (numberedHeadingMatch) {
        const [fullMatch, number, title] = numberedHeadingMatch;
        const restOfText = trimmed.substring(fullMatch.length).trim();
        
        return (
          <div key={index} className="mb-6">
            <h2 className="flex items-start gap-4 mb-4">
              <span className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full text-xl font-bold flex-shrink-0 shadow-lg">
                {number}
              </span>
              <span className="pt-2">{title}</span>
            </h2>
            {restOfText && (
              <p className="text-muted-foreground ml-16">{formatInlineText(restOfText)}</p>
            )}
          </div>
        );
      }
      
      // Alternative: check for numbered heading with content on same line
      const numberedWithContentMatch = trimmed.match(/^(\d+)\.\s+(.+?)(?:\s+)([A-Z][a-z].+)$/);
      if (numberedWithContentMatch) {
        const [, number, title, content] = numberedWithContentMatch;
        return (
          <div key={index} className="mb-6">
            <h2 className="flex items-start gap-4 mb-4">
              <span className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full text-xl font-bold flex-shrink-0 shadow-lg">
                {number}
              </span>
              <span className="pt-2">{title}</span>
            </h2>
            <p className="text-muted-foreground ml-16">{formatInlineText(content)}</p>
          </div>
        );
      }
      
      // Check if it starts with "Cenário" (scenario heading)
      if (trimmed.startsWith("Cenário")) {
        return (
          <div key={index} className="summary-card">
            <h3>{trimmed.split('\n')[0]}</h3>
            {trimmed.includes('\n') && (
              <div className="space-y-2 mt-4">
                {trimmed.split('\n').slice(1).map((line, i) => {
                  const lineMatch = line.match(/^(.+?):\s*(.+)$/);
                  if (lineMatch) {
                    const [, label, value] = lineMatch;
                    const isTotal = label.toLowerCase().includes('total');
                    return (
                      <div 
                        key={i} 
                        className={`flex justify-between items-center py-2 ${isTotal ? 'border-t-2 border-primary pt-4 mt-4' : 'border-b border-border/50'}`}
                      >
                        <span className={isTotal ? 'font-bold text-lg' : 'text-muted-foreground'}>
                          {label}
                        </span>
                        <span className={`font-mono ${isTotal ? 'text-primary font-bold text-xl' : 'font-semibold'}`}>
                          {value}
                        </span>
                      </div>
                    );
                  }
                  return <p key={i} className="text-muted-foreground">{line}</p>;
                })}
              </div>
            )}
          </div>
        );
      }
      
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
