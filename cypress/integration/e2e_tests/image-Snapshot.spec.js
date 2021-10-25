  /// <reference types="Cypress" />
  
  describe('image snapshot', () => {
    // take a screen shot of the home page and compare it to what is documented 
     it('toMatchImageSnapshot - home page', () => {
      cy.visit('localhost:4000')
        .then(() => {
          cy.document()
            .toMatchImageSnapshot({ clip: { x: 0, y: 0, width: 1000, height: 4890 } });
        });
    });
  });


