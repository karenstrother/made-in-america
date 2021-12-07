 /// <reference types="Cypress" /> 
 describe('search results', () => {
  beforeEach('let site load', () => {
    cy.visit('https://www.madeinamerica.gov/waivers/')
  })
  // it('accordans open when clicked', () => {
  //   cy.get('[id="usa-accordion-item-0-header"]').click({ multiple: true })
  // })
  // it('OMB status is correct', () => {
  //   cy.get('[class="desktop:grid-col-2 margin-y-1"]')
  //   .contains('Submitted').then(() => {
  //     cy.get('[class="margin-0 font-sans-xs"]')
  //     .contains('N/A')
  //   })
  // })
  it('all plubic fields are showing in header', () => {
    cy.get('[class="desktop:grid-col-2 desktop:margin-right-4 margin-y-1"]').should('be.visible')
    cy.get('[class="desktop:grid-col-3 desktop:margin-right-4 margin-y-1"]').should('be.visible')
    cy.get('[class="desktop:grid-col-4 margin-y-1"]').should('be.visible')
    cy.get('[class="desktop:grid-col-2 margin-y-1"]').should('be.visible')
  })
  it('click on accordons', () => {
    cy.get('[class="mia-accordion ng-tns-c15-0"]').click()
  })
})
