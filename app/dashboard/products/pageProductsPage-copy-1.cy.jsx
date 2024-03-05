import React from 'react'
import ProductsPage from './page'

describe('<ProductsPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductsPage />)
  })
})