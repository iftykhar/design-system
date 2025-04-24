
export interface CheckboxProps {
       id: string;
       label: string;
       checked: boolean;
       onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
       disabled?: boolean;
       error?: string;
       helperText?: string;
       className?: string;
  }
  