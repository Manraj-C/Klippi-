
import { FileIcon, FileText, FileImage, FileSpreadsheet } from "lucide-react";

interface DocumentIconProps {
  type: string;
  className?: string;
}

const DocumentIcon = ({ type, className = "h-6 w-6" }: DocumentIconProps) => {
  switch(type) {
    case 'pdf':
      return <FileIcon className={`${className} text-rose-500`} />;
    case 'doc':
      return <FileText className={`${className} text-blue-500`} />;
    case 'xlsx':
      return <FileSpreadsheet className={`${className} text-green-500`} />;
    case 'image':
      return <FileImage className={`${className} text-purple-500`} />;
    default:
      return <FileText className={`${className} text-gray-500`} />;
  }
};

export default DocumentIcon;
