
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { HelpCircle } from "lucide-react";
import { ExamplePrompts } from "@/components/klippi-ai/example-prompts";

interface ChatHeaderProps {
  onPromptSelect: (prompt: string) => void;
}

export const ChatHeader = ({ onPromptSelect }: ChatHeaderProps) => {
  return (
    <div className="flex justify-end items-center p-2 border-b border-border">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <HelpCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Help & Examples</span>
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
