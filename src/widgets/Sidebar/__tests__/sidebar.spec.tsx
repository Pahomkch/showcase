import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {Sidebar} from 'widgets/Sidebar'

describe('Sidebar component', () => {
  test('Render without error', async () => {
    render(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Change classes and button text when toggle', async () => {
    render(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toHaveClass('close')
    expect(screen.getByTestId('sidebar')).toHaveTextContent('Open')
    await userEvent.click(screen.getByTestId('sidebar-toggle'))
    expect(screen.getByTestId('sidebar')).not.toHaveClass('close')
    expect(screen.getByTestId('sidebar')).toHaveTextContent('Close')
  })
})
