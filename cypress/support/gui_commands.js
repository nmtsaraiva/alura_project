Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha);
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('checkUserNameAvaliable', (userName) => {
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="userName"]').type(userName);
    cy.contains('button', 'Register').click();
    cy.contains('small.text-success', 'User available').should('be.visible');
})