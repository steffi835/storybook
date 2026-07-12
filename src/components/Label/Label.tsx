import styles from './label.module.css'

export interface LabelProps {
    id: string

    value: string
    
    label?: string
}

export const Label = (props: LabelProps) => {
    const {
        id,
        value,
        label
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
            <div className={styles.value}>
                {value}
            </div>
        </div>
    )
}
