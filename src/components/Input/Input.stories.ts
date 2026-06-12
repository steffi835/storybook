import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Input } from './Input'
import changelog from './Input.changelog.md?raw'
import pkg from '../../../package.json'

const meta = {
    title: 'Components/Input',
    component: Input,
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
    args: {
        onChange: fn()
    },
} satisfies Meta<typeof Input>

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        id: 'input-primary',
        testId: 'input-primary'
    },
}

export const Secondary: Story = {
    args: {
        id: 'input-secondary',
        testId: 'input-secondary',
        primary: false
    },
}

export const NumberInput: Story = {
    args: {
        id: 'input-number',
        testId: 'input-number',
        type: 'number',
    }
}
