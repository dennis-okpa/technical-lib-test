import Library from '../index'
import { render } from '@testing-library/react'
import React from 'react'

describe('The Library component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Library />)
    expect(container).toMatchSnapshot()
  })
})
