import Modal from '../index'
import React from 'react'
import { render } from '@testing-library/react'

describe('Modal', () => {
  it('should render correctly', () => {
    const { container } = render(<Modal />)
    expect(container).toMatchSnapshot()
  })
})
