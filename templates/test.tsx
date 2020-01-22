import React from 'react'
import { render } from '@testing-library/react'

import {{pascalCase name}} from '.'

describe('<%= componentName %>', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render the <%= componentName %> component', () => {
    const props = {}
    const component = render(<{{pascalCase name}} {...props} />)
    expect(component).toBeTruthy()
  })
})
