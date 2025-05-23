
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ChatSidebar } from "@/components/klippi-ai/chat-sidebar";
import { PanelLeft, PanelLeftClose } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatContainer } from "@/components/klippi-ai/chat-container";
import { ChatHeader } from "@/components/klippi-ai/chat-header";
import { MobileSidebar } from "@/components/klippi-ai/mobile-sidebar";
import { useChat } from "@/components/klippi-ai/use-chat";

const KlippiAI = () => {
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
            "w-80 border-r border-border md:flex flex-col h-full transition-all duration-300 ease-in-out bg-background",
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
          <div className="flex-1 flex flex-col h-full relative">
            {/* Toggle Sidebar Button (Desktop) */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex absolute left-4 top-4 z-10"
              onClick={toggleSidebar}
            >
              {showSidebar ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeft className="h-5 w-5" />}
            </Button>

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

export default KlippiAI;
