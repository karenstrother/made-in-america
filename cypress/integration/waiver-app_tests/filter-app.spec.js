 /// <reference types="Cypress" /> 
 describe('filter by status', () => {
  it('UI changes when filter is selected', () => {
    cy.visit('https://www.madeinamerica.gov/waivers/')
    cy.get('[name="filtering"]')
    .select('Reviewed')
    .get('[class="margin-0 text-normal"]')
    .contains('Reviewed').should('be.visible')
    cy.get('[name="filtering"]')
    .select('Submitted')
    .get('[class="margin-0 text-normal"]')
    .contains('Submitted').should('be.visible')
  })
})
