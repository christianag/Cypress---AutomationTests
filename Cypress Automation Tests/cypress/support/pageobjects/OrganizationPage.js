export default class OrganizationPage{

    addNewOrgButton() {return cy.get('.col-xs-4').find('.btn-primary')}

    searchOrgName() {return cy.get('[name="search_text"]')}

    searchButton() {return cy.get('.input-group-btn > button')}


    // ASSOCIATIONS PAGE
    associations() {return cy.contains('Associations')}

    searchUserField() {return cy.get('[name="searchText"]')}

    searchUserButton() {return cy.get('.input-group-btn').find('.btn')}

    associateButton() {return cy.get('#Associate')}

    removeAssociateButton() {return cy.get('.last > .btn')}

    showOnlyAssociates() {return cy.get('#showOnlyAssociates')}

    popupWindow() {return cy.get('.swal2-popup')}


    // ADD/EDIT ORG PAGE
    orgName() {return cy.get('[id="name"]')}

    iframeDescription() {return cy.get('[id="tinymce_en-US_desc_ifr"]').its('0.contentDocument.body')}

    shareTitle() {return cy.get('[id="share_title2-first"]')}

    countryDropdown() {return cy.contains('Country').next()}

    selectCountry() {return cy.get('.select2-results').find('ul > li')}

    presentationView() {return cy.get('[name="presentation_view"]')}

    orgImage() {return cy.get('[id="image"]')}

    orgURL() {return cy.get('[id="link_web"]')}

    setMethodPerTemplate() {return cy.get('#templates_diploma_share')}

    diploma2FA() {return cy.get('#diploma_2fa_enabled')}

    designsSupport() {return cy.get('[id="designs_checkbox"]')}

    reminderEmails() {return cy.get('[id="reminder-emails-check"]')}

    submitButton() {return cy.get('[id="btnSubmit"]')}


    //ASSIGN & ACTION BUTTONS
    editOrgButton() {return cy.get('.last').find('.btn-primary')}

    actionsDropdown() {return cy.get('.last').find('.dropdown-toggle')}

    actionsMenu() {return cy.get('.open')}

    searchBadgeField() {return cy.get('.form-control')}

    searchBadgeButton() {return cy.get('.input-group-btn').find('.btn-primary')}

    assignBadgeButton() {return cy.get('[title="Assign Badge"]')}

    showOnlyAssignedBadges() {return cy.get('[id="showOnlyAssociates"]')}

    searchResultsTable() {return cy.get('.pointer')}

    saveButton() {return cy.get('[type="submit"]')}

    goBackButton() {return cy.get('.x_title').find('.btn-info')}

    deleteButton() {return cy.get('.deleteOrg')}

    popupWarning() {return cy.get('.sweet-alert')}

    popupConfirmButton() {return cy.get('.sa-button-container').find('.confirm')}


}