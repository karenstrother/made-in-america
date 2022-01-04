/// <reference types="Cypress" />
describe('sort waivers by alphabetical order', () => {
  before('visit site', () => {
    cy.visit('localhost:4000/waivers')
  })
  beforeEach('create alias', () => {
    cy.get('[data-test="sort-select"] select').children().as('sort-options')
    cy.get('[data-test="procurement-title"]')
      .then(elements => {
        const titles = elements.map((element, i) => {
          return elements[element].innerText
        })
        return titles
      })
      .as('title')
    cy.get('@title')
      .then(titles => {
        titles.sort()
      })
      .as('alphaSort')
  })
  it('waivers are in alphabetical order after being sorted', () => {
    cy.get('@sort-options').then(sortOptions => {
      sortOptions.each(option => {
        if (sortOptions[option].value !== 'recent') {
          cy.get('[data-test="sort-select"] select').select(
            sortOptions[option].value
          )
          cy.get('@title').then(titles => {
            expect(titles).to.equal(titles.sort())
          })
        }
      })
    })
  })
})
