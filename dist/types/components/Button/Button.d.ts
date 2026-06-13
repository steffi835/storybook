export interface ButtonProps {
    id: string;
    label: string;
    onClick: () => void;
    backgroundColor?: string;
    disabled?: boolean;
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
}
export declare const Button: (props: ButtonProps) => import("react").JSX.Element;
