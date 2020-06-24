describe('my test', function () {

  beforeEach(function () {
  })

  it('first scenario', function () {
    //assertions
    cy.visit('http://localhost:8080')
    cy.get('#app').find('a').eq(0).click();
    cy.get('#drop-001').select('4');
    cy.get('#drop-003').select('2');
    cy.get('#total span').should('contain', 'Rs 780');
  })

  it('second scenario', function () {
    //assertions
    cy.visit('http://localhost:8080')
    cy.get('#app').find('a').eq(0).click();
    cy.get('#check-001').check();
    cy.get('#drop-001').should('contain', '1');
    cy.get('#total span').should('contain', 'Rs 120');
  })

  it('third scenario', function () {
    //assertions
    cy.visit('http://localhost:8080')
    cy.get('#app').find('a').eq(0).click();
    cy.get('#check-001').check();
    cy.get('#checkout-a').click();
    // cy.get('#total span').should('contain', 'Rs 120');
    cy.get('div .basket').should('contain', 'Your BASKET');
  })

  it('fourth scenario', function () {
    //assertions
    cy.get('#app').find('a').eq(1).click();
    cy.get('#total span').should('contain', 'Rs 1000');
    cy.get('#drop-actions').select('delete');
    cy.get('#checkview-001').check();
    cy.get('#total span').should('contain', 'Rs 760');
  })

  it('fifth scenario', function () {
    //assertions
    cy.visit('http://localhost:8080')
    cy.get('#app').find('a').eq(2).click();
    cy.get('#name').type('neha');
    cy.get('#test-container').find('span').should('contain', 'neha');
  })

  it('sixth scenario', function () {
    //assertions
    cy.server();
    cy.route({
      // our example is a GET call, but you could also
      // have a POST, if you're pushing data up
      method: "GET",
      // more on the URL below
      // url: `http://localhost:8080/api/test-tt`,
      url: `/api/test-tt`,
      // the fixture: shortcut will know to
      // look in cypress/fixtures,
      // unless you configure cypress to
      // put it somewhere else
      response: "fixture:test.json"
    });
    // cy.fixture('');
    cy.visit('http://localhost:8080')
    cy.get('#app').find('a').eq(2).click();
    cy.get('#test-container').find('span').should('contain', 'hehe1');
  })
})