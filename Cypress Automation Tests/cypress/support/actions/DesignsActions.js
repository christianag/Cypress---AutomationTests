import DesignsPage from "../pageobjects/DesignsPage";

const designsPage = new DesignsPage()

export default class DesignsActions {

    goToTemplateDesignsMenu() {
        cy.contains('Template Designs').click()
        cy.get('h3').contains('Template Designs List') // Assertion
    }

    findOrg(orgName) {
        designsPage.selectOrg().click()
        designsPage.enterOrgName().type(orgName + '{enter}')
    }

    addNewCustomDesign(name) {
        designsPage.addDesignButton().click()
        cy.get('h3').contains('Template Custom Design Add') // Assertion
        designsPage.customDesignBladeFileField().click()
        designsPage.customDesignBladeFileInput().type('ChrisTest_DesignsLanguage.blade.php{enter}')
        designsPage.customDesignName().type(name)
        designsPage.customDesignImage().selectFile('test.png')
    }

    customDesignLanguage(language) {
        designsPage.customDesignLanguageField().click()
        designsPage.customDesignLanguageInput().type(language + '{enter}')
    }

    customDesignSubmit() {
        designsPage.cutstomDesignSubmitButton().click()
        cy.get('.alert').contains('Template custom design updated successfully') // Assertion
        cy.get('h3', {timeout: 5000}).should('contain', 'Template Designs List') // Assertion
    }

    findNewCustomDesign(name) {
        this.searchDesignName(name)
        cy.get('[width="300"]').should('contain', name) // Assertion
        designsPage.editDesignButton().should('exist') // Assertion
        designsPage.deleteDesignButton().should('exist') // Assertion
        designsPage.diplicateDesignButton().should('not.exist') // Assertion
    }

    createNewDesign() {
        designsPage.createDesignButton().click()
        cy.contains('Create Design').should('exist') // Assertion
    }

    enterNewDesignDetails(name, orgName, language) {
        designsPage.newDesignName().type(name)
        designsPage.newDesignOrgDropdown().click()
        designsPage.newDesignOrgInput().type(orgName + '{enter}')
        cy.wait(500)
        designsPage.newDesignLanguage().click()
        designsPage.newDesignLanguageInput().type(language + '{enter}')
    }

    clickNext() {
        designsPage.nextButton().click()
    }

    selectPageFormat(format) {
        if(format.toLowerCase() == 'letter portrait') {
            cy.get('.letter-portrait').click()
        } else if(format.toLowerCase() == 'letter landscape') {
            cy.get('.letter-landscape').click()
        } else if(format.toLowerCase() == 'a4 landscape') {
            cy.get('.a4-landscape').click()
        } else {
            cy.get('.a4-portrait').click()
        }
    }

    selectLayout() {
        designsPage.layoutPreview().click()
    }

    layoutShouldExist(layoutName) {
        designsPage.layoutContainer().should('contain', layoutName)
    }

    layoutShouldNotExist(layoutName) {
        designsPage.layoutContainer().should('not.contain', layoutName)
    }

    assertionDesignPageSetUp() {
        cy.contains('Create Design').should('exist') // Assertion
        cy.url().should('contain', '/admin/design-add') // Assertion
    }

    saveEmptyDesign() {
        designsPage.saveDesignButton().click()
        cy.contains("The design does not include Course Title, Receiver's Name, Verification Link/QR. Continue?").should('exist') // Assertion
        cy.get('.swal2-confirm').click()
        cy.url().should('contain', '/design-edit/') // Assertion
        cy.get('h3', {timeout: 5000}).should('contain', 'Edit Design') // Assertion
    }

    searchDesignName(designName) {
        designsPage.searchDesignNameField().type(designName)
        designsPage.searchButton().click()
    }

    changeDesignVisibility() {
        designsPage.visibilityButton().click()
        cy.contains('Design visibility changed successfully').should('exist') //Assertion
    }

    deleteDesign() {
        designsPage.deleteDesignButton().click()
        cy.contains('Are you sure you want to delete this Design?').should('exist') //Assertion
        designsPage.popupConfirmButton().click()
        cy.contains('Design deleted successfully').should('exist') //Assertion
    }

    deleteDesignButtonNotAvailable() {
        designsPage.diplicateDesignButton().should('exist') // Assertion
        designsPage.editDesignButton().should('exist') // Assertion
        designsPage.deleteDesignButton().should('not.exist') // Assertion
    }

    clickEditDesign() {
        designsPage.editDesignButton().click()
        cy.get('h3').contains('Edit Design') // Assertion
        cy.url().should('contain', '/admin/design-edit/') // Assertion
    }

    duplicateDesign(designName, language) {
        designsPage.diplicateDesignButton().click()
        designsPage.duplicatePopUp().should('contain', 'Duplicate Design') // Assertion
        designsPage.duplicatePopUp().find('[style=""] > .form-control').type(designName) 
        designsPage.duplicatePopUp().find('.multiselect').click()
        designsPage.duplicatePopUp().find('.multiselect__content-wrapper > ul > li').contains(language).click()
        designsPage.duplicatePopUp().find('.btn-success').click()
        cy.get('.swal2-popup', {timeout: 5000}).should('contain', 'Design duplicated successfully') // Assertion
    }

    addBackground() {
        designsPage.addBackground().click()
        cy.get('.side-bar__container').should('exist') //Assertion
        cy.get('.side-bar__container').should('contain', 'Background') //Assertion
        cy.get('.side-bar__container').should('contain', 'Background Type') //Assertion
        cy.get('.side-bar__container').should('contain', 'Horizontal Position') //Assertion
    }

    addNewElement() {
        designsPage.addNewElement().click()
        cy.get('.side-bar__container').should('exist') //Assertion
        cy.get('.side-bar__container').should('contain', 'Text') //Assertion
        cy.get('.side-bar__container').should('contain', 'Image') //Assertion
        cy.get('.side-bar__container').should('contain', 'Separator') //Assertion
        cy.get('.side-bar__container').should('contain', 'Box') //Assertion
    }

    addTemplateOrDiplomaField() {
        designsPage.addTemplateOrDiplomaField().click()
        cy.get('.field-widget__container').should('exist') //Assertion
        cy.get('.field-widget__container').should('contain', 'Select Field') //Assertion
        cy.get('.field-widget__container').should('exist', 'button') //Assertion
        cy.get('.field-widget__container').should('contain', 'Add Field') //Assertion
    }

    viewDesignInfo(orgName) {
        designsPage.viewDesignInfo().click()
        cy.get('.side-bar__container').should('exist') //Assertion
        cy.get('.side-bar__container').should('contain', 'Design Information') //Assertion
        cy.get('.design-info__container').should('contain', orgName) //Assertion
    }

    showPreviewMode() {
        designsPage.showPreviewMode().click()
        cy.get('.fa-eye-slash').should('exist')  //Assertion
    }

    closeTemplateDiplomaField() {
        cy.get('.field-widget__close-btn').click()
    }

    selectBackgroundImage() {
        designsPage.selectBackgroundFromExistingImages().click()
        cy.get('.img__container').should('exist') //Assertion
        cy.get('.img__container').find('button').last().click() 
    }

    addTextElement(text) {
        cy.get('.btn__container > :nth-child(1)').click()
        cy.get('.design-widget__content--text').should('exist') // Assertion
        designsPage.textSizeInput().invoke('val', 34).trigger('input')
        designsPage.textThicknessInput().invoke('val', 700).trigger('input')
        cy.get('.edit-button').click({ force: true }) // New Text Element
        cy.get('.design-widget__content--text').clear().type('Hey this is a new text!')
    }

    clickOnPage() {
        cy.get('#page__content').click()
    }

}
