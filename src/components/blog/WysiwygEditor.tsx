import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { Color } from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { 
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  List, ListOrdered, Quote, Link2, Image as ImageIcon,
  AlignLeft, AlignCenter, AlignRight, Heading1, Heading2, Heading3,
  Heading4, Heading5, Heading6, Highlighter,
  Undo, Redo, Code, Table as TableIcon, Palette
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { Separator } from '@/components/ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useCallback, useEffect, useState } from 'react';

interface WysiwygEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

const TEXT_COLORS = [
  { name: 'Preto', value: '#000000' },
  { name: 'Cinza escuro', value: '#4B5563' },
  { name: 'Cinza', value: '#9CA3AF' },
  { name: 'Vermelho', value: '#DC2626' },
  { name: 'Laranja', value: '#EA580C' },
  { name: 'Amarelo', value: '#CA8A04' },
  { name: 'Verde', value: '#16A34A' },
  { name: 'Azul', value: '#2563EB' },
  { name: 'Roxo', value: '#9333EA' },
  { name: 'Rosa', value: '#DB2777' },
];

const HIGHLIGHT_COLORS = [
  { name: 'Amarelo', value: '#FEF08A' },
  { name: 'Verde', value: '#BBF7D0' },
  { name: 'Azul', value: '#BFDBFE' },
  { name: 'Rosa', value: '#FBCFE8' },
  { name: 'Laranja', value: '#FED7AA' },
  { name: 'Roxo', value: '#DDD6FE' },
];

export const WysiwygEditor = ({ content, onChange, placeholder }: WysiwygEditorProps) => {
  const [colorOpen, setColorOpen] = useState(false);
  const [highlightOpen, setHighlightOpen] = useState(false);
  
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal',
          },
          keepMarks: true,
          keepAttributes: true,
        },
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc',
          },
          keepMarks: true,
          keepAttributes: true,
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-lg max-w-full my-4',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: 'border-collapse w-full',
        },
      }),
      TableRow,
      TableCell,
      TableHeader,
    ],
    content: content,
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none min-h-[400px] p-4 focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Update editor content when prop changes
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes('link').href;
    const url = window.prompt('URL do link:', previousUrl);

    if (url === null) return;

    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    const url = window.prompt('URL da imagem:');
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const insertTable = useCallback(() => {
    editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  }, [editor]);

  const setColor = useCallback((color: string) => {
    editor?.chain().focus().setColor(color).run();
    setColorOpen(false);
  }, [editor]);

  const removeColor = useCallback(() => {
    editor?.chain().focus().unsetColor().run();
    setColorOpen(false);
  }, [editor]);

  const setHighlight = useCallback((color: string) => {
    editor?.chain().focus().toggleHighlight({ color }).run();
    setHighlightOpen(false);
  }, [editor]);

  const removeHighlight = useCallback(() => {
    editor?.chain().focus().unsetHighlight().run();
    setHighlightOpen(false);
  }, [editor]);

  if (!editor) {
    return null;
  }

  const currentColor = editor.getAttributes('textStyle').color;

  return (
    <div className="border rounded-lg bg-background flex flex-col max-h-[80vh]">
      {/* Toolbar - sticky at top of editor */}
      <div className="border-b bg-muted/50 p-2 flex flex-wrap gap-1 items-center flex-shrink-0 sticky top-0 z-20 shadow-sm">
        {/* Undo/Redo */}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Undo className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Redo className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6 mx-1" />

        {/* Headings */}
        <Toggle
          size="sm"
          pressed={editor.isActive('heading', { level: 1 })}
          onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          title="Título 1 (H1)"
        >
          <Heading1 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('heading', { level: 2 })}
          onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          title="Título 2 (H2)"
        >
          <Heading2 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('heading', { level: 3 })}
          onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          title="Título 3 (H3)"
        >
          <Heading3 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('heading', { level: 4 })}
          onPressedChange={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          title="Título 4 (H4)"
        >
          <Heading4 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('heading', { level: 5 })}
          onPressedChange={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          title="Título 5 (H5)"
        >
          <Heading5 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('heading', { level: 6 })}
          onPressedChange={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          title="Título 6 (H6)"
        >
          <Heading6 className="h-4 w-4" />
        </Toggle>

        <Separator orientation="vertical" className="h-6 mx-1" />

        {/* Text formatting */}
        <Toggle
          size="sm"
          pressed={editor.isActive('bold')}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('italic')}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('underline')}
          onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('strike')}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('code')}
          onPressedChange={() => editor.chain().focus().toggleCode().run()}
        >
          <Code className="h-4 w-4" />
        </Toggle>

        {/* Text Color */}
        <Popover open={colorOpen} onOpenChange={setColorOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 relative"
              title="Cor do texto"
            >
              <Palette className="h-4 w-4" />
              {currentColor && (
                <div 
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full"
                  style={{ backgroundColor: currentColor }}
                />
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2" align="start">
            <div className="grid grid-cols-5 gap-1">
              {TEXT_COLORS.map((color) => (
                <button
                  key={color.value}
                  className="w-6 h-6 rounded border border-border hover:scale-110 transition-transform"
                  style={{ backgroundColor: color.value }}
                  onClick={() => setColor(color.value)}
                  title={color.name}
                />
              ))}
            </div>
            <Separator className="my-2" />
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-xs"
              onClick={removeColor}
            >
              Remover cor
            </Button>
          </PopoverContent>
        </Popover>

        {/* Highlight */}
        <Popover open={highlightOpen} onOpenChange={setHighlightOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 relative"
              title="Destaque (Highlight)"
            >
              <Highlighter className="h-4 w-4" />
              {editor.isActive('highlight') && (
                <div 
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-yellow-300"
                />
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2" align="start">
            <p className="text-xs text-muted-foreground mb-2">Cores de destaque:</p>
            <div className="grid grid-cols-3 gap-1">
              {HIGHLIGHT_COLORS.map((color) => (
                <button
                  key={color.value}
                  className="w-8 h-6 rounded border border-border hover:scale-110 transition-transform text-xs"
                  style={{ backgroundColor: color.value }}
                  onClick={() => setHighlight(color.value)}
                  title={color.name}
                />
              ))}
            </div>
            <Separator className="my-2" />
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-xs"
              onClick={removeHighlight}
            >
              Remover destaque
            </Button>
          </PopoverContent>
        </Popover>

        <Separator orientation="vertical" className="h-6 mx-1" />

        {/* Alignment */}
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: 'left' })}
          onPressedChange={() => editor.chain().focus().setTextAlign('left').run()}
        >
          <AlignLeft className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: 'center' })}
          onPressedChange={() => editor.chain().focus().setTextAlign('center').run()}
        >
          <AlignCenter className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: 'right' })}
          onPressedChange={() => editor.chain().focus().setTextAlign('right').run()}
        >
          <AlignRight className="h-4 w-4" />
        </Toggle>

        <Separator orientation="vertical" className="h-6 mx-1" />

        {/* Lists */}
        <Toggle
          size="sm"
          pressed={editor.isActive('bulletList')}
          onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('orderedList')}
          onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('blockquote')}
          onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote className="h-4 w-4" />
        </Toggle>

        <Separator orientation="vertical" className="h-6 mx-1" />

        {/* Link, Image, Table */}
        <Toggle
          size="sm"
          pressed={editor.isActive('link')}
          onPressedChange={setLink}
        >
          <Link2 className="h-4 w-4" />
        </Toggle>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={addImage}
        >
          <ImageIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={insertTable}
          title="Inserir tabela (também aceita colar de Excel/Sheets)"
        >
          <TableIcon className="h-4 w-4" />
        </Button>
      </div>

      {/* Editor content - scrollable area */}
      <div className="wysiwyg-editor flex-1 overflow-y-auto min-h-0">
        <EditorContent editor={editor} />
      </div>

      {/* Placeholder style */}
      <style>{`
        .ProseMirror p.is-editor-empty:first-child::before {
          color: hsl(var(--muted-foreground));
          content: '${placeholder || "Comece a escrever..."}';
          float: left;
          height: 0;
          pointer-events: none;
        }
        
        .wysiwyg-editor .ProseMirror {
          min-height: 400px;
          padding: 1rem;
        }
        
        .wysiwyg-editor .ProseMirror:focus {
          outline: none;
        }
        
        .wysiwyg-editor .ProseMirror h1 {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .wysiwyg-editor .ProseMirror h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 1.25rem;
          margin-bottom: 0.75rem;
        }
        
        .wysiwyg-editor .ProseMirror h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        
        .wysiwyg-editor .ProseMirror h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-top: 0.875rem;
          margin-bottom: 0.5rem;
          color: hsl(var(--primary));
        }
        
        .wysiwyg-editor .ProseMirror h5 {
          font-size: 1rem;
          font-weight: 600;
          margin-top: 0.75rem;
          margin-bottom: 0.375rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: hsl(var(--muted-foreground));
        }
        
        .wysiwyg-editor .ProseMirror h6 {
          font-size: 0.875rem;
          font-weight: 600;
          margin-top: 0.5rem;
          margin-bottom: 0.25rem;
          font-style: italic;
          color: hsl(var(--muted-foreground));
        }
        
        .wysiwyg-editor .ProseMirror mark {
          padding: 0.125rem 0.25rem;
          border-radius: 0.125rem;
        }
        
        .wysiwyg-editor .ProseMirror p {
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        
        .wysiwyg-editor .ProseMirror ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .wysiwyg-editor .ProseMirror ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          counter-reset: none;
        }
        
        .wysiwyg-editor .ProseMirror ol li {
          display: list-item;
        }
        
        .wysiwyg-editor .ProseMirror li {
          margin-bottom: 0.25rem;
        }
        
        .wysiwyg-editor .ProseMirror li p {
          margin-bottom: 0;
        }
        
        .wysiwyg-editor .ProseMirror blockquote {
          border-left: 4px solid hsl(var(--primary));
          padding-left: 1rem;
          margin: 1rem 0;
          color: hsl(var(--muted-foreground));
          font-style: italic;
        }
        
        .wysiwyg-editor .ProseMirror code {
          background: hsl(var(--muted));
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: monospace;
          font-size: 0.9em;
        }
        
        .wysiwyg-editor .ProseMirror table {
          border-collapse: collapse;
          width: 100%;
          margin: 1rem 0;
        }
        
        .wysiwyg-editor .ProseMirror th,
        .wysiwyg-editor .ProseMirror td {
          border: 1px solid hsl(var(--border));
          padding: 0.75rem;
          text-align: left;
        }
        
        .wysiwyg-editor .ProseMirror th {
          background: hsl(var(--primary) / 0.1);
          font-weight: 600;
        }
        
        .wysiwyg-editor .ProseMirror tr:nth-child(even) td {
          background: hsl(var(--muted) / 0.3);
        }
        
        .wysiwyg-editor .ProseMirror img {
          max-width: 100%;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }
        
        .wysiwyg-editor .ProseMirror a {
          color: hsl(var(--primary));
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};
