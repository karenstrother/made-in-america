/// <reference types="Cypress" /> 
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  // accordon structure error from USWDS we are ingoreing 
})

describe('search results', () => {
  before('let site load', () => {
    cy.visit('localhost:4000/waivers')
  })
  beforeEach('setting up test alias', () => {
    cy.get('[data-test="filter-select"] select').children().as('filter-options')
  })

  it('accordons should open when clicked', () => {
    cy.get('[data-test="accordion-header"]').click({ multiple: true })
    .get('[data-test="omb-determination"]').should('be.visible')
  })
 
  it('omb determination should be based on status', () => {
    cy.get('@filter-options').then((filterOptions) => {
      filterOptions.each(option => {
      if(filterOptions[option].value !== 'all') {
        cy.get('[data-test="filter-select"] select')
        .select(filterOptions[option].value)
        .should('have.value', filterOptions[option].value)
        if(filterOptions[option].value === 'Reviewed') {
          cy.get('[data-test="omb-determination"]')
          .invoke('text')
          .should('include','Policy')
          } else {
            cy.get('[data-test="omb-determination"]')
            .invoke('text')
            .should('include','N/A')
          }
        } 
      })
    })
  })

})



// before you run tests - go and fetch the lastest data 
// cypress way to fetch - look that up 
// when you get the data back you only want one (make sure it is in the correct order)
// sort in order 
// go and get just one item (first index)
// thats your object and that should be what is rendered on the front end
// assin as alias or a const 


// understand what is being call (develop)
