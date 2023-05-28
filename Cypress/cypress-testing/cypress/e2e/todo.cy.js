describe('todo app', ()=> {
    it('url or app is working', () => {
        cy.visit('http://example.cypress.io/todo');
    })

    it('should have an input box', () => {
        cy.visit('http://example.cypress.io/todo');
        cy.get('input.new-todo').should('exist');
    })

    it('input should let us type in it', () => {
        cy.visit('http://example.cypress.io/todo');
        cy.get('input.new-todo').type('Learn Cypress');
    })

    it('should add a new todo', () => {
        cy.visit('http://example.cypress.io/todo');
        cy.get('input.new-todo').type('Learn RTL{enter}');
        cy.get('ul.todo-list').children().should('have.length', 3);
    })

    it('should delete a todo', () => {
        cy.visit('http://example.cypress.io/todo');

        cy.get('button.destroy').eq(1).invoke('show').click();
        cy.get('ul.todo-list').children().should('have.length', 1);
    })
})