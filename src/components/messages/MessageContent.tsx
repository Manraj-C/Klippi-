
import { Send, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { formatTimestamp } from "@/lib/utils";

interface MessageContentProps {
  selectedConversation: any;
  messageInput: string;
  setMessageInput: (message: string) => void;
  handleSendMessage: () => void;
}

export const MessageContent = ({
  selectedConversation,
  messageInput,
  setMessageInput,
  handleSendMessage
}: MessageContentProps) => {
  if (!selectedConversation) {
    return (
      <Card className="h-full flex items-center justify-center">
        <CardContent className="text-center p-8">
          <p className="text-muted-foreground">Select a conversation to start messaging</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="flex-1">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="rounded-full h-8 w-8 bg-primary/10 flex items-center justify-center text-primary">
              {selectedConversation.contact.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{selectedConversation.contact.name}</p>
              <p className="text-xs text-muted-foreground">{selectedConversation.contact.company}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">View Profile</Button>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {selectedConversation.messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === 'me'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'me'
                    ? 'text-primary-foreground/70'
                    : 'text-muted-foreground'
                }`}>
                  {formatTimestamp(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button size="icon" onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
