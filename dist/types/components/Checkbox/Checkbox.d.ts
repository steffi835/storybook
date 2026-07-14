export interface CheckboxProps {
    id: string;
    checked: boolean;
    label: string;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}
export declare const Checkbox: (props: CheckboxProps) => import("react").JSX.Element;
