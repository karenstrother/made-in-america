 /// <reference types="Cypress" /> 
describe('filter by status', () => {
it('UI changes when filter is selected', () => {
  cy.visit('localhost:4000/waivers')
  cy.get('[data-test="filter-select"] select').children().as('filter-options')
  cy.get('@filter-options').then((filterOptions) => {
  filterOptions.each(option => {
  if(filterOptions[option].value !== 'all') {
    cy.get('[data-test="filter-select"] select')
    .select(filterOptions[option].value)
    .should('have.value', filterOptions[option].value)
      } 
    })
  })
})
})