
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ChatSidebar } from "@/components/klippi-ai/chat-sidebar";
import { ChatContainer } from "@/components/klippi-ai/chat-container";
import { MobileSidebar } from "@/components/klippi-ai/mobile-sidebar";
import { useChat } from "@/components/klippi-ai/use-chat";
import { ChatHeader } from "@/components/klippi-ai/chat-header";
import { cn } from "@/lib/utils";

const KlippiGPT = () => {
  const {
    showSidebar,
    activeChatId,
    setActiveChatId,
    isLoading,
    showExamples,
    chatSessions,
    activeChat,
    handleSendMessage,
    simulateResponse,
    handleNewChat,
    toggleSidebar
  } = useChat();

  const handlePromptSelect = (prompt: string) => {
    handleSendMessage(prompt);
  };

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-2rem)] flex flex-col bg-background">
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar - Desktop */}
          <div className={cn(
            "w-72 border-r border-border md:flex flex-col h-full transition-all duration-300 ease-in-out bg-sidebar",
            showSidebar ? "flex" : "hidden"
          )}>
            <ChatSidebar 
              sessions={chatSessions} 
              activeChatId={activeChatId}
              onChatSelect={setActiveChatId}
              onNewChat={handleNewChat}
            />
          </div>

          {/* Sidebar - Mobile */}
          <MobileSidebar
            chatSessions={chatSessions}
            activeChatId={activeChatId}
            onChatSelect={setActiveChatId}
            onNewChat={handleNewChat}
          />

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col h-full">
            <ChatHeader 
              onPromptSelect={handlePromptSelect} 
              title={activeChat?.title || "Klippi"}
            />
            
            {/* Chat Container */}
            <ChatContainer
              activeChat={activeChat}
              isLoading={isLoading}
              showExamples={showExamples}
              onSendMessage={handleSendMessage}
              onPromptSelect={handlePromptSelect}
              onRetry={simulateResponse}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default KlippiGPT;
