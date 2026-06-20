export interface InputProps {
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: string;
    label?: string;
    mandatory?: boolean;
    placeholder?: string;
    primary?: boolean;
    type?: string;
    value?: string;
}
export declare const Input: (props: InputProps) => import("react").JSX.Element;
