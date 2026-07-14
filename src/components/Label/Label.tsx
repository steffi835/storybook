import styles from './label.module.css'

export interface LabelProps {
    id: string
    
    label?: string
    value?: string
}

export const Label = (props: LabelProps) => {
    const {
        id,
        label,
        value
    } = props

    return (
        <div
            id={id}
            data-testid={id}
            className={styles.container}
        >
            {label && (
                <div className={styles.label}>
                    {label}
                </div>
            )}
            {value && (
                <div className={styles.value}>
                    {value}
                </div>
            )}
        </div>
    )
}
