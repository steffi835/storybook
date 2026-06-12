import { useEffect, useRef, useState } from 'react'
import './dropdown.css'

interface DropdownOption {
    label: string
    value: string
}

export interface DropdownProps {
    id: string
    testId: string
    name: string
    
    options: DropdownOption[]
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void

    label?: string
    placeholder?: string
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    value?: string
}

export const Dropdown = (props: DropdownProps) => {
    const {
        id,
        testId,
        name,
        options,
        primary = true,
        label,
        placeholder = 'Select',
        size = 'medium',
        value,
        onChange
    } = props
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const selected = options.find(o => o.value === value)

    const mode = primary ? 'dropdown-primary' : 'dropdown-secondary'

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <>
            <label htmlFor={id} className="dropdown-label">
                {label}
            </label>
            <div
                id={id}
                data-testid={testId}
                className={['dropdown', `dropdown-${size}`, mode].join(' ')}
                ref={ref}
            >
                <button
                    type="button"
                    className="dropdown-trigger"
                    onClick={() => setOpen(prev => !prev)}
                >
                    {selected?.label || placeholder}
                </button>
                {open && (
                    <ul className="dropdown-menu">
                        {options.map(option => (
                            <li
                                key={option.value}
                                className={`dropdown-item ${option.value === value ? 'active' : ''}`}
                                onClick={() => {
                                    const event = {
                                        target: {
                                            name,
                                            value: option.value
                                        }
                                    } as React.ChangeEvent<HTMLSelectElement>

                                    onChange(event)
                                    setOpen(false)
                                }}
                            >
                                {option.value === value && <span className="check">✓</span>}
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}