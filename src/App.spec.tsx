import React from 'react'
import { App } from './App'
import { render, getByText } from '@testing-library/react'

describe('The App component', () => {
  describe('when it renders', () => {
    let container: HTMLElement

    beforeEach(() => {
      ({ container } = render(<App />))
    });
    
    it('should match snapshot', () => {
      expect(container).toMatchSnapshot()
    });

    it('should contain expected text', () => {
      const mainText = getByText(container, 'Hello World')

      expect(mainText).toBeInTheDocument()
    })
  })
})
