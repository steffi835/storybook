import styles from './button.module.css'

export interface ButtonProps {
    id: string
    testId: string
    
    label: string
    onClick: () => void
    
    backgroundColor?: string
    disabled?: boolean
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
}

export const Button = (props: ButtonProps) => {
    const {
        id,
        testId,
        label,
        onClick,
        backgroundColor,
        disabled = false,
        primary = true,
        size = 'medium'
    } = props
    const mode = primary ? styles.primary : styles.secondary

    return (
        <button
            id={id}
            data-testid={testId}
            className={[styles.base, styles[size], mode].join(' ')}
            disabled={disabled}
            style={{ backgroundColor }}
            type='button'
            onClick={onClick}
        >
            {label}
        </button>
    )
}
