export type NotificationType = 'success' | 'error';
export interface NotificationProps {
    id: string;
    title: string;
    message?: string;
    type?: NotificationType;
}
export declare const Notification: (props: NotificationProps) => import("react").JSX.Element | null;
