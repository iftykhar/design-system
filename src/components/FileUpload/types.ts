
export interface FileUploadProps {
    id: string;
    label?: string;
    accept?: string;
    multiple?: boolean;
    maxSize?: number;
    onFilesChange: (files: File[]) => void;
    disabled?: boolean;
    error?: string;
    helperText?: string;
    className?: string;
  }
  