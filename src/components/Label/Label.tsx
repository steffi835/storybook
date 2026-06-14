import styles from './label.module.css'

export interface LabelProps {
    id: string
    
    label: string
}

export const Label = (props: LabelProps) => {
    const {
        id,
        label
    } = props

    return (
        <span
            id={id}
            data-testid={id}
            className={styles.base}
        >
            {label}
        </span>
    )
}
