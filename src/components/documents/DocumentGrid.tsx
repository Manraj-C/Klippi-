
import { 
  Card, CardContent 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, Share2, MoreHorizontal
} from "lucide-react";
import { DocumentType } from "@/types/documents";
import DocumentIcon from "./DocumentIcon";

interface DocumentGridProps {
  documents: DocumentType[];
  formatDate: (dateString: string) => string;
}

const DocumentGrid = ({ documents, formatDate }: DocumentGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {documents.map(doc => (
        <Card key={doc.id} className="overflow-hidden">
          <div className="h-32 bg-muted flex items-center justify-center">
            <DocumentIcon type={doc.type} />
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
              {doc.client ? (
                <span className="text-xs text-muted-foreground truncate max-w-[150px]" title={doc.client}>
                  {doc.client}
                </span>
              ) : (
                <span className="text-xs text-muted-foreground">Internal</span>
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
  );
};

export default DocumentGrid;
