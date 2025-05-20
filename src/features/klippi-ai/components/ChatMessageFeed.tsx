
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "@/components/klippi-ai/chat-message";
import { ExamplePrompts } from "@/components/klippi-ai/example-prompts";
import { Sparkles } from "lucide-react";
import { ChatSession } from "../types";

interface ChatMessageFeedProps {
  activeChat: ChatSession;
  isLoading: boolean;
  showExamples: boolean;
  onPromptSelect: (prompt: string) => void;
  onRetryMessage: (content: string) => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export const ChatMessageFeed: React.FC<ChatMessageFeedProps> = ({
  activeChat,
  isLoading,
  showExamples,
  onPromptSelect,
  onRetryMessage,
  messagesEndRef
}) => {
  return (
    <ScrollArea className="flex-1">
      {activeChat?.messages.map((message) => (
        <ChatMessage 
          key={message.id} 
          message={message} 
          onRetry={message.role === "assistant" ? 
            () => onRetryMessage(activeChat.messages[activeChat.messages.length - 2]?.content || "") 
            : undefined
          }
          onCopy={() => {}}
        />
      ))}
      
      {/* Loading message */}
      {isLoading && (
        <div className="py-8 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-muted/30 rounded-lg p-4">
              <Sparkles className="h-5 w-5 animate-pulse text-primary" />
              <span>Klippi is thinking...</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Examples section */}
      {showExamples && activeChat?.messages.length <= 1 && (
        <div className="py-8 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-medium mb-4">Try asking Klippi about:</h2>
            <ExamplePrompts onPromptSelect={onPromptSelect} />
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </ScrollArea>
  );
};
