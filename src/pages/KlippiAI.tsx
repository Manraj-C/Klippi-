
import React, { useRef } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ChatSidebar } from "@/components/klippi-ai/chat-sidebar";
import { cn } from "@/lib/utils";
import useChat from "@/features/klippi-ai/hooks/use-chat";
import { ChatMain } from "@/features/klippi-ai/components/ChatMain";
import { MobileSidebar } from "@/features/klippi-ai/components/MobileSidebar";

const KlippiAI = () => {
  const {
    activeChat,
    activeChatId,
    chatSessions,
    isLoading,
    showExamples,
    showSidebar,
    messagesEndRef,
    handleSendMessage,
    handleNewChat,
    handleChatSelect,
    handleMobileNewChat,
    handlePromptSelect,
    toggleSidebar,
    simulateResponse
  } = useChat();
  
  // Reference to close the mobile sheet dialog
  const sheetTriggerRef = useRef<HTMLButtonElement>(null);

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-2rem)] flex flex-col">
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar - Desktop */}
          <div className={cn(
            "w-80 border-r border-border md:flex flex-col h-full transition-all duration-300 ease-in-out",
            showSidebar ? "flex" : "hidden"
          )}>
            <ChatSidebar 
              sessions={chatSessions} 
              activeChatId={activeChatId}
              onChatSelect={handleChatSelect}
              onNewChat={handleNewChat}
            />
          </div>

          {/* Sidebar - Mobile */}
          <MobileSidebar
            chatSessions={chatSessions}
            activeChatId={activeChatId}
            onChatSelect={handleChatSelect}
            onNewChat={handleMobileNewChat}
            triggerRef={sheetTriggerRef}
          />

          {/* Main Chat Area */}
          <ChatMain 
            activeChat={activeChat}
            isLoading={isLoading}
            showExamples={showExamples}
            showSidebar={showSidebar}
            messagesEndRef={messagesEndRef}
            onSendMessage={handleSendMessage}
            onPromptSelect={handlePromptSelect}
            onToggleSidebar={toggleSidebar}
            onRetryMessage={(content) => simulateResponse(content)}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default KlippiAI;
