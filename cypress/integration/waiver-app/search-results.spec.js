 /// <reference types="Cypress" /> 
 describe('search results', () => {
  beforeEach('let site load', () => {
    cy.visit('localhost:4000/waivers')
  })
  // it('accordans open when clicked', () => {
  //   cy.get('[id="usa-accordion-item-0-header"]').click({ multiple: true })
  // })
  // it('OMB status is correct', () => {
  //   cy.get('[class="desktop:grid-col-2 margin-y-1"]')
  //   .contains('Reviewed').then(() => {
  //     cy.get('[class="margin-0 font-sans-xs"]')
  //     .contains('Consistent with Policy')
  //   })
  // })
  it('all plubic fields are showing in header', () => {
    cy.get('[data-test="procurement-title"]').should('contain', 'Procurement Title')
    cy.get('[data-test="contracting-department"]').should('contain', 'Contracting Department')
    cy.get('[data-test="psc"]').should('contain', 'Product Service Code (PSC)')
    cy.get('[data-test="request-status"]').should('contain', 'Request Status')
  })
  it('click on accordons', () => {
    cy.get('[data-test="accordion"]').click({ multiple: true })
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