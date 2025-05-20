
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, PlusCircle, MessageSquare, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatSession {
  id: string;
  title: string;
  timestamp: Date;
  preview: string;
}

interface ChatSidebarProps {
  sessions: ChatSession[];
  activeChatId: string | null;
  onChatSelect: (chatId: string) => void;
  onNewChat: () => void;
}

export const ChatSidebar = ({
  sessions,
  activeChatId,
  onChatSelect,
  onNewChat
}: ChatSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSessions = searchQuery
    ? sessions.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.preview.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : sessions;

  return (
    <div className="flex flex-col h-full border-r border-border">
      <div className="p-4">
        <Button 
          onClick={onNewChat}
          variant="outline" 
          className="w-full justify-start gap-2"
        >
          <PlusCircle className="h-4 w-4" />
          <span>New Chat</span>
        </Button>
        
        <div className="relative mt-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations"
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <ScrollArea className="flex-1 px-2">
        <div className="space-y-1 p-2">
          {filteredSessions.length > 0 ? (
            filteredSessions.map((session) => (
              <button
                key={session.id}
                className={cn(
                  "flex flex-col w-full text-left rounded-md p-3 text-sm transition-colors",
                  activeChatId === session.id
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted text-foreground"
                )}
                onClick={() => onChatSelect(session.id)}
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span className="font-medium truncate">{session.title}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{session.timestamp.toLocaleDateString()}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1 truncate">
                  {session.preview}
                </p>
              </button>
            ))
          ) : (
            <p className="text-center py-4 text-muted-foreground text-sm">
              No chats found
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
