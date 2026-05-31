import './input.css'

export interface InputProps {
    id: string
    testId: string

    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

    placeholder?: string
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    type?: string
    value?: string
}

export const Input = (props: InputProps) => {
    const {
        id,
        testId,
        onChange,
        placeholder = 'Enter',
        primary = true,
        size = 'medium',
        type = 'text',
        value
    } = props
    const mode = primary ? 'input-primary' : 'input-secondary'

    return (
        <input
            id={id}
            data-testid={testId}
            className={['input', `input-${size}`, mode].join(' ')}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
        />
    )
}