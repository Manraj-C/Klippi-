
import { DocumentType } from "@/types/documents";

export const documents: DocumentType[] = [
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

export const getFilteredDocuments = (searchQuery: string) => {
  return documents.filter(doc => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (doc.client && doc.client.toLowerCase().includes(searchQuery.toLowerCase()))
  );
};

export const getClientDocuments = (documents: DocumentType[]) => {
  return documents.filter(doc => doc.client !== null);
};

export const getInternalDocuments = (documents: DocumentType[]) => {
  return documents.filter(doc => doc.client === null);
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
