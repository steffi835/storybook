import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps {
    id: string;
    testId: string;
    label: string;
    onClick: () => void;
    backgroundColor?: string;
    disabled?: boolean;
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
}
declare const Button: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

interface DropdownOption {
    label: string;
    value: string;
}
interface DropdownProps {
    id: string;
    options: DropdownOption[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    label?: string;
    placeholder?: string;
    primary?: boolean;
    value?: string;
}
declare const Dropdown: (props: DropdownProps) => react_jsx_runtime.JSX.Element;

interface InputProps {
    id: string;
    testId: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    type?: string;
    value?: string;
}
declare const Input: (props: InputProps) => react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps, Dropdown, type DropdownProps, Input, type InputProps };
