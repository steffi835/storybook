import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Checkbox } from './Checkbox'
import changelog from './Checkbox.changelog.md?raw'
import pkg from '../../../package.json'

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
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
} satisfies Meta<typeof Checkbox>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        const [checked, setChecked] = useState(false)

        return (
            <Checkbox
                id='checkbox'
                label="Checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />
        )
    },
    args: {
        id: 'checkbox',
        label: 'Checkbox',
        checked: false,
        onChange: () => {}
    }
}

export const Disabled: Story = {
    args: {
        id: 'checkbox',
        label: 'Checkbox',
        checked: false,
        disabled: true,
        onChange: () => {}
    }
}
