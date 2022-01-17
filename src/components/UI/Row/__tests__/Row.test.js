import Row from '../index'
import React from 'react'
import { render } from '@testing-library/react'
import { mockLibraryData } from '../../../../utils/mock'

describe('Row', () => {
  it('should render correctly', () => {
    const { container } = render(<Row data={[mockLibraryData]} />)
    expect(container).toMatchSnapshot()
  })
})
