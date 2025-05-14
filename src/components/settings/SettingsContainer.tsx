
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface SettingsContainerProps {
  children: ReactNode;
}

export const SettingsContainer = ({ children }: SettingsContainerProps) => {
  return (
    <Card className="p-0">
      <CardContent className="p-0">
        {children}
      </CardContent>
    </Card>
  );
};
