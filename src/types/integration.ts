
export interface Integration {
  id: string;
  name: string;
  category: string;
  status: "connected" | "disconnected";
  icon: string;
  logo: string;
  description: string;
}
