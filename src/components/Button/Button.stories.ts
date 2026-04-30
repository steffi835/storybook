import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from './Button'
import changelog from './Button.changelog.md?raw'
import pkg from '../../../package.json'

const meta = {
    title: 'Components/Button',
    component: Button,
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
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        id: 'primary-button',
        testId: 'primary-button',
        primary: true,
        label: 'Button',
    },
}

export const Secondary: Story = {
    args: {
        id: 'secondary-button',
        testId: 'secondary-button',
        primary: false,
        label: 'Button',
    },
}

export const Small: Story = {
    args: {
        id: 'small-button',
        testId: 'small-button',
        size: 'small',
        label: 'Button',
    }
}
