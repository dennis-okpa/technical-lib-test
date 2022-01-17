import Gallery from '../index'
import React from 'react'
import { render } from '@testing-library/react'
import { mockLibraryData } from '../../../../utils/mock'

jest.mock('../../../../utils/hooks/fetch', () => ({
  useFetch: () => [
    {
      rows: [mockLibraryData],
    },
    jest.fn(),
  ],
}))

describe('Gallery', () => {
  it('should render correctly', () => {
    const { container } = render(<Gallery />)
    expect(container).toMatchSnapshot()
  })
})
