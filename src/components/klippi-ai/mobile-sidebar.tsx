
import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PanelLeft } from "lucide-react";
import { ChatSidebar } from "@/components/klippi-ai/chat-sidebar";
import { ChatSession } from "./types";

interface MobileSidebarProps {
  chatSessions: ChatSession[];
  activeChatId: string | null;
  onChatSelect: (id: string) => void;
  onNewChat: () => void;
}

export const MobileSidebar = ({
  chatSessions,
  activeChatId,
  onChatSelect,
  onNewChat
}: MobileSidebarProps) => {
  const closeSheet = () => {
    // Find and use the close button using a safe method
    const closeButton = document.querySelector('[data-radix-collection-item]') as HTMLElement | null;
    if (closeButton && typeof closeButton.click === 'function') {
      closeButton.click();
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden absolute left-4 top-4 z-10">
          <PanelLeft className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-80">
        <ChatSidebar
          sessions={chatSessions}
          activeChatId={activeChatId}
          onChatSelect={(id) => {
            onChatSelect(id);
            closeSheet();
          }}
          onNewChat={() => {
            onNewChat();
            closeSheet();
          }}
        />
      </SheetContent>
    </Sheet>
  );
};
