
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, RefreshCcw, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const mockEmails = [
  {
    id: 1,
    to: "jane@company.com",
    avatar: "J",
    subject: "Congrats on the Tennis Cup!",
    preview: "Hi Jane, I saw your recent tweet about winning the NY local tennis cup, congrats! I'm reaching out from CSaaS - we've created an all-in-one product that can centralize your support across channels, which I'm sure is becoming an issue now that you've launched your 500th vertical farm!",
    date: "31/10/2024",
    read: false,
    category: "Social Commentary"
  },
  {
    id: 2,
    to: "katrina@company.com",
    avatar: "K",
    subject: "We need to chat",
    preview: "Hi Katrina, I wanted to follow up on our previous conversation about the new customer success strategies. We've made significant progress and I'd like to share the updated metrics with you.",
    date: "31/10/2024",
    read: true,
    category: "Follow-up"
  },
  {
    id: 3,
    to: "david@company.com",
    avatar: "D",
    subject: "Quarterly review feedback",
    preview: "David, thank you for joining our quarterly review session yesterday. I've compiled the feedback and metrics we discussed into a document that you can share with your team.",
    date: "30/10/2024",
    read: true,
    category: "Review"
  },
  {
    id: 4,
    to: "michael@company.com",
    avatar: "M",
    subject: "New feature roll-out",
    preview: "Hi Michael, I'm excited to let you know that we're rolling out the new analytics dashboard next week, which will give you much better visibility into your customer engagement metrics.",
    date: "29/10/2024",
    read: false,
    category: "Product Update"
  }
];

export function InboxMessages() {
  const [activeEmailId, setActiveEmailId] = useState<number | null>(1);
  const activeEmail = mockEmails.find(email => email.id === activeEmailId);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-1">
        <Card className="h-full">
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-4">
              <Input placeholder="Search emails..." className="flex-1" />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <Tabs defaultValue="pending">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 270px)" }}>
            {mockEmails.map((email) => (
              <div
                key={email.id}
                className={`p-4 border-b cursor-pointer ${
                  activeEmailId === email.id ? "bg-muted" : ""
                } ${!email.read ? "font-medium" : ""}`}
                onClick={() => setActiveEmailId(email.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                    {email.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{email.to}</p>
                    <p className="text-xs text-muted-foreground">{email.date}</p>
                  </div>
                </div>
                <h3 className="mt-2 text-sm font-medium">{email.subject}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {email.preview}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="lg:col-span-2">
        {activeEmail ? (
          <Card className="h-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="bg-violet-100 text-violet-700 hover:bg-violet-100">
                      {activeEmail.category}
                    </Badge>
                    <span className="text-muted-foreground text-sm">{activeEmail.date}</span>
                  </div>
                  <h2 className="text-xl font-bold">{activeEmail.subject}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <RefreshCcw className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="font-medium">To:</span>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">
                    {activeEmail.avatar}
                  </div>
                  <span className="ml-2">{activeEmail.to}</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <p>Hi Jane,</p>
                <p>
                  <span className="bg-violet-100 text-violet-800 px-2 py-0.5 rounded">I saw your recent tweet about winning the NY local tennis cup</span>, congrats! I'm reaching out from CSaaS - we've created an all-in-one product that can centralize your support across channels, which I'm sure is becoming an issue <span className="bg-pink-100 text-pink-800 px-2 py-0.5 rounded">now that you've launched your 500th vertical farm!</span>
                </p>
                <p>
                  We're already working with 23 other vertical farm providers, and I'm confident we'll be a great fit for you. Are you free to hop on a call next Monday at 4pm?
                </p>
                <p>
                  Best,<br />
                  Joseph
                </p>
              </div>

              <div className="mt-8 flex justify-end items-center gap-3">
                <Button variant="outline">
                  <RefreshCcw className="h-4 w-4 mr-2" />
                  Rewrite
                </Button>
                <Button variant="outline" className="text-violet-600 border-violet-200">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button className="bg-violet-600 hover:bg-violet-700">
                  Smart Schedule
                </Button>
              </div>
            </div>
          </Card>
        ) : (
          <Card className="h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">Select an email to view</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
