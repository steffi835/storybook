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

    error?: string
    label?: string
    mandatory?: boolean
    placeholder?: string
    primary?: boolean
    value?: string
}

export const Dropdown = (props: DropdownProps) => {
    const {
        id,
        options,
        primary = true,
        onChange,
        error,
        label,
        mandatory = false,
        placeholder = 'Select',
        value
    } = props
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const selected = options.find(o => o.value === value)

    const mode = primary ? styles.primary : styles.secondary

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    useEffect(() => {
        if (options.length === 1 && mandatory) {
            const onlyOption = options[0]

            if (value !== onlyOption.value) {
                const event = {
                    target: {
                        name: id,
                        value: onlyOption.value
                    }
                } as React.ChangeEvent<HTMLSelectElement>

                onChange(event)
            }
        }
    }, [id, mandatory, options, value, onChange])

    return (
        <div
            id={id}
            data-testid={id}
            className={`${styles.base} ${mode} ${error ? styles.errorState : ''}`}
            ref={ref}
        >
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                    {mandatory && <span className={styles.mandatory}> *</span>}
                </label>
            )}
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
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
            {error && (
                <div
                    className={styles.errorMessage}
                    role='alert'
                    aria-live='polite'
                >
                    {error}
                </div>
            )}
        </div>
    )
}