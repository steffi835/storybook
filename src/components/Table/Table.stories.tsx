import type { Meta, StoryObj } from '@storybook/react-vite'
import { Table } from './Table'
import changelog from './Table.changelog.md?raw'
import pkg from '../../../package.json'
import { Button } from '../Button/Button'

const sampleData = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Admin',
    },
    {
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'Editor',
    },
    {
        name: 'Michael Lee',
        email: 'michael@example.com',
        role: 'Viewer',
    },
]

const meta = {
    title: 'Components/Table',
    component: Table,
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
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        id: 'default-table',
        primary: true,
        columns: [
            {
                key: 'name',
                label: 'Name',
            },
            {
                key: 'email',
                label: 'Email',
            },
            {
                key: 'role',
                label: 'Role',
            },
        ],
        data: sampleData,
    },
}

export const Secondary: Story = {
    args: {
        id: 'secondary-table',
        primary: false,
        columns: [
            {
                key: 'name',
                label: 'Name',
            },
            {
                key: 'email',
                label: 'Email',
            },
            {
                key: 'role',
                label: 'Role',
            },
        ],
        data: sampleData,
    },
}

export const Striped: Story = {
    args: {
        id: 'striped-table',
        primary: true,
        striped: true,
        columns: [
            {
                key: 'name',
                label: 'Name',
            },
            {
                key: 'email',
                label: 'Email',
            },
            {
                key: 'role',
                label: 'Role',
            },
        ],
        data: sampleData,
    },
}

export const Hover: Story = {
    args: {
        id: 'hover-table',
        primary: true,
        hover: true,
        columns: [
            {
                key: 'name',
                label: 'Name',
            },
            {
                key: 'email',
                label: 'Email',
            },
            {
                key: 'role',
                label: 'Role',
            },
        ],
        data: sampleData,
    },
}

export const Actions: Story = {
    args: {
        id: 'actions',
        data: sampleData,
        columns: [
            {
                key: 'name',
                label: 'Name',
            },
            {
                key: 'email',
                label: 'Email',
            },
            {
                key: 'role',
                label: 'Role',
            },
            {
                label: 'Actions',
                render: () => (
                    <Button
                        id='button'
                        label='Button'
                        size='small'
                        onClick={() => {}}
                    />
                ),
            }
        ]
    }
}
