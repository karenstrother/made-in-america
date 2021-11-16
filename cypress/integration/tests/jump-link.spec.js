 /// <reference types="Cypress" />
const urls = [];

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

describe('check jump links on site', () => {
  it('jump links', () => {
    urls.forEach((url) => {
      cy.visit(url).then(() => {
        cy.get("a").each($a => {
          const message = $a.text();
          expect($a, message).to.have.attr("href").not.contain("undefined");
        });
      })
    })
  })
})
