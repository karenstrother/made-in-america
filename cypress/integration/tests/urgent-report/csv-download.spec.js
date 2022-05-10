/// <reference types="Cypress" />
describe('should allow for csv download', () => {
  before('visit waivers page', () => {
    cy.visit('localhost:4000/urgent-report')
  })
  it('verifies csv download', () => {
    cy.get('[data-test="csv-download"]').click()
    cy.verifyDownload('waivers.csv')
  })
})
