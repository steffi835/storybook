import styles from './checkbox.module.css'

export interface CheckboxProps {
    id: string

    checked: boolean
    label: string
    onChange: (checked: boolean) => void

    disabled?: boolean
}

export const Checkbox = (props: CheckboxProps) => {
    const { id, checked, label, onChange, disabled } = props

    return (
        <label htmlFor={id} className={[styles.base, disabled ? styles.disabled : ''].join(' ')}>
            <input
                id={id}
                data-testid={id}
                checked={checked}
                disabled={disabled}
                type='checkbox'
                onChange={(e) => onChange(e.target.checked)}
            />
            <span>{label}</span>
        </label>
    )
}
