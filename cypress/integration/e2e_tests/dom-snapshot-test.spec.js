  /// <reference types="Cypress" />
  let urls = [];
  before(() => {
    cy.request({
      // url: "localhost:4000/sitemap.xml",
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
  describe('text snapshot', () => {
    it('toMatchSnapshot', () => {
      // CY goes to each URL in the arry from site map 
      // checks to make sure that each anchor link is working
      urls.forEach((url) => {
        // cy.request({
        //   url: url,
        //   headers: {
        //     "Content-Type": "text/html",
        //     accept: "*/*",
        //     "user-agent":
        //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        //   },
        cy.visit(url).then(() => {
          cy.get('body')
          .toMatchSnapshot();
        });
      });
    });
  })











   // describe('text snapshot', () => {
  //   it("toMatchSnapshopt", () => {
  //     // CY goes to each URL in the arry from site map 
  //     // checks to make sure that each page successfully loads 
  //     urls.forEach((url) => {
  //       cy.request({
  //         url: url,
  //         headers: {
  //           "Content-Type": "text/html",
  //           accept: "*/*",
  //           "user-agent":
  //             "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
  //         },
  //       }).then(() => {
  //           cy.get('body')
  //           .toMatchSnapshot(); 
  //       });
  //     });
  //   });
  // })