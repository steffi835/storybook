export interface InputProps {
    id: string;
    testId: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    type?: string;
    value?: string;
}
export declare const Input: (props: InputProps) => import("react/jsx-runtime").JSX.Element;
