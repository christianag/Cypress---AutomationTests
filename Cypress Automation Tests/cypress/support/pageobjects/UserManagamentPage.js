export default class UserManagementPage {

    createNewAccount() {return cy.get('.row-flex').find('.add-button')}

    nameField() {return cy.get('#name')}

    emailField() {return cy.get('#email')}

    selectCountryField() {return cy.get('#select2-country_id-container')}

    selectCountryInput() {return cy.get('.select2-search__field')}

    submitButton() {return cy.get('[type="submit"]')}

    searchUserField() {return cy.get('.form-control')}

    searchUserButton() {return cy.get('.input-group-btn > .btn')}

    deleteUserButton() {return cy.get('.btn-danger')}

    popupWarning() {return cy.get('.swal2-popup')}

    popupConfirmButton() {return cy.get('.swal2-confirm')}

}