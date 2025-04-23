
export interface Meeting {
  id: number;
  title: string;
  date: string;
  duration: number;
  client: string;
  type: string;
  status: "upcoming" | "completed";
  participants: string[];
  summary?: string;
  action_items?: string[];
  recording_url?: string;
  category?: string;
}
