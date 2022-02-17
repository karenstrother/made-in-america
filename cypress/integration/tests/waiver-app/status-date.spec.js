/// <reference types="Cypress" />
describe('check status date', () => {
  before('visit site', () => {
    cy.visit('localhost:4000/waivers')
  })
  it('check that date is present and formatted correctly', () => {
    cy.get('[data-test="status-date"]')
  })
})
