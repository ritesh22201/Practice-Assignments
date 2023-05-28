
describe('template spec', () => {
  it('application is loading or not', () => {
    cy.visit('http://localhost:3000/');
  })

  it('checking if heading and buttons are present or not', () => {
    cy.visit('http://localhost:3000/');

    const counter_heading = cy.get('h2');
    counter_heading.should('exist');

    const buttons = cy.get('.button');
    const button1 = cy.get('[data-testid=add]');
    button1.should('exist');
  })

  it('should have the textContent', () => {
    cy.visit('http://localhost:3000/');
    
    const heading = cy.get('h2');

    heading.should('have.text', 'Counter : 0');
    cy.get('.button').eq(0).should('have.text', 'Add');
    cy.get('.button').eq(1).should('have.text', 'Reduce');
  })

  it('check the functionality', () => {
    cy.visit('http://localhost:3000/');

    cy.get('h2').should('have.text', 'Counter : 0');
    
    cy.get('[data-testid=add]').click();
   
    cy.get('h2').should('have.text', 'Counter : 1');
    cy.get('[data-testid=add]').click();
    cy.get('[data-testid=add]').click();
    cy.get('[data-testid=add]').click();
    cy.get('[data-testid=add]').click();
    cy.get('h2').should('have.text', 'Counter : 5');

    cy.get('.button').eq(1).click();
    cy.get('h2').should('have.text', 'Counter : 4');
    cy.get('.button').eq(1).click();
    cy.get('.button').eq(1).click();
    cy.get('.button').eq(1).click();
    cy.get('.button').eq(1).click();
    cy.get('h2').should('have.text', 'Counter : 0');
  })
})

// We check if our application is running or not.
// Check if heading and buttons are present or not.
// Check if the textContent of the heading is 0 or not.





