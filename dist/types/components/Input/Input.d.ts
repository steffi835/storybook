export interface InputProps {
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: string;
    label?: string;
    inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
    mandatory?: boolean;
    placeholder?: string;
    primary?: boolean;
    type?: string;
    value?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export declare const Input: (props: InputProps) => import("react").JSX.Element;
