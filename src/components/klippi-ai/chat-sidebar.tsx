
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, PlusCircle, MessageSquare, Clock, Hash } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatSession {
  id: string;
  title: string;
  timestamp: Date;
  preview: string;
  tags?: string[];
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
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = Array.from(
    new Set(
      sessions
        .flatMap(session => session.tags || [])
        .filter(Boolean)
    )
  );

  const filteredSessions = sessions.filter(session => {
    // Apply search filter
    const matchesSearch = searchQuery
      ? session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.preview.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    // Apply tag filter
    const matchesTag = selectedTag
      ? session.tags?.includes(selectedTag)
      : true;
      
    return matchesSearch && matchesTag;
  });

  return (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground">
      <div className="p-4">
        <Button 
          onClick={onNewChat}
          variant="default" 
          className="w-full justify-start gap-2 bg-white/10 hover:bg-white/20 text-white"
        >
          <PlusCircle className="h-4 w-4" />
          <span>New Chat</span>
        </Button>
        
        <div className="relative mt-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-sidebar-foreground/70" />
          <Input
            placeholder="Search conversations"
            className="pl-8 bg-sidebar-accent/30 border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {allTags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className={cn(
                  "text-xs border-sidebar-border bg-transparent",
                  selectedTag === tag ? "bg-sidebar-accent text-sidebar-foreground" : "text-sidebar-foreground/70"
                )}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              >
                <Hash className="mr-1 h-3 w-3" />
                {tag}
              </Button>
            ))}
          </div>
        )}
      </div>

      <ScrollArea className="flex-1 px-2">
        <div className="space-y-1 p-1">
          {filteredSessions.length > 0 ? (
            filteredSessions.map((session) => (
              <button
                key={session.id}
                className={cn(
                  "flex flex-col w-full text-left rounded-md p-3 text-sm transition-colors",
                  activeChatId === session.id
                    ? "bg-sidebar-accent text-sidebar-foreground"
                    : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
                )}
                onClick={() => onChatSelect(session.id)}
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span className="font-medium truncate">{session.title}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-xs text-sidebar-foreground/70">
                  <Clock className="h-3 w-3" />
                  <span>{session.timestamp.toLocaleDateString()} {session.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <p className="text-xs text-sidebar-foreground/70 mt-1 truncate">
                  {session.preview}
                </p>
                {session.tags && session.tags.length > 0 && (
                  <div className="flex gap-1 mt-1 flex-wrap">
                    {session.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs px-1.5 py-0.5 bg-sidebar-accent/70 rounded-full text-sidebar-foreground/70"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            ))
          ) : (
            <p className="text-center py-4 text-sidebar-foreground/50 text-sm">
              No chats found
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
