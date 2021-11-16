 /// <reference types="Cypress" />
// import getUrlsArray from '../utils/getUrlsArray'
// let urls;
// console.log(urls)
// before(() => {
//   urls = getUrlsArray()
//   console.log(urls)
  // cy.get(URLS)
//   cy.request({
//     url:'http://localhost:4000/sitemap.xml',
//     headers: {
//       "Content-Type": "text/xml; charset=utf-8",
//       "user-agent":
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
//     },
//   })
//     .as("sitemap")
//     .then((response) => {
//       urls = Cypress.$(response.body)
//         .find("loc")
//         .toArray()
//         .map((el) => el.innerText);
//     });
// });

describe('check accordions on site', () => {
  it('accordions load', () => {
    const urls = cy.getUrlsArray() 
    console.log('spec', urls) 
    // urls.forEach((url) => {      
    //   cy.visit(url).then(() => {
    //   cy.get('[class="usa-accordion"]')
    //   .should('be.visible');
    //   })
    // })
  });
})
