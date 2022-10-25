describe('login de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/')
 
        //cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
        //    statusCode: 400
        //}).as('stubPost')
    })

    it('fazer login com usuario valido', () => {
        cy.login(Cypress.env("userName"), Cypress.env("password"))
        //cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login com usuario invalido', () => {
        cy.login('flavi0', '223')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
})