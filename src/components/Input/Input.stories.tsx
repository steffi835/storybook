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

export const Variants: Story = {
    render: (args) => (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Input {...args} id='primary' />
            <Input {...args} id='secondary' primary={false} />
        </div>
    ),
    args: {
        id: 'variants',
    }
}

export const Number: Story = {
    args: {
        id: 'number',
        type: 'number',
    }
}

export const Label: Story = {
    args: {
        id: 'label',
        label: 'Label',
    },
}

export const Mandatory: Story = {
    args: {
        id: 'mandatory',
        label: 'Label',
        mandatory: true
    },
}

export const Error: Story = {
    args: {
        id: 'error',
        label: 'Label',
        error: 'This is an error message'
    },
}
