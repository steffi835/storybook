import type { Meta, StoryObj } from '@storybook/react-vite'
import { Notification } from './Notification'
import changelog from './Notification.changelog.md?raw'
import pkg from '../../../package.json'

const meta = {
    title: 'Components/Notification',
    component: Notification,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
### Current Version
**v${pkg.version}**

${changelog}
        `,
            }
        }
    },
    tags: ['autodocs']
} satisfies Meta<typeof Notification>

export default meta;
type Story = StoryObj<typeof meta>


export const Success: Story = {
    args: {
        id: 'notification-success',
        type: 'success',
        title: 'Success',
        message: 'The notification settings have been updated successfully.'
    }
}

export const Error: Story = {
    args: {
        id: 'notification-error',
        type: 'error',
        title: 'Error',
        message: 'Unable to update the notification settings. Please try again.'
    }
}
