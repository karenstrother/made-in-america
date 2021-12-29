/// <reference types="Cypress" /> 
describe('sort by alphabetical', () => {
    before('visit site', () => {
    cy.visit('localhost:4000/waivers')
    })
    beforeEach('create alias', () => {
    cy.get('[data-test="sort-select"] select').children().as('sort-options')
    })
    it('waivers are alphabetical', () => {
      cy.get('@sort-options').then((sortOptions) => {
      sortOptions.each(option => {
      if(sortOptions[option].value !== 'recent') {
      cy.get('[data-test="sort-select"] select')
      .select(sortOptions[option].value)
      cy.get('[data-test="procurement-title"]').then(() => {
      expect(sortOptions).to.deep.equal(sortOptions.sort()) 
    }) 
  }
  })
  })
  })
})