export interface TableColumn<T> {
    label: string;
    children?: TableColumn<T>[];
    key?: keyof T;
    render?: (row: T) => React.ReactNode;
}
export interface TableProps<T> {
    id: string;
    columns: TableColumn<T>[];
    data: T[];
    hover?: boolean;
    primary?: boolean;
    striped?: boolean;
}
export declare const Table: <T extends Record<string, unknown>>(props: TableProps<T>) => import("react").JSX.Element;
