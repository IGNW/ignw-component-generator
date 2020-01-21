import React from 'react'
import { render } from '@testing-library/react'

import <%= componentName %> from '.'

describe('<%= componentName %>', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render the <%= componentName %> component', () => {
    const props = {}
    const component = render(<<%= componentName %> {...props} />)
    expect(component).toBeTruthy()
  })
})