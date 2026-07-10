import styles from './breadcrumb.module.css'

export interface BreadcrumbProps {
    id: string
    items: string[]
}

export const Breadcrumb = (props: BreadcrumbProps) => {
    const {
        id,
        items
    } = props

    return (
        <nav
            id={id}
            data-testid={id}
            className={styles.base}
        >
            <ol className={styles.list}>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1

                    return (
                        <li
                            key={`${item}-${index}`}
                            className={styles.item}
                            aria-current={isLast ? 'page' : undefined}
                        >
                            {index > 0 && (
                                <span className={styles.separator}>
                                    &gt;
                                </span>
                            )}

                            <span>{item}</span>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
