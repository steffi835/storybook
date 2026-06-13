interface DropdownOption {
    label: string;
    value: string;
}
export interface DropdownProps {
    id: string;
    options: DropdownOption[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
    label?: string;
    mandatory?: boolean;
    placeholder?: string;
    primary?: boolean;
    value?: string;
}
export declare const Dropdown: (props: DropdownProps) => import("react").JSX.Element;
export {};
