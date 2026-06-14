import styles from './table.module.css'

export interface TableColumn<T> {
    label: string

    children?: TableColumn<T>[]
    key?: keyof T
    render?: (row: T) => React.ReactNode
}

export interface TableProps<T> {
    id: string

    columns: TableColumn<T>[]
    data: T[]

    hover?: boolean
    primary?: boolean
    striped?: boolean
}

export const Table = <T extends Record<string, unknown>>(props: TableProps<T>) => {
    const {
        id,
        columns,
        data,
        hover = false,
        primary = true,
        striped = false
    } = props

    const mode = primary ? styles.primary : styles.secondary
    const cardMode = primary ? styles['card-primary'] : styles['card-secondary']
    const leafColumns = columns.flatMap((column) => column.children ? column.children : [column])

    return (
        <div className={[styles['card'], cardMode].join(' ')}>
            <div className={styles['wrapper']}>
                <table
                    id={id}
                    data-testid={id}
                    className={[
                        styles.base,
                        mode,
                        striped ? styles['striped'] : '',
                        hover ? styles['hover'] : ''
                    ].join(' ')}
                >
                    <thead>
                        <tr>
                            {columns.map((column, index) => {
                                if (column.children) {
                                    return (
                                        <th
                                            key={index}
                                            colSpan={column.children.length}
                                        >
                                            {column.label}
                                        </th>
                                    )
                                }

                                return (
                                    <th
                                        key={index}
                                        rowSpan={2}
                                    >
                                        {column.label}
                                    </th>
                                )
                            })}
                        </tr>

                        <tr>
                            {columns.flatMap((column) =>
                                column.children
                                    ? column.children.map((child, childIndex) => (
                                        <th key={`${column.label}-${childIndex}`}>
                                            {child.label}
                                        </th>
                                    ))
                                    : []
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {leafColumns.map((column, colIndex) => (
                                    <td
                                        key={
                                            column.key
                                                ? String(column.key)
                                                : colIndex
                                        }
                                    >
                                        {column.render
                                            ? column.render(row)
                                            : column.key
                                                ? String(row[column.key])
                                                : null}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
