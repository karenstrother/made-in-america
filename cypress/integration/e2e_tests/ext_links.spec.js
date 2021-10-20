  /// <reference types="Cypress" />
  let urls = [];
  before(() => {
    cy.request({
      url: "localhost:4000/sitemap.xml",
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
  describe('check that ext links open in new tab', () => {
    before(() => {
      //page should load fully 
      cy.visit('localhost:4000')
    })
    it('ext link open in new tab', () => {
      //create path aray for coards and external urls  
      const extURLs = [
        'https://sba.gov', 
        'https://SAM.gov', 
        'https://www.gsa.gov/buying-selling/purchasing-programs/gsa-schedule', 
        'https://www.whitehouse.gov/omb/freedom-of-information-act-foia/'
      ]
      //loop through extURLs sites
      // be sure each site loads in new window
      extURLs.forEach(value => {
          cy.get(`[href="${value}"]`)
            .then(link => {
              cy
                .request(link.prop('href'))
                .its('status')
                .should('eq', 200);
                // #cypress can not open another tab and still test, the last part checks the staus of the link to make sure that it is active 
            });
      })
    })
  })