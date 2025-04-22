export interface TextInputProps {
    id: string;
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'email' | 'password';
    disabled?: boolean;
    error?: string;
    helperText?: string;
    className?: string;
  }
  