  /// <reference types="Cypress" />
  let urls = [];
  before(() => {
    cy.request({
      url:'http://localhost:4000/sitemap.xml',
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    })
      .as("sitemap")
      .then((response) => {
        urls = Cypress.$(response.body)
          .find("loc")
          .toArray()
          .map((el) => el.innerText);
      });
  });
  describe('check mailto links', () => {
    it("check mailto links", () => {
      // CY goes to each URL in the arry from site map 
      // checks to make sure that each mailto link is working
      urls.forEach((url) => {
        cy.visit('https://stage.madeinamerica.gov/').then(() => {
          // if(find('[href="mailto:MadeInAmerica@omb.eop.gov:"]')) {
            cy.get('[href="mailto:MadeInAmerica@omb.eop.gov:"]')
            .should('have.attr', 'target', '_blank')  
          // } 
        });
      });
    });
  })


              // cy.get('[href="mailto:MadeInAmerica@omb.eop.gov:"]')
            // .should('have.attr', 'target', '_blank') 


            // cy.get([href="mailto:MadeInAmerica@omb.eop.gov:"])
            // .should('have.attr', 'target', '_blank')
            // .then((href) => {
            //   return href.test(href)
            // })
  


