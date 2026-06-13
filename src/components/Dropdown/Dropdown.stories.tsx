import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Dropdown } from './Dropdown'
import changelog from './Dropdown.changelog.md?raw'
import pkg from '../../../package.json'
import { useState } from 'react'

const meta = {
    title: 'Components/Dropdown',
    component: Dropdown,
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
        onChange: fn(),
    },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

const sampleOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
]

const StatefulDropdown = (args: React.ComponentProps<typeof Dropdown>) => {
    const [value, setValue] = useState(args.value || '')

    return (
        <Dropdown
            {...args}
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
                args.onChange?.(e)
            }}
        />
    )
}

export const Variants: Story = {
    render: (args) => (
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
            <div>
                <StatefulDropdown {...args} primary={true} label="Primary" />
            </div>
            <div>
                <StatefulDropdown {...args} primary={false} label="Secondary" />
            </div>
        </div>
    ),
    args: {
        id: 'variants',
        options: sampleOptions
    },
}

export const Label: Story = {
    render: (args) => <StatefulDropdown {...args} />,
    args: {
        id: 'label',
        options: sampleOptions,
        label: 'Label',
    },
}

export const Mandatory: Story = {
    render: (args) => <StatefulDropdown {...args} />,
    args: {
        id: 'mandatory',
        options: sampleOptions,
        label: 'Label',
        mandatory: true
    },
}

export const Error: Story = {
    render: (args) => <StatefulDropdown {...args} />,
    args: {
        id: 'error',
        options: sampleOptions,
        label: 'Label',
        error: 'This is an error message'
    },
}
