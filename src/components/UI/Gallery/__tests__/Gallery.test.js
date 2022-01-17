import Gallery from '../index'
import React from 'react'
import { render } from '@testing-library/react'
describe('Gallery', () => {
  it('should render correctly', () => {
    const { container } = render(<Gallery />)
    expect(container).toMatchSnapshot()
  })
})
