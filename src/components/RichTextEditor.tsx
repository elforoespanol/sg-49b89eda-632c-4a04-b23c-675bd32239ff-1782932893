import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Bold, Italic, Heading2, Link, Image, Eye, Code, List, ListOrdered } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

export function RichTextEditor({
  value,
  onChange,
  label = "Content",
  placeholder = "Write your content here...",
  required = false,
  rows = 15,
}: RichTextEditorProps) {
  const [showPreview, setShowPreview] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const wrapSelection = useCallback(
    (before: string, after: string = before, defaultText: string = "") => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selected = value.slice(start, end);

      const replacement = selected
        ? `${before}${selected}${after}`
        : `${before}${defaultText}${after}`;

      const newValue = value.slice(0, start) + replacement + value.slice(end);
      onChange(newValue);

      // Restore focus and select the wrapped text (or default text)
      requestAnimationFrame(() => {
        textarea.focus();
        const newCursor = start + before.length + (selected ? selected.length : defaultText.length);
        const selectStart = start + before.length;
        textarea.setSelectionRange(selected ? selectStart : newCursor, newCursor);
      });
    },
    [value, onChange]
  );

  const insertAtCursor = useCallback(
    (text: string) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      const newValue = value.slice(0, start) + text + value.slice(end);
      onChange(newValue);

      requestAnimationFrame(() => {
        textarea.focus();
        const newCursor = start + text.length;
        textarea.setSelectionRange(newCursor, newCursor);
      });
    },
    [value, onChange]
  );

  const toolbarItems = [
    { icon: Bold, label: "Bold", action: () => wrapSelection("**", "**", "bold text") },
    { icon: Italic, label: "Italic", action: () => wrapSelection("*", "*", "italic text") },
    { icon: Heading2, label: "Heading", action: () => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      const start = textarea.selectionStart;
      const isAtLineStart = start === 0 || value[start - 1] === "\n";
      const prefix = isAtLineStart ? "## " : "\n## ";
      insertAtCursor(prefix + "Heading\n");
    }},
    { icon: Link, label: "Link", action: () => wrapSelection("[", "](https://example.com)", "link text") },
    { icon: Image, label: "Image", action: () => insertAtCursor("\n![alt text](https://your-image-url.jpg)\n") },
    { icon: List, label: "Bullet List", action: () => insertAtCursor("\n- Item 1\n- Item 2\n- Item 3\n") },
    { icon: ListOrdered, label: "Numbered List", action: () => insertAtCursor("\n1. Item 1\n2. Item 2\n3. Item 3\n") },
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="rich-editor">{label}{required && " *"}</Label>
        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant={showPreview ? "ghost" : "secondary"}
            size="sm"
            onClick={() => setShowPreview(false)}
            className="h-8 px-2"
          >
            <Code className="h-4 w-4 mr-1" />
            Edit
          </Button>
          <Button
            type="button"
            variant={showPreview ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setShowPreview(true)}
            className="h-8 px-2"
          >
            <Eye className="h-4 w-4 mr-1" />
            Preview
          </Button>
        </div>
      </div>

      {!showPreview ? (
        <>
          <div className="flex flex-wrap gap-1 p-2 bg-muted rounded-t-lg border border-b-0 border-input">
            {toolbarItems.map((item) => (
              <Button
                key={item.label}
                type="button"
                variant="ghost"
                size="sm"
                onClick={item.action}
                title={item.label}
                className="h-8 w-8 p-0 hover:bg-background"
              >
                <item.icon className="h-4 w-4" />
                <span className="sr-only">{item.label}</span>
              </Button>
            ))}
          </div>
          <Textarea
            ref={textareaRef}
            id="rich-editor"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={rows}
            required={required}
            className="rounded-t-none border-t-0 min-h-[300px] font-mono text-sm"
          />
        </>
      ) : (
        <div className="border border-input rounded-lg p-6 min-h-[300px] bg-background overflow-auto">
          {value ? (
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground text-xs mb-4 border-b pb-2">
                Preview — this is how your post will look on the live site
              </p>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {value}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="text-muted-foreground italic">Nothing to preview yet...</p>
          )}
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        Tip: Select text and click a button, or click a button to insert at cursor.
      </p>
    </div>
  );
}