/// <reference types="cypress" />

describe('login e registro de usuarios alura pic', ()=>{

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })


    it('verifica mensagens validacao', () =>{
        cy.contains('a', 'Register now').click();
        cy.contains('h4', 'Register to embrace a new world!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click(); 
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica mensagem de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('h4', 'Register to embrace a new world!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('nicolas');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagem de senha pequena', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('h4', 'Register to embrace a new world!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('verifica mensagem de userName disponivel', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('h4', 'Register to embrace a new world!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('nick');
        cy.contains('button', 'Register').click();
        cy.contains('small.text-success', 'User available').should('be.visible');
    })

    it('verifica mensagem de userName com letra maiuscula', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('h4', 'Register to embrace a new world!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Nick');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })
})