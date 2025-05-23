
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

export const ChatInput = ({ 
  onSend, 
  isLoading, 
  placeholder = "Message Klippi..." 
}: ChatInputProps) => {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      // Auto adjust height based on content
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <div className="border-t border-border bg-background px-4 py-4">
      <form 
        onSubmit={handleSubmit} 
        className="max-w-3xl mx-auto relative"
      >
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="min-h-[60px] max-h-[200px] pr-12 resize-none rounded-xl shadow-sm focus-visible:ring-1 focus-visible:ring-primary"
          disabled={isLoading}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <Button 
          type="submit" 
          disabled={!input.trim() || isLoading}
          size="icon"
          className={cn(
            "absolute right-2 bottom-2 rounded-xl h-8 w-8",
            !input.trim() ? "opacity-50" : "bg-primary hover:bg-primary/90"
          )}
        >
          <Send className="h-4 w-4" />
        </Button>
        
        <div className="text-xs text-center mt-2 text-muted-foreground">
          Klippi can summarize customer information, provide insights, and assist with customer success tasks.
        </div>
      </form>
    </div>
  );
};
