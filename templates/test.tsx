import React from 'react'
import { render } from '@testing-library/react'

import {{pascalCase name}} from '.'

describe('{{pascalCase name}}', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render the {{pascalCase name}} component', () => {
    const props = {}
    const component = render(<{{pascalCase name}} {...props} />)
    expect(component).toBeTruthy()
  })
})
