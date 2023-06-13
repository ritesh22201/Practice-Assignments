describe('Test Todo', () => {
    it('Should visit todo', () => {
        cy.visit('https://example.cypress.io/todo');
    })

    it('Should have an input box', () => {
        cy.visit('https://example.cypress.io/todo');
        cy.get('input').should('exist');
    })

    it('should be able to add a new-todo', () => {
        cy.visit('https://example.cypress.io/todo');
        cy.get('.todo-list').children('have.length', 2);
        cy.get('.new-todo').type("Learn React testing{enter}");
        cy.get('.todo-list').children('have.length', 3);
    })

})