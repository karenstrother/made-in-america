 /// <reference types="Cypress" />
 describe('check accordions on site', () => {
  it('accordions load', () => {
    cy.getUrlsArray().then(($urls) => {
      $urls.forEach((url) => {
        cy.visit(url).then(() => {
        cy.get('[class="usa-accordion"]').click({ multiple: true })
        .should('be.visible');
        })
      })
    })
  });
})
