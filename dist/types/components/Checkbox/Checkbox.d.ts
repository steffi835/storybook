export interface CheckboxProps {
    id: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    label?: string;
}
export declare const Checkbox: (props: CheckboxProps) => import("react").JSX.Element;
