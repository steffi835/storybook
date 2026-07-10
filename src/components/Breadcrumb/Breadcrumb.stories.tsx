import type { Meta, StoryObj } from '@storybook/react-vite'
import { Breadcrumb } from './Breadcrumb'
import changelog from './Breadcrumb.changelog.md?raw'
import pkg from '../../../package.json'

const meta = {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
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
} satisfies Meta<typeof Breadcrumb>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        id: 'breadcrumb',
        items: [
            'Home',
            'Products',
            'Label'
        ]
    }
}
