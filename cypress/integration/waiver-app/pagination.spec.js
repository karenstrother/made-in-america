 /// <reference types="Cypress" /> 
describe('pagination of waiver page', () => {
it('next and previouse buttons', () => {
  cy.visit('localhost:4000/waivers')
  cy.get('[data-test="next-page"]').click()
  cy.get('[aria-label="Next page"]').should('not.be.visible')
  cy.get('[data-test="previous-page"]').click()
  cy.get('[aria-label="Previous page"]').should('not.be.visible')
  
  cy.get('[data-test="last-page"]').click()
  cy.get('[aria-label="Net-Page"]').should('not.be.visible')
})
})


// if i hit next i should see previous button 