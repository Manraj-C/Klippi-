
import { Search, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatTimestamp } from "@/lib/utils";

interface MessageListProps {
  conversations: any[];
  selectedConversation: number;
  setSelectedConversation: (id: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const MessageList = ({
  conversations,
  selectedConversation,
  setSelectedConversation,
  searchQuery,
  setSearchQuery
}: MessageListProps) => {
  const filteredConversations = conversations.filter(conversation => 
    conversation.contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conversation.contact.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="w-full md:w-80 flex-shrink-0">
      <CardContent className="p-4 h-full flex flex-col">
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search messages..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="ghost" size="icon">
            <PlusCircle className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex-1 overflow-auto">
          {filteredConversations.map(conversation => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`flex items-start gap-3 p-3 cursor-pointer rounded-md transition hover:bg-muted/50 ${
                selectedConversation === conversation.id ? 'bg-muted/50' : ''
              }`}
            >
              <div className="relative">
                <div className="rounded-full h-10 w-10 bg-primary/10 flex items-center justify-center text-primary">
                  {conversation.contact.name.charAt(0)}
                </div>
                {conversation.unread && (
                  <span className="absolute -right-1 -top-1 w-3 h-3 bg-primary rounded-full" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <p className="font-medium truncate">{conversation.contact.name}</p>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">
                    {formatTimestamp(conversation.lastUpdated)}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {conversation.messages[conversation.messages.length - 1].content}
                </p>
                <p className="text-xs text-muted-foreground">{conversation.contact.company}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
