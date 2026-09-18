import styles from './notification.module.css'

export type NotificationType = 'success' | 'error'

export interface NotificationProps {
    id: string
    title: string

    message?: string
    type?: NotificationType
}

export const Notification = (props: NotificationProps) => {
    const {
        id,
        title,
        message,
        type = 'success'
    } = props

    if (!title) {
        return null
    }

    
    return (
        <div
            id={id}
            data-testid={id}
            className={`${styles.container} ${styles[type]}`}
        >
            <div className={styles.icon}>
                {type === 'success' ? '✓' : '!'}
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    {title}
                </div>
                {message && (
                    <div className={styles.message}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    )
}