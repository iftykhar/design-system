// src/components/DatePicker/types.ts
export interface DatePickerProps {
    id: string;
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: string;
    helperText?: string;
    className?: string;
  }
  