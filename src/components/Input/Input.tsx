import styles from './input.module.css'

export interface InputProps {
    id: string

    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

    disabled?: boolean
    error?: string
    label?: string
    mandatory?: boolean
    placeholder?: string
    primary?: boolean
    type?: string
    value?: string
}

export const Input = (props: InputProps) => {
    const {
        id,
        onChange,
        disabled = false,
        error,
        label,
        mandatory = false,
        placeholder = 'Enter',
        primary = true,
        type = 'text',
        value
    } = props
    const mode = primary ? styles.primary : styles.secondary

    return (
        <>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                    {mandatory && <span className={styles.mandatory}> *</span>}
                </label>
            )}
            <input
                id={id}
                data-testid={id}
                className={`${styles.base} ${mode}`}
                disabled={disabled}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
            {error && (
                <div
                    className={styles.errorMessage}
                    role='alert'
                    aria-live='polite'
                >
                    {error}
                </div>
            )}
        </>
    )
}