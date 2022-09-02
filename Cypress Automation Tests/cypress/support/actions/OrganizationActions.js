import OrganizationPage from "../pageobjects/OrganizationPage";

const organizationPage = new OrganizationPage()

export default class OrganizationActions{

    goToOrganizationsMenu() {
        cy.contains('Organizations').click()
    }

    addNewOrg() {
        organizationPage.addNewOrgButton().click()
        cy.url().should('contain', '/admin/organization-add') // Assertion
        cy.get('h3').should('contain', 'Organization Add') // Assertion
    }

    enterOrgName(orgName) {
        organizationPage.orgName().type(orgName)
    }

    enterDescription(text) {
        organizationPage.iframeDescription().type(text)
    }

    selectViewType(option) {
        if(option.toLowerCase() == 'online view') {
            organizationPage.presentationView().select('Online view').should('have.value', '3')
        } else if(option.toLowerCase('design view') == 'online view') {
            organizationPage.presentationView().select('Design view').should('have.value', '2')
        } else {
            organizationPage.presentationView().select('List view').should('have.value', '1')
        }
    }

    uploadImage(filePath) {
        organizationPage.orgImage().selectFile(filePath)
    }

    orgWebsite(URL) {
        organizationPage.orgURL().type(URL)
    }

    checkDiploma2FA() {
        organizationPage.diploma2FA().check()
    }

    checkDesignsSupport() {
        organizationPage.designsSupport().check()
    }

    checkReminderEmails() {
        organizationPage.reminderEmails().check()
    }

    clickSubmit() {
        organizationPage.submitButton().click()
        cy.get('.alert-success').should('contain', 'Organization').and('contain', 'successfully') // Assertion
        cy.url().should('contain', '/admin/organization-listing') // Assertion
    }

    searchByOrgName(orgName) {
        organizationPage.searchOrgName().type(orgName)
        organizationPage.searchButton().click()
        cy.wait(1000)
    }

    clickEditOrgButton() {
        organizationPage.editOrgButton().click()
        cy.get('h3').should('contain', 'Organization Edit') // Assertion
        cy.url().should('contain', '/admin/organization-edit/') // Assertion
    }

    enterSharedTitle(text) {
        organizationPage.shareTitle().type(text)
    }

    pickCountry(country) {
        organizationPage.countryDropdown().click()
        organizationPage.selectCountry().contains(country).click()
    }
    
    selectAction(orgName, actionType) {
        cy.get('.pointer > .name').contains(new RegExp("^" + orgName + "$", "g")).siblings('.last').find('.dropdown-toggle').click()
        organizationPage.actionsMenu().contains(actionType).click()
        cy.get('h3').should('contain', 'Assign') // Assertion
    }

    assignBadge(badgeName) {
        organizationPage.searchBadgeField().type(badgeName)
        organizationPage.searchBadgeButton().click()
        cy.wait(1000)
        organizationPage.assignBadgeButton().click()
        cy.contains('Badge assigned successfully').should('exist') // Assertion
        cy.reload()
        organizationPage.showOnlyAssignedBadges().click()
        this.searchResultsCheck(badgeName) // Assertion
    }

    assign(name) {
        cy.contains(name).siblings('.a-center').find('input').check()
    }

    saveChanges() {
        organizationPage.saveButton().click()
    }

    fieldsAssertion() {
        cy.contains('Field updated successfully').should('exist') // Assertion
        cy.get('h3').should('contain', 'Assign') // Assertion
    }

    designAssertion() {
        cy.contains('Template custom design updated successfully').should('exist') // Assertion
        cy.get('h3').should('contain', 'Assign') // Assertion
    }

    clickBackButton() {
        organizationPage.goBackButton().click()
        cy.get('h3').should('contain', 'Organization List') // Assertion
    }

    searchResultsCheck(element) {
        organizationPage.searchResultsTable().should('contain', element) // Assertion
    }

    deleteOrg() {
        organizationPage.deleteButton().click()
        organizationPage.popupWarning().should('exist') // Assertion
        cy.contains('Are you sure to delete this organization?').should('exist') // Assertion
        cy.wait(500)
        organizationPage.popupConfirmButton().click()
    }

    assertDeletionFailed() {
        cy.contains('The organization cannot be deleted').should('exist') // Pop-up shows up / Assertion
        cy.contains('The organization has dependencies with templates, designs or diplomas').should('exist') //Assertion
    }

    assertSuccessfullDeletion() {
        cy.contains('Success').should('exist') // Assertion
        cy.contains('The organization has been deleted').should('exist') // Assertion
        cy.get('.sa-button-container').find('.confirm').click()
        organizationPage.searchButton().click()
        cy.contains('No Organization Found').should('exist') // Assertion
    }

    clickAssociations() {
        organizationPage.associations().click()
        cy.get('h3').should('contain', 'Association') // Assertion
    }

    findAccount(email) {
        organizationPage.searchUserField().type(email)
        organizationPage.searchUserButton().click()
        cy.wait(500)
        organizationPage.searchResultsTable().contains(email).should('exist') // Assertion
    }

    assignAccount() {
        organizationPage.associateButton().click()
        organizationPage.associateButton().should('not.exist') // Assertion
        organizationPage.removeAssociateButton().should('exist') // Assertion
        organizationPage.searchResultsTable().should('contain', 'Yes').should('contain', 'False') // Assertion
    }

    showOnlyAssociates() {
        organizationPage.showOnlyAssociates().check()
    }

    unassignAccount(email) {
        organizationPage.searchResultsTable().should('contain', email) // Asertion 
        organizationPage.searchResultsTable().find('.btn-danger').click()
        organizationPage.popupWindow().should('exist') // Assertion
        organizationPage.popupWindow().find('.swal2-confirm').click()
        cy.contains('Yes').should('not.exist') // Assertion
        cy.contains('False').should('not.exist') // Assertion
    }

}