/// <reference types="Cypress" />
describe('sort by alphabetical', () => {
  before('visit site', () => {
    cy.visit('localhost:4000/waivers')
  })
  beforeEach('create alias', () => {
    cy.get('[data-test="sort-select"] select').children().as('sort-options')
    cy.get('[data-test="procurement-title"]').as('title')
  })
  // it('waivers are alphabetical', () => {
  //   cy.get('@sort-options').then((sortOptions) => {
  //   sortOptions.each(option => {
  //   if(sortOptions[option].value !== 'recent') {
  //   cy.get('[data-test="sort-select"] select')
  //   .select(sortOptions[option].value)
  //   cy.get('[data-test="procurement-title"]').then(() => {
  //   expect(sortOptions).to.deep.equal(sortOptions.sort())
  // })
  // }
  // })
  // })
  // })

  it('waivers are alphabetical', () => {
    cy.get('@sort-options').then(sortOptions => {
      sortOptions.each(option => {
        if (sortOptions[option].value !== 'recent') {
          cy.get('[data-test="sort-select"] select').select(
            sortOptions[option].value
          )
          cy.get('[data-test="procurement-title"]')
            .invoke('text')
            .each(title => {
              expect(title).to.deep.equal(sortOptions.sort())
            })
          // .then((text) => {
          //   expect(text).to.deep.equal(sortOptions.sort())
          // })

          // const innerText = (el) => el.innerText

          // .then((title) => {
          //   cy.get(title)
          //   .each(title => {
          //     title.innerText
          //   })
          // })
        }
      })
    })
  })
})

// need to get the inner text and then put that into an array
// and then check that is in alpha order
