import React from 'react'
import Rightbar from './rightbar'

describe('<Rightbar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Rightbar />)
  })
})