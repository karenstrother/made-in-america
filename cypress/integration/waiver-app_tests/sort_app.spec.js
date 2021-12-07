 /// <reference types="Cypress" />
 describe('sort on waivers', () => {
  it('sorts alpha when selected', () => {
    cy.visit('https://www.madeinamerica.gov/waivers/')
     cy.get('[name="sorting"]')
       .select('Alphabetical')
       .get('[class="margin-0 text-normal"]')
       .contains(' Brand Name Kensington BlackBelt Rugged Cases for Surface Pro with a common access card (CAC) Reader ') 
  })
})

//  pass the array though the function and then check the expected out put 
