export default class DesignsPage {

    selectOrg() {return cy.get('.organizastion-select').find('.multiselect__single')}
    
    enterOrgName() {return cy.get('.multiselect__tags').find('[placeholder="Select Organization"]')}

    addDesignButton() {return cy.get('[href="https://test-admin.diplomasafe.net/en-US/admin/template-custom-designs-add"]')}

    createDesignButton() {return cy.get('.header').find('.add-button')}

    newDesignName() {return cy.get('[id="design-name"]')}

    newDesignOrgDropdown() {return cy.get('.multiselect').find('.multiselect__tags')}
    
    newDesignOrgInput() {return cy.get('.multiselect__input')}

    newDesignLanguage() {return cy.get('.multiselect__single').last()}

    newDesignLanguageInput() {return cy.get('[placeholder="Select Language"]')}

    nextButton() {return cy.get('.btn-success')}

    layoutContainer() {return cy.get('.layouts__container')}

    layoutPreview() {return cy.get('.layout__preview')}

    saveDesignButton() {return cy.contains('Save Design')}

    searchDesignNameField() {return cy.get('[placeholder="Search by name"]')}

    searchButton() {return cy.get('.input-group-btn').find('.btn-primary')}

    searchResultsActionButtons() {return cy.get('.pointer > .last')}

    visibilityButton() {return cy.get('.column-title > .btn')}

    editDesignButton() {return cy.get('.pointer > .last').find('.btn-primary')}

    diplicateDesignButton() {return cy.get('.pointer > .last').find('.btn-success')}

    deleteDesignButton() {return cy.get('.pointer > .last').find('.btn-danger')}

    popupConfirmButton() {return cy.get('.swal2-confirm')}

    customDesignBladeFileField() {return cy.get('.select2-selection__arrow')}

    customDesignBladeFileInput() {return cy.get('.select2-search__field')}

    customDesignName() {return cy.get('#name')}

    customDesignImage() {return cy.get('#thumbnail-input')}

    customDesignLanguageField() {return cy.get(':nth-child(1) > .col-md-6 > .select-container > .multiselect > .multiselect__tags')}

    customDesignLanguageInput() {return cy.get('div.form-group:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(3)')}

    cutstomDesignSubmitButton() {return cy.get('.btn-success')}

    addBackground() {return cy.get('[title="Add Design Background"] > .fa')}

    addNewElement() {return cy.get('[title="Add New Element"] > .fa')}

    addTemplateOrDiplomaField() {return cy.get('[title="Add Template/Diploma Field"] > .fa')}

    viewDesignInfo() {return cy.get('[title="View Design Info"] > .fa')}

    showPreviewMode() {return cy.get('[title="Show Preview Mode"] > .fa')}

    selectBackgroundFromExistingImages() {return cy.get('.expand__btn')}

    textSizeInput() {return cy.get(':nth-child(4) > .size__input > [type="range"]')}

    textThicknessInput() {return cy.get(':nth-child(6) > .size__input > [type="range"]')}

    duplicatePopUp() {return cy.get('.modal-dialog')}

}