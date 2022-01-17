import React from 'react'
import Column from '../index'
import { render, screen } from '@testing-library/react'
import { mockLibraryData } from '../../../../utils/mock'

describe('Column', () => {
  let container

  beforeEach(() => {
    ;({ container } = render(<Column data={mockLibraryData} />))
  })

  it('should render correctly', () => {
    expect(container).toMatchSnapshot()
  })

  it('should display the correct duration format', () => {
    const duration = screen.getByText('0:34')

    expect(duration).toBeInTheDocument()
  })
})
