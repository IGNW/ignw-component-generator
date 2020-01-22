import React from 'react'
import { render } from '@testing-library/react'

import Bar from '.'

describe('Bar', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render the Bar component', () => {
    const props = {}
    const component = render(<Bar {...props} />)
    expect(component).toBeTruthy()
  })
})
