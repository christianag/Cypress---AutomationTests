export default class LayoutsPage {

    createNewLayoutButton() {return cy.get('.header > :nth-child(1) > .btn')}

    layoutNameField() {return cy.get('#design-name')}

    startDesignButton() {return cy.get('.wizard-btn')}

    saveLayoutButton() {return cy.get('.design-options__container > .btn-group > .btn')}

    popupWindow() {return cy.get('.swal2-popup')}

    popupWindowYesButton() {return cy.get('.swal2-confirm')}

}