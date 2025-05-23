
import { Message } from "./chat-message";

export interface ChatSession {
  id: string;
  title: string;
  timestamp: Date;
  preview: string;
  tags?: string[];
  messages: Message[];
}
