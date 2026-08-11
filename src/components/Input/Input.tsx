import styles from './input.module.css'

export interface InputProps {
    id: string

    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

    disabled?: boolean
    error?: string
    label?: string
    inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
    mandatory?: boolean
    placeholder?: string
    primary?: boolean
    type?: string
    value?: string

    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    const {
        id,
        onChange,
        disabled = false,
        error,
        label,
        inputMode,
        mandatory = false,
        placeholder = 'Enter',
        primary = true,
        type = 'text',
        value,
        onBlur
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
                inputMode={inputMode}
                placeholder={placeholder}
                type={type}
                value={value}
                onBlur={onBlur}
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