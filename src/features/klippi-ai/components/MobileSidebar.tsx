
import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PanelLeft } from "lucide-react";
import { ChatSidebar } from "@/components/klippi-ai/chat-sidebar";
import { ChatSession } from "../types";

interface MobileSidebarProps {
  chatSessions: ChatSession[];
  activeChatId: string | null;
  onChatSelect: (id: string) => void;
  onNewChat: () => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({
  chatSessions,
  activeChatId,
  onChatSelect,
  onNewChat,
  triggerRef
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          ref={triggerRef}
          variant="ghost" 
          size="icon" 
          className="md:hidden absolute left-4 top-4 z-10"
        >
          <PanelLeft className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-80">
        <ChatSidebar 
          sessions={chatSessions} 
          activeChatId={activeChatId}
          onChatSelect={onChatSelect}
          onNewChat={onNewChat}
        />
      </SheetContent>
    </Sheet>
  );
};
