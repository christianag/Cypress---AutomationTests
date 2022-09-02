

export default class EmailsActions {

    goToEmailsMenu() {
        cy.contains('E-mails').click()
        cy.get('h3').contains('Email Templates') // Assertion
        cy.url().should('contain', '/email-templates') // Assertion
    }

    clickAddNew() {
        cy.get('.col-sm-2 > .btn').click()
        cy.get('h3').contains('Add Email Template') // Assertion
        cy.url().should('contain', '/email-template-add') // Assertion
        cy.contains('Claiming email').should('exist') // Assertion
        cy.contains('Expiry Notifications').should('exist') // Assertion
        cy.contains('Reminders').should('not.exist') // Assertion
    }

    selectOrg(orgName) {
        cy.get('.multiselect__tags').click()
        cy.get('.multiselect__input').type(orgName + '{enter}')
        cy.contains('Reminders').should('exist') // Assertion
    }

    searchByName(name) {
        cy.get('.form-control').click()
        cy.get('.form-control').type(name + '{enter}')
    }

    addTemplateName(name) {
        cy.get('.col-md-6 > .form-control').type(name + '{enter}')
    }

    addOrgName(orgName) {
        cy.get(':nth-child(1) > .col-md-6 > .select-container > .multiselect > .multiselect__tags').click()
        cy.get('.multiselect__content-wrapper > ul > li').contains(orgName).click()
    }

    insertEmailGreeting() {
        cy.get(':nth-child(8) > .form-group > .col-md-3 > .btn').click()
        this.insertTextAssertions()
    }

    insertClaimingSubject() {
        cy.get(':nth-child(10) > .form-group > .col-md-3 > .btn').click()
        this.insertTextAssertions()
    }

    insertClaimingText() {
        cy.get(':nth-child(11) > .multi-lang-teaxarea > .col-md-3 > .btn-dark').click()
        this.insertTextAssertions()
    }

    insertTextAssertions() {
        cy.get('.swal2-popup').should('exist') // Assertion
        cy.get('.swal2-popup').should('contain', 'Replace all text fields ?')// Assertion
        cy.get('.swal2-confirm').click()
    }

    previewEmail() {
        cy.get(':nth-child(11) > .multi-lang-teaxarea > .col-md-3 > .btn-warning').click()
        cy.wait(500)
        cy.get('.modal-content').should('exist') // Assertion
        cy.get(':nth-child(2) > .em_padd > table > tbody > :nth-child(1) > td').should('contain', 'COURSE TITLE') // Assertion
        cy.get('.em_padd > table > tbody > :nth-child(3) > td').should('contain', 'Dear :recipient_name') // Assertion
        cy.get(':nth-child(4) > .em_text').should('contain', 'We have issued a digital diploma for you. We have teamed up with Diplomasafe so you always can find your diplomas and share your obtained competencies on the social medias.') // Assertion
        cy.get('.modal-footer > .btn').click()
    }

    selectNoExpiryEmails(number) {
        cy.get('[data-v-0b0ac4a8=""][data-v-054f1ca7=""] > .padding-bottom > .col-md-6 > .select-container > .multiselect > .multiselect__tags').click()
        cy.get('.multiselect--above > div:nth-child(3) > ul > li').contains(number).click()
    }

    fillOutNotification1() {
        cy.get('#expiryNotification_subject_11-first').type('Cypress test test test.')
        cy.get('#tinymce_expiry-notification-1_1_ifr').its('0.contentDocument.body').type('Cypress test test test.')
    }

    fillOutNotification2() {
        cy.get('#expiryNotification_subject_21-first').type('Cypress test test test.')
        cy.get('#tinymce_expiry-notification-2_1_ifr').its('0.contentDocument.body').type('Cypress test test test.')
    }

    submitEmailTemplate() {
        cy.get('.col-md-6 > .btn-success').click()
        cy.contains('Email Templates').should('exist') // Assertion
        cy.url().should('contain', '/email-templates') // Assertion
    }

    goBackButton() {
        cy.get('.btn-primary').click()
        cy.get('h3').contains('Email Templates') // Assertion
        cy.url().should('contain', '/email-templates') // Assertion
    }

    editEmail(name) {
        cy.get('.pointer').find('.name').should('contain', name) // Assertion
        cy.get('.pointer').find('.edit-template').click()
        cy.get('h3').contains('Edit Email Template') // Assertion
        cy.url().should('contain', '/email-template-edit/') // Assertion
    }

    deleteEmail(name) {
        cy.get('.pointer').find('.name').should('contain', name) // Assertion
        cy.get('.pointer').find('.btn-danger').click()
        cy.get('.swal2-popup').should('contain', 'Are you sure to delete this template?') // Assertion
        cy.get('.swal2-confirm').click()
    }

    changeReminderNumber(number) {
        cy.get('[data-v-a516c390=""][data-v-054f1ca7=""] > :nth-child(2)').find('.select-container').click()
        cy.get('[data-v-a516c390=""][data-v-054f1ca7=""] > :nth-child(2)').find('.multiselect__content-wrapper > ul > li').contains(number).click()
        cy.get('.swal2-popup').should('contain', 'Do you want to decrease the number of reminder emails?') // Assertion
        cy.get('.swal2-confirm').click()
    }

    changeNoOfExpiryNotifications(number) {
        cy.get('[data-v-0b0ac4a8=""][data-v-054f1ca7=""] > :nth-child(2)').find('.multiselect').click()
        cy.get('[data-v-0b0ac4a8=""][data-v-054f1ca7=""] > :nth-child(2)').find('.multiselect__content-wrapper > ul > li').contains(number).click()
        cy.get('.swal2-popup').should('contain', 'Do you want to decrease the number of expiry notification emails?') // Assertion
        cy.get('.swal2-confirm').click()
    }

    addTwoNudgingEmails() {
        cy.get('[data-v-8680f898=""][data-v-054f1ca7=""] > .padding-bottom').find('.multiselect').click()
        cy.get('[data-v-8680f898=""][data-v-054f1ca7=""] > .padding-bottom').find('.multiselect__content-wrapper > ul > li').contains("2").click()
        cy.get(':nth-child(3) > :nth-child(1) > .inline__style > .form-control').check()
        cy.get('#nudging_subject_11-first').type('Cypress test test test.')
        cy.get('#tinymce_nudging-1_1_ifr').its('0.contentDocument.body').type('Cypress test test test.')
        cy.get('#nudging_subject_21-first').type('Cypress test test test.')
        cy.get('#tinymce_nudging-2_1_ifr').its('0.contentDocument.body').type('Cypress test test test.')
    }

    makeDefault() {
        cy.wait(500)
        cy.get('.col-md-2 > .btn-danger').should('contain', 'Make Default') // Assertion
        cy.get('.col-md-2 > .btn-danger').click()
    }

    thereIsAlreadyADefaultEmail() {
        cy.get('.swal2-popup').should('contain', 'Another e-mail template is already marked as default.') // Assertion
        cy.get('.swal2-confirm').click()
    }

    deselectAsDefault() {
        cy.get('.col-md-2 > .btn').should('contain', 'Default') // Assertion
        cy.get('.col-md-2 > .btn').click()
        cy.get('.col-md-2 > .btn').should('contain', 'Make Default') // Assertion
    }


}