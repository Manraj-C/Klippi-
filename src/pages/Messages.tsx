
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, PlusCircle, Send, Paperclip } from "lucide-react";

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageInput, setMessageInput] = useState("");
  
  // Mock conversation data
  const conversations = [
    {
      id: 1,
      contact: {
        name: "John Smith",
        company: "Acme Inc.",
        avatar: null
      },
      messages: [
        {
          id: 101,
          sender: "them",
          content: "Hi, I had a question about the API integration we discussed last week.",
          timestamp: "2025-04-14T10:30:00"
        },
        {
          id: 102,
          sender: "me",
          content: "Hi John, sure thing. What specifically are you looking to know about the API?",
          timestamp: "2025-04-14T10:35:00"
        },
        {
          id: 103,
          sender: "them",
          content: "We're trying to understand how to authenticate properly. The docs mention OAuth but we're not seeing how to get the client ID.",
          timestamp: "2025-04-14T10:40:00"
        },
        {
          id: 104,
          sender: "me",
          content: "Let me help with that. You'll need to generate API credentials in your admin dashboard. I can walk you through it if you'd like.",
          timestamp: "2025-04-14T10:42:00"
        },
        {
          id: 105,
          sender: "them",
          content: "That would be really helpful! Do you have time for a quick call tomorrow?",
          timestamp: "2025-04-14T10:45:00"
        }
      ],
      unread: true,
      lastUpdated: "2025-04-14T10:45:00"
    },
    {
      id: 2,
      contact: {
        name: "Sarah Johnson",
        company: "Global Industries",
        avatar: null
      },
      messages: [
        {
          id: 201,
          sender: "me",
          content: "Following up on our meeting yesterday, here's the documentation I promised.",
          timestamp: "2025-04-13T14:20:00"
        },
        {
          id: 202,
          sender: "them",
          content: "Thank you! This is exactly what we needed.",
          timestamp: "2025-04-13T15:05:00"
        }
      ],
      unread: false,
      lastUpdated: "2025-04-13T15:05:00"
    },
    {
      id: 3,
      contact: {
        name: "Mike Williams",
        company: "Tech Corp",
        avatar: null
      },
      messages: [
        {
          id: 301,
          sender: "them",
          content: "Our team has reviewed the proposal and we have some feedback to share.",
          timestamp: "2025-04-10T09:12:00"
        },
        {
          id: 302,
          sender: "me",
          content: "I'd be happy to discuss the feedback. When would be a good time to connect?",
          timestamp: "2025-04-10T09:30:00"
        },
        {
          id: 303,
          sender: "them",
          content: "How about next Tuesday at 2pm?",
          timestamp: "2025-04-10T10:15:00"
        },
        {
          id: 304,
          sender: "me",
          content: "Tuesday at 2pm works for me. I'll send a calendar invite shortly.",
          timestamp: "2025-04-10T10:20:00"
        }
      ],
      unread: false,
      lastUpdated: "2025-04-10T10:20:00"
    }
  ];

  // Filter conversations based on search query
  const filteredConversations = conversations.filter(conversation => 
    conversation.contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conversation.contact.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedConversationData = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Would normally update state and send to backend
      // For this demo, we'll just clear the input
      setMessageInput("");
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      
      <div className="flex flex-col md:flex-row h-[calc(100vh-200px)] gap-4">
        {/* Conversation List */}
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
        
        {/* Message Thread */}
        <Card className="flex-1">
          {selectedConversationData ? (
            <CardContent className="p-0 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="rounded-full h-8 w-8 bg-primary/10 flex items-center justify-center text-primary">
                    {selectedConversationData.contact.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{selectedConversationData.contact.name}</p>
                    <p className="text-xs text-muted-foreground">{selectedConversationData.contact.company}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">View Profile</Button>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-auto p-4 space-y-4">
                {selectedConversationData.messages.map(message => (
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
              
              {/* Input */}
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
          ) : (
            <CardContent className="h-full flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-muted-foreground">Select a conversation to start messaging</p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
