
export interface Option {
    label: string;
    value: string;
  }
  
  export interface SelectProps {
    id: string;
    label: string;
    value: string;
    options: Option[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
    error?: string;
    helperText?: string;
    className?: string;
  }
  