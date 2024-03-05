import React from 'react'
import Homepage from './page'

describe('<Homepage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Homepage />)
  })
})