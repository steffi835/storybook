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

export const Primary: Story = {
    render: (args) => <StatefulDropdown {...args} />,
    args: {
        id: 'primary-dropdown',
        primary: true,
        options: sampleOptions
    },
}

export const Secondary: Story = {
    render: (args) => <StatefulDropdown {...args} />,
    args: {
        id: 'secondary-dropdown',
        primary: false,
        options: sampleOptions,
    },
}

export const WithDefaultValue: Story = {
    render: (args) => <StatefulDropdown {...args} />,
    args: {
        id: 'default-value-dropdown',
        options: sampleOptions,
        value: '2',
    },
}

export const WithLabel: Story = {
    render: (args) => <StatefulDropdown {...args} />,
    args: {
        id: 'label-dropdown',
        options: sampleOptions,
        label: 'Label',
    },
}
