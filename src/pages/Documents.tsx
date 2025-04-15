
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Upload, FolderPlus } from "lucide-react";
import DocumentSearch from "@/components/documents/DocumentSearch";
import DocumentGrid from "@/components/documents/DocumentGrid";
import DocumentList from "@/components/documents/DocumentList";
import { ViewMode } from "@/types/documents";
import { 
  documents, 
  getFilteredDocuments, 
  getClientDocuments, 
  getInternalDocuments,
  formatDate 
} from "@/data/documents";

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  
  const filteredDocuments = getFilteredDocuments(searchQuery);
  const clientDocuments = getClientDocuments(filteredDocuments);
  const internalDocuments = getInternalDocuments(filteredDocuments);

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

      <DocumentSearch 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="client">Client Documents</TabsTrigger>
          <TabsTrigger value="internal">Internal</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          {viewMode === "grid" ? (
            <DocumentGrid documents={filteredDocuments} formatDate={formatDate} />
          ) : (
            <DocumentList documents={filteredDocuments} formatDate={formatDate} />
          )}
        </TabsContent>
        
        <TabsContent value="client" className="mt-0">
          {viewMode === "grid" ? (
            <DocumentGrid documents={clientDocuments} formatDate={formatDate} />
          ) : (
            <DocumentList documents={clientDocuments} formatDate={formatDate} />
          )}
        </TabsContent>
        
        <TabsContent value="internal" className="mt-0">
          {viewMode === "grid" ? (
            <DocumentGrid documents={internalDocuments} formatDate={formatDate} />
          ) : (
            <DocumentList 
              documents={internalDocuments} 
              formatDate={formatDate} 
              showClientColumn={false}
            />
          )}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Documents;
