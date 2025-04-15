
export interface DocumentType {
  id: number;
  name: string;
  type: string;
  size: string;
  modified: string;
  client: string | null;
  createdBy: string;
  shared: boolean;
}

export type ViewMode = "grid" | "list";
