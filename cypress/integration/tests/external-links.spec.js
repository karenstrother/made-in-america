 /// <reference types="Cypress" />
describe('check external links', () => {
  it('check external links', () => {
    cy.getUrlsArray().then(($urls) => {
      $urls.forEach((url) => {
        cy.visit(url).then(() => {
          cy.get('.usa-link--external')
          .should('have.attr', 'target', '_blank')
        })
      })
    })
  });
})
