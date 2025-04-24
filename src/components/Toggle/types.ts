
export interface ToggleProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    helperText?: string;
    readOnly?: boolean;
    className?: string;
  }
  