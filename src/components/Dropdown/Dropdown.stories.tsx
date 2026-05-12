import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Dropdown } from './Dropdown'
import changelog from './Dropdown.changelog.md?raw'
import pkg from '../../../package.json'

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

export const Primary: Story = {
    args: {
        id: 'primary-dropdown',
        testId: 'primary-dropdown',
        primary: true,
        options: sampleOptions
    },
}

export const Secondary: Story = {
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
                <Dropdown {...args} id='small-dropdown' size='small' />
                <Dropdown {...args} id='medium-dropdown' size='medium' />
                <Dropdown {...args} id='large-dropdown' size='large' />
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
    args: {
        id: 'default-value-dropdown',
        testId: 'default-value-dropdown',
        options: sampleOptions,
        value: '2',
    },
}