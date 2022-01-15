import Gallery from '../index'
import React from 'react'
import { render } from '@testing-library/react'
describe('Gallery', () => {
  it('should render correctly', () => {
    let container = render(<Gallery />)
    expect(container).toMatchSnapshot()
  })
})
