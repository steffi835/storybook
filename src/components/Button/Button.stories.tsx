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
    args: {
        onClick: fn()
    },
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>

export const Variants: Story = {
    render: (args) => {
        return (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Button {...args} id='primary' label='Primary' />
                <Button {...args} id='secondary' label='Secondary' primary={false} />
            </div>
        )
    },
    args: {
        id: 'variants',
        label: 'Button'
    },
}

export const Sizes: Story = {
    render: (args) => {
        return (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Button {...args} id='small' size='small' label='Small' />
                <Button {...args} id='medium' size='medium' label='Medium' />
                <Button {...args} id='large' size='large' label='Large' />
            </div>
        )
    },
    args: {
        id: 'sizes',
        label: 'Button'
    },
    argTypes: {
        size: { table: { disable: true } }
    },
}
