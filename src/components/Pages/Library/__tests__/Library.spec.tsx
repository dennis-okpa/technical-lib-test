import { render } from '@testing-library/react'
import React from 'react'
import { mockLibraryData } from '../../../../utils/mock'
import Modal from '../../../UI/Modal/index'
import Library from '../index'

jest.mock('../../../../utils/hooks/fetch', () => ({
  useFetch: () => [
    {
      rows: [mockLibraryData],
    },
    jest.fn(),
  ],
}))
jest.mock('../../../UI/Modal/index')
;(Modal as jest.Mock).mockImplementation(({ children }) => (
  <span data-testid="mock-modal">{children}</span>
))

describe('The Library component', () => {
  let container: HTMLElement
  beforeEach(() => {
    ;({ container } = render(<Library />))
  })

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot()
  })

  describe('when I click on a thumbnail', () => {
    it.todo('should trigger the modal to appear')
  })
})
