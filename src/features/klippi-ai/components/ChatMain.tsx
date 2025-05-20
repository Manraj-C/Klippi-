
import React from "react";
import { Button } from "@/components/ui/button";
import { ChatInput } from "@/components/klippi-ai/chat-input";
import { PanelLeft, PanelLeftClose } from "lucide-react";
import { ChatMessageFeed } from "./ChatMessageFeed";
import { ChatSession } from "../types";

interface ChatMainProps {
  activeChat: ChatSession;
  isLoading: boolean;
  showExamples: boolean;
  showSidebar: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  onSendMessage: (message: string) => void;
  onPromptSelect: (prompt: string) => void;
  onToggleSidebar: () => void;
  onRetryMessage: (content: string) => void;
}

export const ChatMain: React.FC<ChatMainProps> = ({
  activeChat,
  isLoading,
  showExamples,
  showSidebar,
  messagesEndRef,
  onSendMessage,
  onPromptSelect,
  onToggleSidebar,
  onRetryMessage
}) => {
  return (
    <div className="flex-1 flex flex-col h-full relative">
      {/* Toggle Sidebar Button (Desktop) */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="hidden md:flex absolute left-4 top-4 z-10"
        onClick={onToggleSidebar}
      >
        {showSidebar ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeft className="h-5 w-5" />}
      </Button>

      {/* Chat Messages */}
      <ChatMessageFeed
        activeChat={activeChat}
        isLoading={isLoading}
        showExamples={showExamples}
        onPromptSelect={onPromptSelect}
        onRetryMessage={onRetryMessage}
        messagesEndRef={messagesEndRef}
      />

      {/* Chat Input */}
      <ChatInput 
        onSend={onSendMessage} 
        isLoading={isLoading}
      />
    </div>
  );
};
