import React from 'react'
import { render, screen } from '@testing-library/react'

import Home from '@/pages'

describe('App', () => {
  test('renders App component', () => {
    render(<Home />)

    screen.debug()
  })
})
