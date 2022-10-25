/// <reference types="cypress" />

describe('usabilidade tela inicial', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })

    it('verifica noma da aplicacao na tela inicial', () => {
        cy.contains('a', 'ALURAPIC').should('be.visible');
    } )

    it('verifica menu clicavel tela inicial', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })

})