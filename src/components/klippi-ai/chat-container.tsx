
import React, { useRef, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "@/components/klippi-ai/chat-message";
import { ExamplePrompts } from "@/components/klippi-ai/example-prompts";
import { ChatInput } from "@/components/klippi-ai/chat-input";
import { ChatSession } from "./types";

interface ChatContainerProps {
  activeChat: ChatSession;
  isLoading: boolean;
  showExamples: boolean;
  onSendMessage: (content: string) => void;
  onPromptSelect: (prompt: string) => void;
  onRetry: (originalContent: string) => void;
}

export const ChatContainer = ({
  activeChat,
  isLoading,
  showExamples,
  onSendMessage,
  onPromptSelect,
  onRetry,
}: ChatContainerProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat.messages]);

  return (
    <>
      {/* Chat Messages */}
      <ScrollArea className="flex-1">
        <div className="py-4 md:py-6">
          {activeChat.messages.map((message) => (
            <ChatMessage 
              key={message.id} 
              message={message} 
              onRetry={message.role === "assistant" ? () => {
                const userMessage = activeChat.messages.find(
                  m => m.role === "user" && 
                  activeChat.messages.indexOf(m) < activeChat.messages.indexOf(message) && 
                  activeChat.messages.indexOf(m) === activeChat.messages.indexOf(message) - 1
                );
                onRetry(userMessage?.content || "");
              } : undefined}
              onCopy={() => {}}
            />
          ))}
          
          {/* Loading message */}
          {isLoading && (
            <div className="py-8 px-4 md:px-8">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 bg-muted/30 rounded-lg p-4">
                  <Sparkles className="h-5 w-5 animate-pulse text-primary" />
                  <span>Klippi is thinking...</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Examples section */}
          {showExamples && activeChat.messages.length <= 1 && (
            <div className="py-8 px-4 md:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-lg font-medium mb-4">Try asking Klippi about:</h2>
                <ExamplePrompts onPromptSelect={onPromptSelect} />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Chat Input */}
      <ChatInput 
        onSend={onSendMessage} 
        isLoading={isLoading}
      />
    </>
  );
};
