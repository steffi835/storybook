import './table.css'

export interface TableColumn<T> {
    key: keyof T
    label: string
    render?: (value: T[keyof T], row: T) => React.ReactNode
}

export interface TableProps<T> {
    id: string
    testId: string

    columns: TableColumn<T>[]
    data: T[]

    hover?: boolean
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    striped?: boolean
}

export const Table = <T extends Record<string, unknown>>(props: TableProps<T>) => {
    const {
        id,
        testId,
        columns,
        data,
        hover = false,
        primary = false,
        size = 'medium',
        striped = false
    } = props

    const mode = primary ? 'table-primary' : 'table-secondary'
    const cardMode = primary ? 'table-card-primary' : 'table-card-secondary'

    return (
        <div className={['table-card', cardMode].join(' ')}>
            <div className='table-wrapper'>
                <table
                    id={id}
                    data-testid={testId}
                    className={[
                        'table',
                        `table-${size}`,
                        mode,
                        striped ? 'table-striped' : '',
                        hover ? 'table-hover' : ''
                    ].join(' ')}
                >
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th key={String(column.key)}>
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {columns.map((column) => (
                                    <td key={String(column.key)}>
                                        {column.render
                                            ? column.render(row[column.key], row)
                                            : String(row[column.key])}
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
