import './dropdown.css'

interface DropdownOption {
    label: string
    value: string
}

export interface DropdownProps {
    id: string
    testId: string
    options: DropdownOption[]
    placeholder?: string
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    value?: string
    onChange?: (value: string) => void
}

export const Dropdown = (props: DropdownProps) => {
    const {
        id,
        testId,
        options,
        primary = true,
        placeholder = 'Select',
        size = 'medium',
        value,
        onChange
    } = props
    const mode = primary ? 'dropdown-primary' : 'dropdown-secondary'

    return (
        <select
            id={id}
            data-testid={testId}
            className={['dropdown', `dropdown-${size}`, mode].join(' ')}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
        >
            {!value && <option value=''>{placeholder}</option>}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}