import OrganizationPage from "../pageobjects/OrganizationPage";
import UserManagementPage from "../pageobjects/UserManagamentPage";

const users = new UserManagementPage()
const org = new OrganizationPage()

export default class UserManagementActions {

    goToUserManagementMenu() {
        cy.contains('User Management').click()
        cy.contains('User List').should('exist') // Assertion
        cy.url().should('contain', '/admin/user-listing') // Assertion
    }

    createNewAccount() {
        users.createNewAccount().click()
        cy.contains('Add User').should('exist') // Assertion
    }

    enterName(name) {
        users.nameField().type(name)
    }

    enterEmail(email) {
        users.emailField().type(email)
    }

    selectCountry(country) {
        users.selectCountryField().click()
        users.selectCountryInput().type(country + '{enter}')
    }

    clickSubmit() {
        users.submitButton().click()
    }

    assertSuccessfulCreationOfNewAccount() {
        cy.contains('User Add Confirmation').should('exist') // Assertion
        cy.contains('User added successfully').should('exist') // Assertion
        cy.contains('User Detail').should('exist') // Assertion
    }

    findUser(email) {
        cy.wait(500)
        users.searchUserField().type(email)
        users.searchUserButton().click()
        org.searchResultsTable().contains(email).should('exist') // Assertion
    }

    deleteUser() {
        users.deleteUserButton().click()
        users.popupWarning().contains('Are you sure to delete this user?').should('exist') // Assertion
        users.popupConfirmButton().click()
    }

    assertFailedStillHasDiplomas() {
        cy.contains('User has valid diplomas. Revoke diplomas before deletion').should('exist') // Assertion
    }

    assertFailedStillAssigned() {
        cy.contains('Remove association with the following organizations before deletion').should('exist') // Assertion
    }

    assertSuccessfulDelete() {
        cy.contains('User deleted!').should('exist') // Assertion
    }
    
}