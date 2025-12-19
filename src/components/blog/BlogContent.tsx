import { useMemo } from "react";

interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  const formattedContent = useMemo(() => {
    // Split content into paragraphs
    const paragraphs = content.split(/\n\n+/);
    
    return paragraphs.map((paragraph, index) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return null;
      
      // Check if it's a numbered section heading (e.g., "1. O Grande Vilão: Moradia")
      const numberedHeadingMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
      if (numberedHeadingMatch) {
        const [, number, title] = numberedHeadingMatch;
        return (
          <h2 key={index} className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full text-lg font-bold flex-shrink-0">
              {number}
            </span>
            <span>{title}</span>
          </h2>
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
