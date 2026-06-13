import styles from './button.module.css'

export interface ButtonProps {
    id: string
    
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
            data-testid={id}
            type='button'
            className={[styles.base, styles[size], mode].join(' ')}
            disabled={disabled}
            style={{ backgroundColor }}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
