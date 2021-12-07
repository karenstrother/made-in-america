 /// <reference types="Cypress" /> 
 describe('pagination of waiver page', () => {
  it('next and previouse buttons', () => {
    cy.visit('https://www.madeinamerica.gov/waivers/')
    cy.get('[class="usa-pagination__link usa-pagination__next-page"]').click()
    cy.get('[aria-label="Next page"]').should('not.be.visible')
    cy.get('[class="usa-pagination__link usa-pagination__previous-page"]').click()
    cy.get('[aria-label="Previous page"]').should('not.be.visible')
  })
})
