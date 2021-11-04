  /// <reference types="Cypress" />
  let urls = [];
  beforeEach(() => {
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
  describe('nonavailability', () => {
    it('non-availability should not be present', () => {
      urls.forEach((url) => {
        cy.visit(url)
          cy.contains('non-availability')
          .should('not.exist')
      })
    })
    it('Non-availability should not be present', () => {
      urls.forEach((url) => {
        cy.visit(url)
          cy.contains('Non-availability')
          .should('not.exist')
      })
    })
  })