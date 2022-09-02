export default class LoginPage{

    goToPage() {cy.visit(Cypress.env('URL'))}

    emailField() {return cy.get('[name="email"]')}

    passwordField() {return cy.get('[name="password"]') }

    loginButton() {return cy.get('[type="submit"]')}

    userProfile() {return cy.get('.user-profile')}

    clickLogout() {return cy.get('.fa-sign-out')}

}
