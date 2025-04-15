
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, PlusCircle, MoreHorizontal } from "lucide-react";

const Clients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample client data
  const clients = [
    {
      id: 1,
      name: "Acme Inc.",
      industry: "Technology",
      contact: "John Smith",
      email: "john@acmeinc.com",
      status: "active",
      health: "excellent"
    },
    {
      id: 2,
      name: "Global Industries",
      industry: "Manufacturing",
      contact: "Sarah Johnson",
      email: "sarah@globalind.com",
      status: "active",
      health: "good"
    },
    {
      id: 3,
      name: "Tech Corp",
      industry: "Software",
      contact: "Mike Williams",
      email: "mike@techcorp.com",
      status: "active",
      health: "needs-attention"
    },
    {
      id: 4,
      name: "Digital Solutions",
      industry: "Consulting",
      contact: "Emily Brown",
      email: "emily@digitalsolutions.com",
      status: "inactive",
      health: "at-risk"
    },
    {
      id: 5,
      name: "Marketing Pro",
      industry: "Marketing",
      contact: "David Lee",
      email: "david@marketingpro.com",
      status: "active",
      health: "good"
    }
  ];

  // Filter clients based on search query
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderHealthBadge = (health) => {
    const badgeClasses = {
      excellent: "bg-green-100 text-green-800",
      good: "bg-blue-100 text-blue-800",
      "needs-attention": "bg-yellow-100 text-yellow-800",
      "at-risk": "bg-red-100 text-red-800"
    };

    const labels = {
      excellent: "Excellent",
      good: "Good",
      "needs-attention": "Needs Attention",
      "at-risk": "At Risk"
    };

    return (
      <span className={`text-xs px-2 py-1 rounded-full ${badgeClasses[health]}`}>
        {labels[health]}
      </span>
    );
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Clients</h1>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Client
        </Button>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search clients..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Clients</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="rounded-md border">
            <div className="overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Client</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Industry</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Contact</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Health</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients.map((client) => (
                    <tr key={client.id} className="border-t hover:bg-muted/50">
                      <td className="px-4 py-3 font-medium">{client.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{client.industry}</td>
                      <td className="px-4 py-3">
                        <div>{client.contact}</div>
                        <div className="text-xs text-muted-foreground">{client.email}</div>
                      </td>
                      <td className="px-4 py-3">
                        {renderHealthBadge(client.health)}
                      </td>
                      <td className="px-4 py-3">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="active" className="mt-0">
          {/* Similar table structure for active clients */}
          <div className="rounded-md border">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                {/* Table content similar to above, filtered for active clients */}
                <thead className="bg-muted/50">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Client</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Industry</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Contact</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Health</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients
                    .filter(client => client.status === "active")
                    .map((client) => (
                      <tr key={client.id} className="border-t hover:bg-muted/50">
                        <td className="px-4 py-3 font-medium">{client.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{client.industry}</td>
                        <td className="px-4 py-3">
                          <div>{client.contact}</div>
                          <div className="text-xs text-muted-foreground">{client.email}</div>
                        </td>
                        <td className="px-4 py-3">
                          {renderHealthBadge(client.health)}
                        </td>
                        <td className="px-4 py-3">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="inactive" className="mt-0">
          {/* Similar table structure for inactive clients */}
          <div className="rounded-md border">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                {/* Table content similar to above, filtered for inactive clients */}
                <thead className="bg-muted/50">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Client</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Industry</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Contact</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Health</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients
                    .filter(client => client.status === "inactive")
                    .map((client) => (
                      <tr key={client.id} className="border-t hover:bg-muted/50">
                        <td className="px-4 py-3 font-medium">{client.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{client.industry}</td>
                        <td className="px-4 py-3">
                          <div>{client.contact}</div>
                          <div className="text-xs text-muted-foreground">{client.email}</div>
                        </td>
                        <td className="px-4 py-3">
                          {renderHealthBadge(client.health)}
                        </td>
                        <td className="px-4 py-3">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Clients;
