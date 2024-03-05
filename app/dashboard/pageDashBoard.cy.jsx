import React from 'react'
import DashBoard from './page'

describe('<DashBoard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DashBoard />)
  })
})