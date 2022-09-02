import BundlesPage from "../pageobjects/BundlesPage";

const bundlesPage = new BundlesPage()

export default class BundlesActions {

    goToBundlesMenu() {
        cy.get('.side-menu ').contains('Bundles').click()
        cy.get('.side-menu > .active > .nav > :nth-child(1) > a').click()
        cy.get('h3').should('contain', 'Template Bundles') // Assertion
        cy.url().should('contain', '/bundles') // Assertion
    }

    goToIssuedBundlesMenu() {
        cy.get('.side-menu > :nth-child(15) > :nth-child(1)').click()
        cy.get('.active > .nav > :nth-child(2) > a').click()
        cy.get('h3').should('contain', 'Issued Bundles') // Assertion
        cy.url().should('contain', '/issued-bundles') // Assertion
    }

    selectOrg(orgName) {
        cy.wait(500)
        cy.get('.multiselect__select').click()
        cy.get('.multiselect__input').type(orgName + '{enter}')
        // cy.get('.organization-dropdown').find('.multiselect__content-wrapper > ul > li').contains(orgName).click()
    }

    searchByBundleName(bundleName) {
        cy.get('.form-control').type(bundleName)
        cy.get('.input-group-btn > .btn').click()
    }

    clickAddNewBundle() {
        cy.get('.row-flex > .btn').click()
        cy.get('h3').should('contain', 'Add Bundle') // Assertion
        cy.url().should('contain', '/bundle-add') // Assertion
    }

    newBundleName(bundleName) {
        cy.get('#name').type(bundleName)
    }

    newBundleOrg(orgName) {
        cy.get(':nth-child(3) > .col-md-6 > .multiselect > .multiselect__tags').click()
        cy.get('.form-horizontal > :nth-child(3)').find('.multiselect__content-wrapper > ul > li').contains(orgName).click()
    }

    newBundleLanguage(language) {
        cy.get(':nth-child(4) > .col-md-6 > .multiselect > .multiselect__tags').click()
        cy.get('.form-horizontal > :nth-child(4)').find('.multiselect__content-wrapper > ul > li').contains(language).click()
    }

    newBundleTitleEN(title) {
        cy.get('#title1-first').type(title)
    }

    newBundleTypeEN(type) {
        cy.get('#type1-first').clear().type(type)
    }

    newBundleEmailTemplate(choice) {
        cy.get(':nth-child(7) > .col-md-6 > .multiselect > .multiselect__tags').click()
        cy.get('.form-horizontal > :nth-child(7)').find('.multiselect__content-wrapper > ul > li').contains(choice).click()
    }

    newBundleAddFirstTemplate(templateName, weight) {
        cy.get('[data-v-a20f20b2=""][data-v-56a7a18a=""]').click()
        cy.get('[data-v-a20f20b2=""][data-v-56a7a18a=""]').find('.multiselect__content-wrapper > ul > li').contains(templateName).click()
        cy.get('.col-md-1 > .btn').click()
        cy.get('.template-list-item').should('contain', templateName) // Assertion
        cy.get('.template-name > .btn').should('exist') // Assertion
        cy.get('.template-list-item > :nth-child(2) > .col-md-6 > input').type(weight)
        cy.get('.template-list-item').find('[id^=label-][id$=-first]').first().clear().type(templateName)
    }

    newBundleAddAnotherTemplate(templateName, weight) {
        cy.get('[data-v-a20f20b2=""][data-v-56a7a18a=""]').click()
        cy.get('[data-v-a20f20b2=""][data-v-56a7a18a=""]').find('.multiselect__content-wrapper > ul > li').contains(templateName).click()
        cy.get('.col-md-1 > .btn').click()
        cy.get('.template-list > :nth-child(' + weight + ')').should('contain', templateName) // Assertion
        cy.get('.template-list > :nth-child(' + weight + ')').find('.template-name > .btn').should('exist') // Assertion
        cy.get(':nth-child(' + weight + ') > :nth-child(2) > .col-md-6 > input').type(weight)
        cy.get('.template-list > :nth-child(' + weight + ')').find('[id^=label-][id$=-first]').first().clear().type(templateName)
    }

    newBundleSubmit() {
        cy.get('.btn-primary').click()
        cy.get('h3').should('contain', 'Template Bundles') // Assertion
        cy.url().should('contain', '/bundles') // Assertion
    }

    editBundle(bundleName) {
        cy.get('.pointer > .name').should('contain', bundleName) // Assertion
        cy.get('.pointer > .last').find('.btn-danger').should('exist') // Assertion
        cy.get('.pointer > .last').find('.edit-template').click()
        cy.get('h3').should('contain', 'Edit Bundle: ' + bundleName) // Assertion
        cy.url().should('contain', '/bundle-edit/') // Assertion
        cy.wait(500)
    }

    deleteBundle(bundleName) {
        cy.get('.pointer > .name').should('contain', bundleName) // Assertion
        cy.get('.pointer > .last').find('.btn-danger').should('exist').click() // Assertion
        cy.get('.swal2-popup').should('exist').should('contain', 'Are you sure to delete this bundle?')
        cy.get('.swal2-confirm').click()
        cy.contains('Bundle deleted successfully').should('exist') // Assertion
    }

}
