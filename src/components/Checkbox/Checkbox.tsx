import styles from './checkbox.module.css'

export interface CheckboxProps {
    id: string

    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

    disabled?: boolean
    label?: string
}

export const Checkbox = (props: CheckboxProps) => {
    const { id, checked, onChange, disabled, label } = props

    return (
        <label htmlFor={id} className={[styles.base, disabled ? styles.disabled : ''].join(' ')}>
            <input
                id={id}
                data-testid={id}
                checked={checked}
                disabled={disabled}
                type='checkbox'
                onChange={onChange}
            />
            <span>{label}</span>
        </label>
    )
}
