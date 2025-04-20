import { useState, useRef, useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip, Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  attachments?: Array<{
    id: string;
    name: string;
    type: string;
    url: string;
  }>;
}

const Klippi = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hey there! I'm Klippi, your Customer Success assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "" && attachments.length === 0) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
      attachments: attachments.map(file => ({
        id: Date.now() + file.name,
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
      })),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setAttachments([]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-with-klippi', {
        body: { message: input }
      });

      if (error) throw error;

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setAttachments(prev => [...prev, ...Array.from(files)]);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-2rem)] max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Klippi</h1>

        <div className="relative flex-1 bg-white rounded-lg overflow-hidden flex flex-col border border-border shadow-sm">
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div 
                  className={cn(
                    "max-w-[80%] rounded-lg p-4",
                    message.role === "user" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-foreground"
                  )}
                >
                  {message.attachments && message.attachments.length > 0 && (
                    <div className="mb-3 space-y-2">
                      {message.attachments.map(attachment => (
                        <div 
                          key={attachment.id} 
                          className="flex items-center gap-2 p-2 rounded bg-white/10"
                        >
                          {attachment.type.startsWith("image/") ? (
                            <img 
                              src={attachment.url} 
                              alt={attachment.name} 
                              className="h-20 w-20 object-cover rounded" 
                            />
                          ) : (
                            <div className="flex items-center">
                              <span className="text-sm">{attachment.name}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="whitespace-pre-wrap">{message.content}</div>
                  <div className="text-xs mt-2 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground max-w-[80%] rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 animate-pulse" />
                    <span>Klippi is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-border bg-card p-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              {attachments.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {attachments.map((file, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 px-3 py-1 bg-muted text-foreground rounded-full"
                    >
                      <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                      <button 
                        type="button" 
                        onClick={() => removeAttachment(index)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex items-end gap-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Message Klippi..."
                  className="min-h-[60px] max-h-[200px] resize-none bg-background border-input text-foreground focus-visible:ring-primary"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                <div className="flex gap-2">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    onClick={triggerFileInput}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={input.trim() === "" && attachments.length === 0}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                  multiple
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Klippi;
