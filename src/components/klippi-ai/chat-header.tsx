
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ExamplePrompts } from "@/components/klippi-ai/example-prompts";

interface ChatHeaderProps {
  onPromptSelect: (prompt: string) => void;
  title?: string;
}

export const ChatHeader = ({ onPromptSelect, title = "Klippi" }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-border bg-background h-14 sticky top-0 z-10">
      <div className="flex items-center">
        <h1 className="text-lg font-medium">{title}</h1>
        <ChevronDown className="h-4 w-4 ml-1 text-muted-foreground" />
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-2">
            <HelpCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Help</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <div className="space-y-4 py-2">
            <h3 className="text-lg font-medium">How to use Klippi AI</h3>
            <p className="text-sm text-muted-foreground">
              Klippi can help you analyze customer data, track relationship health, and automate CS workflows. Here are some examples of what you can ask:
            </p>
            <ExamplePrompts onPromptSelect={(prompt) => {
              onPromptSelect(prompt);
              // Close the dialog after selecting a prompt
              document.querySelector('[data-radix-dialog-close]')?.dispatchEvent(
                new MouseEvent('click', { bubbles: true })
              );
            }} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
