
import React from "react";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content);
    if (onCopy) onCopy();
  };

  return (
    <div className={cn(
      "py-8 px-4 md:px-8 flex flex-col",
      message.role === "user" 
        ? "bg-muted/50" 
        : "bg-background",
      message.role === "system" && "bg-primary/5"
    )}>
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-2">
          <div className={cn(
            "w-6 h-6 flex items-center justify-center rounded-full text-xs",
            message.role === "user" 
              ? "bg-primary text-primary-foreground" 
              : message.role === "system" 
                ? "bg-secondary text-secondary-foreground"
                : "bg-muted text-foreground"
          )}>
            {message.role === "user" 
              ? "U" 
              : message.role === "system" 
                ? "S"
                : "K"}
          </div>
          <div className="font-medium">
            {message.role === "user" 
              ? "You" 
              : message.role === "system" 
                ? "System"
                : "Klippi"}
          </div>
          <div className="text-xs text-muted-foreground ml-auto">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
        
        <div className="whitespace-pre-wrap text-foreground pl-8">
          {message.content}
        </div>

        {message.role === "assistant" && (
          <div className="flex gap-2 mt-4 pl-8">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs text-muted-foreground hover:text-foreground"
              onClick={copyToClipboard}
            >
              <Copy className="mr-1 h-3 w-3" />
              Copy
            </Button>
            {onRetry && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs text-muted-foreground hover:text-foreground"
                onClick={onRetry}
              >
                <RefreshCcw className="mr-1 h-3 w-3" />
                Regenerate
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
