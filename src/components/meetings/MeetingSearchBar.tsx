
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface MeetingSearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export const MeetingSearchBar: React.FC<MeetingSearchBarProps> = ({ value, onChange, placeholder }) => (
  <div className="relative flex-1 w-full">
    <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground z-10" />
    <Input
      type="search"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder || "Smart Search meetings..."}
      className="pl-10 bg-muted/40"
      autoFocus
      spellCheck={false}
    />
  </div>
);
