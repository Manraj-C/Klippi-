
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCcw, ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import ReactMarkdown from 'react-markdown';
import { toast } from "sonner";

export interface Message {
  id: string;
  role: "system" | "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
  onRetry?: () => void;
  onCopy?: () => void;
}

export const ChatMessage = ({ message, onRetry, onCopy }: ChatMessageProps) => {
  const [feedbackGiven, setFeedbackGiven] = useState<"positive" | "negative" | null>(null);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content);
    toast.success("Message copied to clipboard");
    if (onCopy) onCopy();
  };
  
  const giveFeedback = (type: "positive" | "negative") => {
    setFeedbackGiven(type);
    toast.success(`${type === "positive" ? "Positive" : "Negative"} feedback recorded`);
  };

  return (
    <div className={cn(
      "py-6 px-4 md:px-8 flex flex-col border-b",
      message.role === "user" 
        ? "bg-muted/30" 
        : "bg-background",
      message.role === "system" && "bg-primary/5"
    )}>
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-4">
          <div className={cn(
            "w-8 h-8 flex items-center justify-center rounded-full text-xs font-medium",
            message.role === "user" 
              ? "bg-muted text-foreground border border-border" 
              : message.role === "system" 
                ? "bg-secondary text-secondary-foreground"
                : "bg-primary text-primary-foreground"
          )}>
            {message.role === "user" 
              ? "You" 
              : message.role === "system" 
                ? "S"
                : "K"}
          </div>
          <div className="font-medium">
            {message.role === "user" 
              ? "You" 
              : message.role === "system" 
                ? "System"
                : "Klippi AI"}
          </div>
          <div className="text-xs text-muted-foreground ml-auto">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
        
        <div className="pl-10 prose prose-sm dark:prose-invert max-w-none prose-pre:bg-muted prose-pre:text-muted-foreground prose-code:text-primary prose-code:bg-muted/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-normal prose-headings:scroll-m-20 prose-h2:text-xl prose-h2:font-semibold prose-h3:text-lg prose-h3:font-medium">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return (props as React.HTMLAttributes<HTMLElement>).className?.includes('inline') ? (
                  <code className="text-primary px-1 py-0.5 rounded bg-muted/50" {...props}>
                    {children}
                  </code>
                ) : (
                  <pre className={cn("p-4 rounded-md bg-muted/50", className)}>
                    <code className={cn("text-sm", match && `language-${match[1]}`)} {...props}>
                      {children}
                    </code>
                  </pre>
                );
              },
              table({ children }) {
                return (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border text-sm">
                      {children}
                    </table>
                  </div>
                );
              },
              thead({ children }) {
                return <thead className="bg-muted/50">{children}</thead>;
              },
              th({ children }) {
                return <th className="border border-border px-4 py-2 text-left font-medium">{children}</th>;
              },
              td({ children }) {
                return <td className="border border-border px-4 py-2">{children}</td>;
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>

        {message.role === "assistant" && (
          <div className="flex gap-2 mt-6 pl-10">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs text-muted-foreground hover:text-foreground"
              onClick={copyToClipboard}
            >
              <Copy className="mr-1 h-3 w-3" />
              Copy
            </Button>
            {onRetry && (
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs text-muted-foreground hover:text-foreground"
                onClick={onRetry}
              >
                <RefreshCcw className="mr-1 h-3 w-3" />
                Regenerate
              </Button>
            )}
            <div className="ml-auto flex gap-1">
              <Button 
                variant="outline" 
                size="sm" 
                className={cn(
                  "text-xs",
                  feedbackGiven === "positive" 
                    ? "bg-green-50 text-green-600 border-green-200" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => giveFeedback("positive")}
                disabled={feedbackGiven !== null}
              >
                <ThumbsUp className="h-3 w-3" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className={cn(
                  "text-xs", 
                  feedbackGiven === "negative" 
                    ? "bg-red-50 text-red-600 border-red-200" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => giveFeedback("negative")}
                disabled={feedbackGiven !== null}
              >
                <ThumbsDown className="h-3 w-3" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
