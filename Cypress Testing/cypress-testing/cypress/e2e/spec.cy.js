describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Counter should be rendered', () => {
    cy.visit('http://localhost:3000/');
    cy.get(".App").should("exist");
    cy.get('[data-testid=counter]').should('exist');
    cy.get('[data-testid=add-button]').should('exist');
  })

  // it('Initial value of counter should be 0', () => {
  //   cy.visit('http://localhost:3000/');
  //   cy.get('[data-testid=counter]').should('have.text', 'Counter : 0');
  // })

  // it('On clicking counter value should change', () => {
  //   cy.visit('http://localhost:3000/');
  //   cy.get('[data-testid=add-button]').click();
  //   cy.get('[data-testid=counter]').should('have.text', 'Counter : 1');
  //   cy.get('[data-testid=add-button]').click();
  //   cy.get('[data-testid=counter]').should('have.text', 'Counter : 2');
  //   cy.get('[data-testid=reduce-button]').click();
  //   cy.get('[data-testid=counter]').should('have.text', 'Counter : 1');
  //   cy.get('[data-testid=reduce-button]').click();
  //   cy.get('[data-testid=counter]').should('have.text', 'Counter : 0');
  // })

  it('Should render the value of counter from the server', () => {
    cy.visit('http://localhost:3000/');
    cy.intersept("GET", "**/counter", {value : 10}).as('getRequest');
    cy.wait('@getRequest');
  })

   it('On clicking counter value should change', () => {
    cy.visit('http://localhost:3000/');
    cy.intersept("POST", "**/counter", {value : 12}).as('postRequest');
    cy.get('[data-testid=add-button]').click();
    cy.wait('@postRequest');
    cy.get('[data-testid=counter]').should('have.text', 'Counter : 12');
    cy.get('[data-testid=add-button]').click();
    // cy.get('[data-testid=counter]').should('have.text', 'Counter : 2');
    // cy.get('[data-testid=reduce-button]').click();
    // cy.get('[data-testid=counter]').should('have.text', 'Counter : 1');
    // cy.get('[data-testid=reduce-button]').click();
    // cy.get('[data-testid=counter]').should('have.text', 'Counter : 0');
  })
})