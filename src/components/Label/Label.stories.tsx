import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './Label'
import changelog from './Label.changelog.md?raw'
import pkg from '../../../package.json'

const meta = {
    title: 'Components/Label',
    component: Label,
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
} satisfies Meta<typeof Label>

export default meta;
type Story = StoryObj<typeof meta>

export const Variants: Story = {
    args: {
        id: 'label',
        label: 'Label'
    }
}
