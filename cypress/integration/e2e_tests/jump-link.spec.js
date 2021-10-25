  /// <reference types="Cypress" />
  describe('check anchor link on homepage', () => {
    before(('visit homepage', () => {
      cy.visit('http://localhost:4000')
    }))
    it('check anchor link', () => {
      cy.get('[href="/#gov-business"]').click({force: true})
      cy.url().should('include', '#gov-business')
    })
  })





















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


