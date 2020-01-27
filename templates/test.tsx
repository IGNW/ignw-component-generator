import React from 'react'
import { render } from '@testing-library/react'
import {{pascalCase name}} from '.'

describe('{{pascalCase name}}', () => {
  it('should render the {{pascalCase name}} component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<{{ pascalCase name }} { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
