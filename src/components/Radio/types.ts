
export interface RadioOption {
    label: string;
    value: string;
  }
  
  export interface RadioProps {
    /** Unique name for the radio group */
    name: string;
    /** Array of options to render */
    options: RadioOption[];
    /** Controlled selected value */
    selected: string;
    /** Change handler */
    onChange: (value: string) => void;
    /** Disable all radios */
    disabled?: boolean;
    /** Error message to display */
    error?: string;
    /** Helper text below the group */
    helperText?: string;
    /** Extra Tailwind classes */
    className?: string;
  }
  