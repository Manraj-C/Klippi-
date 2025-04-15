
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Download, Share2, Trash2
} from "lucide-react";
import { DocumentType } from "@/types/documents";
import DocumentIcon from "./DocumentIcon";

interface DocumentListProps {
  documents: DocumentType[];
  formatDate: (dateString: string) => string;
  showClientColumn?: boolean;
}

const DocumentList = ({ 
  documents, 
  formatDate,
  showClientColumn = true 
}: DocumentListProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            {showClientColumn && <TableHead>Client</TableHead>}
            <TableHead>Size</TableHead>
            <TableHead>Modified</TableHead>
            <TableHead>Created By</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map(doc => (
            <TableRow key={doc.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <DocumentIcon type={doc.type} />
                  <span>{doc.name}</span>
                </div>
              </TableCell>
              {showClientColumn && <TableCell>{doc.client || "-"}</TableCell>}
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
  );
};

export default DocumentList;
