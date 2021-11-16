 /// <reference types="Cypress" />
describe('nonavailability', () => {
  it('non-availability should not be present', () => {
    cy.getUrlsArray().then(($urls) => {
      $urls.forEach((url) => {
        cy.visit(url)
        cy.contains('non-availability')
        .should('not.exist')
        cy.contains('Non-availability')
        .should('not.exist')
      })
    })
  })
})
