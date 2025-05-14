
import { ReactNode } from "react";

interface SettingsHeaderProps {
  title: string;
  action?: ReactNode;
}

export const SettingsHeader = ({ title, action }: SettingsHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      {action}
    </div>
  );
};
