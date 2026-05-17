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
            onChange={(newValue) => {
                setValue(newValue)
                args.onChange?.(newValue)
            }}
        />
    )
}

export const Primary: Story = {
    render: (args) => <StatefulDropdown {...args} />,
    args: {
        id: 'primary-dropdown',
        testId: 'primary-dropdown',
        primary: true,
        options: sampleOptions
    },
}

export const Secondary: Story = {
    render: (args) => <StatefulDropdown {...args} />,
    args: {
        id: 'secondary-dropdown',
        testId: 'secondary-dropdown',
        primary: false,
        options: sampleOptions,
    },
}

export const Sizes: Story = {
    render: (args) => {
        return (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <StatefulDropdown {...args} id='small-dropdown' size='small' />
                <StatefulDropdown {...args} id='medium-dropdown' size='medium' />
                <StatefulDropdown {...args} id='large-dropdown' size='large' />
            </div>
        )
    },
    args: {
        id: 'sizes-dropdown',
        testId: 'sizes-dropdown',
        options: sampleOptions,
    },
    argTypes: {
        size: { table: { disable: true } }
    },
}

export const WithDefaultValue: Story = {
    render: (args) => <StatefulDropdown {...args} />,
    args: {
        id: 'default-value-dropdown',
        testId: 'default-value-dropdown',
        options: sampleOptions,
        value: '2',
    },
}