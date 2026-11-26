import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-foreground font-heading mt-8 mb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-foreground font-heading mt-8 mb-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-bold text-foreground font-heading mt-6 mb-3">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-foreground/90 leading-relaxed mb-4">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-foreground">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-foreground/90">
              {children}
            </em>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1 mb-4 text-foreground/90">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1 mb-4 text-foreground/90">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
              {children}
            </blockquote>
          ),
          hr: () => (
            <hr className="my-8 border-border" />
          ),
          code: ({ children }) => (
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4 text-sm font-mono text-foreground">
              {children}
            </pre>
          ),
          img: ({ src, alt }) => (
            <img
              src={src || ""}
              alt={alt || ""}
              className="inline-block max-w-sm w-full md:max-w-xs rounded-lg object-cover my-4 mr-4 align-top"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}