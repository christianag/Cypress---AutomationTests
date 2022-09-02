import LoginPage from "../pageobjects/LoginPage";

const loginPage = new LoginPage()

export default class LoginActions{

    goToPage() {
        cy.visit(Cypress.env('URL'))
    }

    enterLoginDetails() {
        loginPage.emailField().type(Cypress.env('EMAIL'))
        loginPage.passwordField().type(Cypress.env('PASSWORD'))
        loginPage.loginButton().click()
    } 

    login() {
        this.goToPage()
        cy.contains('Login Form').should('exist') // Assertion
        this.enterLoginDetails()
        cy.url().should('contain', 'admin') // Assertion
        cy.get('#app').should('contain', 'Select Date Range') // Assertion
        cy.get('#app').should('contain', 'Select tags') // Assertion
        cy.get('#app').should('contain', 'Overview') // Assertion
        cy.get('#app').should('contain', 'User Interaction') // Assertion
    }

    logout() {
        loginPage.userProfile().click()
        loginPage.clickLogout().click()
        cy.contains('Login Form').should('exist') // Assertion
    }

}