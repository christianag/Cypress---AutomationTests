import LayoutsPage from "../pageobjects/LayoutsPage";

const layoutsPage = new LayoutsPage()

export default class LayoutsActions {

    goToLayoutsMenu() {
        cy.contains('Layouts').click()
        cy.contains('Design Layouts').should('exist') // Assertion
        cy.url().should('contain', '/layout-list') // Assertion
    }

    clickCreateNewLayout() {
        layoutsPage.createNewLayoutButton().click()
        cy.contains('Create Design Layout').should('exist') // Assertion
        cy.contains('Set Up Layout').should('exist') // Assertion
        cy.url().should('contain', '/layout-add') // Assertion
    }

    inputNewLayoutName(layoutName) {
        layoutsPage.layoutNameField().type(layoutName)
    }

    clickStartDesign() {
        layoutsPage.startDesignButton().click()
        cy.contains('Create Design Layout').should('exist') // Assertion
        cy.get('.design-options__container').should('exist') // Assertion
    }

    clickSaveLayout(layoutName) {
        layoutsPage.saveLayoutButton().click()
        cy.wait(1000)
        cy.get('h3', {timeout: 5000}).should('contain', 'Design Layouts') // Assertion
    }

    newlyCreatedLayoutAssertion(layoutName) {
        cy.get('[width="300"]').contains(layoutName).parent().siblings('.column-title').find('.btn-danger').should('exist') // Assertion
    }

    changeLayoutVisibility(layoutName) {
        cy.get('[width="300"]').contains(layoutName).parent().siblings('.column-title').find('.btn-danger').click()
        cy.contains('Layout published status changed successfully').should('exist') // Assertion
        cy.get('[width="300"]').contains(layoutName).parent().siblings('.column-title').find('.btn-danger').should('not.exist') // Assertion
        cy.get('[width="300"]').contains(layoutName).parent().siblings('.column-title').find('.btn-success').should('exist') // Assertion
    }

    editLayout(layoutName) {
        cy.get('[width="300"]').contains(layoutName).parent().siblings('.last').find('.btn-primary').click()
        cy.get('h3').should('contain', 'Edit Design Layout') // Assertion
    //     cy.get('[width="300"]').contains(layoutName).parent().siblings('.column-title').find('.btn-danger').should('not.exist') // Assertion
    //     cy.get('[width="300"]').contains(layoutName).parent().siblings('.column-title').find('.btn-success').should('exist') // Assertion
    }

    deleteLayout(layoutName) {
        cy.get('[width="300"]').contains(layoutName).parent().siblings('.last').find('.btn-danger').click()
        layoutsPage.popupWindow().should('contain', 'Are you sure you want to delete this Layout?') // Assertion
        layoutsPage.popupWindowYesButton().click()
        cy.contains('Design deleted successfully').should('exist') // Assertion
        cy.get('[width="300"]').contains(layoutName).should('not.exist') // Assertion
    }

}