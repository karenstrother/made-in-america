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
  describe('check anchor links on site', () => {
    it('anchor links', () => {
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
  
  
  
  
  
  
  
  
  // describe('check anchor link on homepage', () => {
  //   before(('visit homepage', () => {
  //     cy.visit('http://localhost:4000')
  //   }))
  //   it('check anchor link', () => {
  //     cy.get('[href="/#gov-business"]').click({force: true})
  //     cy.url().should('include', '#gov-business')
  //   })
  // })





















   // describe('check link', () => {
    //     it('should navigate to ... when link is clicked', () => {
    //       const { getByText } = render(<a href="/#gov-business">Doing Business with the U.S. Government</a>);
        
    //       const link = getByText('Doing Business with the U.S. Government');
        
    //       fireEvent.click(link);
        
    //       expect(window.location.href).toBe('http://localhost:4000/#gov-business');
    //     });
    // })
    // it("has anchor tags", () => {
    //   cy.visit('http://localhost:4000/#gov-business');
    //   cy.contains("a", "#")
    //     .scrollIntoView()
    //     .should("not.have.attr", "href", "#undefined");
    // });

  
