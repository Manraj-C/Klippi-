import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Search, Upload, FolderPlus, GridIcon, ListIcon, FileText, FileIcon, 
  FileImage, FileSpreadsheet, Download, Share2, MoreHorizontal, Trash2 
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const documents = [
    {
      id: 1,
      name: "Quarterly Business Review - Q1 2025",
      type: "pdf",
      size: "2.4 MB",
      modified: "2025-04-10T14:30:00",
      client: "Acme Inc.",
      createdBy: "You",
      shared: true
    },
    {
      id: 2,
      name: "Client Onboarding Guide",
      type: "doc",
      size: "1.8 MB",
      modified: "2025-04-05T09:15:00",
      client: "Tech Corp",
      createdBy: "Jane Smith",
      shared: true
    },
    {
      id: 3,
      name: "Product Roadmap 2025",
      type: "xlsx",
      size: "3.2 MB",
      modified: "2025-03-28T11:00:00",
      client: null,
      createdBy: "You",
      shared: false
    },
    {
      id: 4,
      name: "Customer Feedback Summary",
      type: "doc",
      size: "1.1 MB",
      modified: "2025-03-20T15:45:00",
      client: "Global Industries",
      createdBy: "You",
      shared: true
    },
    {
      id: 5,
      name: "Implementation Screenshots",
      type: "image",
      size: "4.3 MB",
      modified: "2025-03-15T10:30:00",
      client: "Digital Solutions",
      createdBy: "Mark Johnson",
      shared: false
    },
    {
      id: 6,
      name: "Contract Template",
      type: "pdf",
      size: "0.9 MB",
      modified: "2025-03-10T16:20:00",
      client: null,
      createdBy: "Legal Team",
      shared: true
    }
  ];

  const filteredDocuments = documents.filter(doc => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (doc.client && doc.client.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const clientDocuments = filteredDocuments.filter(doc => doc.client !== null);
  const internalDocuments = filteredDocuments.filter(doc => doc.client === null);
  
  const getFileIcon = (type: string) => {
    switch(type) {
      case 'pdf':
        return <FileIcon className="h-6 w-6 text-rose-500" />;
      case 'doc':
        return <FileText className="h-6 w-6 text-blue-500" />;
      case 'xlsx':
        return <FileSpreadsheet className="h-6 w-6 text-green-500" />;
      case 'image':
        return <FileImage className="h-6 w-6 text-purple-500" />;
      default:
        return <FileText className="h-6 w-6 text-gray-500" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Documents</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <FolderPlus className="h-4 w-4" />
            New Folder
          </Button>
          <Button className="gap-2">
            <Upload className="h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search documents..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <div className="border rounded-md flex">
              <Button 
                variant={viewMode === "grid" ? "secondary" : "ghost"} 
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <GridIcon className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === "list" ? "secondary" : "ghost"} 
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <ListIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="client">Client Documents</TabsTrigger>
          <TabsTrigger value="internal">Internal</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredDocuments.map(doc => (
                <Card key={doc.id} className="overflow-hidden">
                  <div className="h-32 bg-muted flex items-center justify-center">
                    {getFileIcon(doc.type)}
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-sm truncate flex-1" title={doc.name}>{doc.name}</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{doc.size}</span>
                      <span>{formatDate(doc.modified)}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      {doc.client && (
                        <span className="text-xs text-muted-foreground truncate max-w-[150px]" title={doc.client}>
                          {doc.client}
                        </span>
                      )}
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        {doc.shared && (
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Modified</TableHead>
                    <TableHead>Created By</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDocuments.map(doc => (
                    <TableRow key={doc.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getFileIcon(doc.type)}
                          <span>{doc.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{doc.client || "-"}</TableCell>
                      <TableCell>{doc.size}</TableCell>
                      <TableCell>{formatDate(doc.modified)}</TableCell>
                      <TableCell>{doc.createdBy}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                          {doc.shared && (
                            <Button variant="ghost" size="icon">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          )}
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="client" className="mt-0">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {clientDocuments.map(doc => (
                <Card key={doc.id} className="overflow-hidden">
                  <div className="h-32 bg-muted flex items-center justify-center">
                    {getFileIcon(doc.type)}
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-sm truncate flex-1" title={doc.name}>{doc.name}</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{doc.size}</span>
                      <span>{formatDate(doc.modified)}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xs text-muted-foreground truncate max-w-[150px]" title={doc.client}>
                        {doc.client}
                      </span>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        {doc.shared && (
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Modified</TableHead>
                    <TableHead>Created By</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clientDocuments.map(doc => (
                    <TableRow key={doc.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getFileIcon(doc.type)}
                          <span>{doc.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{doc.client}</TableCell>
                      <TableCell>{doc.size}</TableCell>
                      <TableCell>{formatDate(doc.modified)}</TableCell>
                      <TableCell>{doc.createdBy}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                          {doc.shared && (
                            <Button variant="ghost" size="icon">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          )}
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="internal" className="mt-0">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {internalDocuments.map(doc => (
                <Card key={doc.id} className="overflow-hidden">
                  <div className="h-32 bg-muted flex items-center justify-center">
                    {getFileIcon(doc.type)}
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-sm truncate flex-1" title={doc.name}>{doc.name}</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{doc.size}</span>
                      <span>{formatDate(doc.modified)}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xs text-muted-foreground">Internal</span>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        {doc.shared && (
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Modified</TableHead>
                    <TableHead>Created By</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {internalDocuments.map(doc => (
                    <TableRow key={doc.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getFileIcon(doc.type)}
                          <span>{doc.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{doc.size}</TableCell>
                      <TableCell>{formatDate(doc.modified)}</TableCell>
                      <TableCell>{doc.createdBy}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                          {doc.shared && (
                            <Button variant="ghost" size="icon">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          )}
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Documents;
