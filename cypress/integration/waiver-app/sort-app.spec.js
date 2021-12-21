 /// <reference types="Cypress" /> 
 describe('sort by alphabetical', () => {
  before('visit site', () => {
    cy.visit('localhost:4000/waivers')
    // cypress visits and sets up base page 
  })
  // beforeEach('create title alias', () => {
  //   cy.get('[data-test="procurement-title"]').as('title')
  // })
  beforeEach('create sort alias', () => {
    cy.get('[data-test="sort-select"] select').children().as('sort-options')
    // creates an alias for the data test to use the sorting function 
  })
  it('waivers are alphabetical', () => {
  cy.get('@sort-options').then((sortOptions) => {
  sortOptions.each(option => {
  if(sortOptions[option].value !== 'recent') {
    cy.get('[data-test="sort-select"] select')
    .select(sortOptions[option].value)
      }
    })
    cy.get('[data-test="procurement-title"]').then(() => {
      expect(sortOptions).to.deep.equal(sortOptions.sort()) 
    }) 
    // cyrpess calls the alies and then will put it into an array
    // if the option is recent then it will skip that option 
    // after that will get the same optioin and then select the value 
    // once the value has been selected cypress will get the data test id for the Procurement title 
    // then it will check to see if the list is in alphabetical order 
  })
  })
  })


  














  //  describe('sort on waivers', () => {
//   it('sorts alpha when selected', () => {
//     cy.visit('https://www.madeinamerica.gov/waivers/')
//      cy.get('[name="sorting"]')
//        .select('Alphabetical')
//        .get('[class="margin-0 text-normal"]')
//        .contains(' Brand Name Kensington BlackBelt Rugged Cases for Surface Pro with a common access card (CAC) Reader ') 
//   })
// })
//  pass the array though the function and then check the expected out put 
