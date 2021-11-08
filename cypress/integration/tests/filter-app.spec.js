  /// <reference types="Cypress" />
  describe('check app is filtering correctly', () => {
    it('filter app', () => {
      cy.visit('http://localhost:4000/waivers/')
    })
  })