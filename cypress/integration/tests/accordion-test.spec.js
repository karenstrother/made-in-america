 /// <reference types="Cypress" />
describe('check accordions on site', () => {
  it('accordions load', () => {
    cy.getUrlsArray().then(($urls) => {
      $urls.forEach((url) => {
        cy.visit(url).then(() => {
        cy.get('[class="usa-accordion"]')
        .should('be.visible');
        })
      })
    })
  });
})
