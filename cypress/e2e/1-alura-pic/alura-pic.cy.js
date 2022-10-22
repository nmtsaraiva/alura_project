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
        cy.checkUserNameAvaliable('nicolas')
    })

    it('verifica mensagem de userName com letra maiuscula', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('h4', 'Register to embrace a new world!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Nick');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('fazer login com usuario valido', () => {
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login com usuario invalido', () => {
        cy.login('flavi0', '223')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        it.only(`registra novo usuario ${usuario.fullName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('h4', 'Register to embrace a new world!').should('be.visible');
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password); 
            cy.contains('button', 'Register').click();
    
        })
    });
})