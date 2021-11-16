 /// <reference types="Cypress" />
describe('check jump links on site', () => {
  it('jump links', () => {
    cy.getUrlsArray().then(($urls) => {
      $urls.forEach((url) => {
        cy.visit(url).then(() => {
          cy.get("a").each($a => {
            const message = $a.text();
            expect($a, message).to.have.attr("href").not.contain("undefined");
          });
        })
      })
    })
  })
})

// that the id the comes back from link matching to what is seen on pres space 
