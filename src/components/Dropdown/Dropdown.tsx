import { useEffect, useRef, useState } from 'react'
import styles from './dropdown.module.css'

interface DropdownOption {
    label: string
    value: string
}

export interface DropdownProps {
    id: string
    
    options: DropdownOption[]
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void

    label?: string
    placeholder?: string
    primary?: boolean
    value?: string
}

export const Dropdown = (props: DropdownProps) => {
    const {
        id,
        options,
        primary = true,
        label,
        placeholder = 'Select',
        value,
        onChange
    } = props
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const selected = options.find(o => o.value === value)

    const mode = primary ? `${styles.primary}` : `${styles.secondary}`

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
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <div
                id={id}
                data-testid={id}
                className={`${styles.base} ${mode}`}
                ref={ref}
            >
                <button
                    type='button'
                    className={styles.trigger}
                    onClick={() => setOpen(prev => !prev)}
                >
                    {selected?.label || placeholder}
                </button>
                {open && (
                    <ul className={styles.menu}>
                        {options.map(option => (
                            <li
                                key={option.value}
                                className={`${styles.item} ${option.value === value ? styles.active : ''}`}
                                onClick={() => {
                                    const event = {
                                        target: {
                                            name: id,
                                            value: option.value
                                        }
                                    } as React.ChangeEvent<HTMLSelectElement>

                                    onChange(event)
                                    setOpen(false)
                                }}
                            >
                                {option.value === value && <span className={styles.check}>✓</span>}
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}