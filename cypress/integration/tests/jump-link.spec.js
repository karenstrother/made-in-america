 /// <reference types="Cypress" />
describe('check jump links on site', () => {
  it('jump links', () => {
    cy.getUrlsArray().then(($urls) => {
      $urls.forEach((url) => {
        cy.visit(url).then(() => {
          cy.get("a").each($a => {
            // console.log($a)
            const ignoreEl = [
              '#main-content', '#fba-button'
            ]
            if($a[0].hash !== "" && !ignoreEl.includes($a[0].hash)) {
              cy.get($a[0].hash).click({force: true})
              console.log($a)
            }
        })
      })
    })
  })
})
})



// that the id the comes back from link matching to what is seen on pres space 

// href to an id #whatever check the viewport and shold it match the id the #gov-business


