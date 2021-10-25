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
  describe('DOM snapshot', () => {
      it('toMatchSnapshot.2', () => { 
        urls.forEach((url) => {
          return cy.request(url)
          .its('body')
          .toMatchSnapshot('ignoreExtraFields: true');
          })
        });
    });



 













    // it('toMatchSnapshot', () => {
    //   // CY goes to each URL in the arry from site map 
    //   // runs a snapshot of DOM and will use that to compare to what has been saved 
    //   urls.forEach((url) => {
    //     return cy.request(url)
    //     .its('body')
    //     .toMatchSnapshot();
    //     })
    //   });
      // it('toMatchSnapshot.2', () => { 
      //   urls.forEach((url) => {
      //     return cy.request(url)
      //     .its('body')
      //     .toMatchSnapshot(ignoreExtraFields: true);
      //     })
      //   });
      // it('toMatchSnapshot.3', () => {
      //   urls.forEach((url) => {
      //     cy.visit(url)
      //     .then(() => {
      //       cy.get('main').toMatchSnapshot();
      //     })
      //   })
      // })

      // cy.visit(url).then(() => {
      //   cy.get('main')
      //   .toMatchSnapshot();



              // cy.request({
        //   url: url,
        //   headers: {
        //     "Content-Type": "text/html",
        //     accept: "*/*",
        //     "user-agent":
        //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        //   },