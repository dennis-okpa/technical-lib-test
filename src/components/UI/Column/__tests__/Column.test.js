import React from 'react'
import Column from '../index'
import { render } from '@testing-library/react'
import { mockLibraryData } from '../../../../utils/mock'

describe('Column', () => {
  it('should render correctly', () => {
    const { container } = render(<Column data={mockLibraryData} />)
    expect(container).toMatchSnapshot()
  })
})
