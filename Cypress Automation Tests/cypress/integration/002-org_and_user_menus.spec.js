/// <reference types="cypress" />

import OrganizationActions from "../support/actions/OrganizationActions"
import DesignsActions from "../support/actions/DesignsActions"
import DiplomasActions from "../support/actions/DiplomasActions"
import UserManagementActions from "../support/actions/UserManagementActions"

const org = new OrganizationActions()
const designs = new DesignsActions()
const users = new UserManagementActions()
const diplomas = new DiplomasActions()

describe('Create new User and Org', () => {

    const NEW_ORG = 'NEW TEST ORGANIZATION'
    const USER_EMAIL = Cypress.env('RECEPIENT_EMAIL')
    const USER_NAME = 'Chris Cypress Test'
    const TODAY = new Date().getDate();

    it('Create New Organization', () => {
        org.goToOrganizationsMenu()
        org.addNewOrg()
        org.enterOrgName(NEW_ORG)
        org.enterDescription(NEW_ORG)
        org.selectViewType('List View')
        org.uploadImage('test.png')
        org.orgWebsite('https://test.com')
        org.checkDesignsSupport()
        org.checkReminderEmails()
        org.clickSubmit()
    })

    it('Edit Organization', () => {
        org.goToOrganizationsMenu()
        org.searchByOrgName(NEW_ORG)
        org.clickEditOrgButton()
        org.enterSharedTitle(NEW_ORG)
        org.pickCountry('Bulgaria')
        org.checkDiploma2FA()
        org.clickSubmit()
    })

    it('Assign Badge to Organization', () => {
        org.goToOrganizationsMenu()
        org.searchByOrgName(NEW_ORG)
        org.selectAction(NEW_ORG, 'Assign Template Badges')
        org.assignBadge('ChrisLogo07')
    })

    it('Assign Template Fields to Organization', () => { 
        org.goToOrganizationsMenu()
        org.searchByOrgName(NEW_ORG)
        org.selectAction(NEW_ORG, 'Assign Template Fields')
        org.assign('zzz_templatefield1')
        org.saveChanges()
        org.clickBackButton()
    })

    it('Assign Diploma Fields to Organization', () => { 
        org.goToOrganizationsMenu()
        org.searchByOrgName(NEW_ORG)
        org.selectAction(NEW_ORG,'Assign Diploma Fields')
        org.assign('zzz_table_test')
        org.assign('WFTGA ref.no.')
        org.saveChanges()
        org.fieldsAssertion()
        org.clickBackButton()
    })

    it('Assign Custom Design to Organization', () => { 
        org.goToOrganizationsMenu()
        org.searchByOrgName(NEW_ORG)
        org.selectAction(NEW_ORG, 'Assign Template Designs')
        org.assign('Nikolay table template 2')
        org.saveChanges()
        org.designAssertion()
        designs.goToTemplateDesignsMenu()
        designs.findOrg(NEW_ORG)
        cy.contains('Nikolay table template 2').should('exist') // Assertion
    })

    it('Create Regular Design via Builder Under Organization', ()=> {
        designs.goToTemplateDesignsMenu()
        designs.createNewDesign()
        designs.enterNewDesignDetails('ChrisTest_cypress', NEW_ORG, 'English')
        designs.clickNext()
        designs.selectPageFormat('letter portrait')
        designs.clickNext()
        designs.selectLayout()
        designs.clickNext()
        designs.saveEmptyDesign()
    })

    it('Create New Account with User Permissions', ()=> {
        users.goToUserManagementMenu()
        users.createNewAccount()
        users.enterName(USER_NAME)
        users.enterEmail(USER_EMAIL)
        users.selectCountry('Bulgaria')
        users.clickSubmit()
        users.assertSuccessfulCreationOfNewAccount()
    })

    it('Assign New User to Organization', ()=> {
        org.goToOrganizationsMenu()
        org.searchByOrgName(NEW_ORG)
        org.clickAssociations(NEW_ORG)
        org.findAccount(USER_EMAIL)
        org.assignAccount()
    })

    it('Issue Diploma to User', () => {
        diplomas.goToIssueDiplomas()
        diplomas.clickNext()
        diplomas.selectOrganization('Lab08')
        diplomas.selectTemplate('Test Template')
        diplomas.selectLanguage('Dansk')
        diplomas.selectManualInput()
        diplomas.inputReceiverName('ChrisTest Cypress Issued Diploma')
        diplomas.inputReceiverEmail(USER_EMAIL)
        diplomas.inputIssueDate(TODAY)
        diplomas.clickNext()
        diplomas.clickIssueNow()
    })

    it('Issue Bundle to User', () => {
        diplomas.goToIssueDiplomas()
        diplomas.selectBundle()
        diplomas.clickNext()
        diplomas.selectOrganization('Lab08')
        diplomas.selectTemplate('ChrisTest001')
        diplomas.selectManualInput()
        diplomas.inputReceiverName('ChrisTest Cypress Issued Bundle')
        diplomas.inputReceiverEmail(USER_EMAIL)
        diplomas.inputIssueDate(TODAY)
        diplomas.clickNext()
        diplomas.clickIssueNow()
    })

    it('Unsuccessful Deletion of Account', () => {
        users.goToUserManagementMenu()
        users.findUser(USER_EMAIL)
        users.deleteUser()
        users.assertFailedStillHasDiplomas()
    })

    it('Revoke User Diploma', () => {
        diplomas.goToSearchDiplomas()
        diplomas.searchOrgName('Lab08')
        diplomas.searchRecepient(USER_EMAIL)
        diplomas.clickSearch()
        diplomas.revokeDiploma('ChrisTest Cypress Issued Diploma')
    })

    it('Unsuccessful Deletion of Account', () => {
        users.goToUserManagementMenu()
        users.findUser(USER_EMAIL)
        users.deleteUser()
        users.assertFailedStillHasDiplomas()
    })

    it('Unsuccessfull Delete of Organization', () => {
        org.goToOrganizationsMenu()
        org.searchByOrgName(NEW_ORG)
        org.searchResultsCheck(NEW_ORG)
        org.deleteOrg()
        org.assertDeletionFailed()
    })

    it('Revoke User Bundle', () => {
        diplomas.goToSearchDiplomas()
        diplomas.searchOrgName('Lab08')
        diplomas.searchRecepient(USER_EMAIL)
        diplomas.clickSearch()
        diplomas.revokeDiploma('ChrisTest Cypress Issued Bundle')
    })

    it('Unsuccessful Deletion of Account', () => {
        users.goToUserManagementMenu()
        users.findUser(USER_EMAIL)
        users.deleteUser()
        users.assertFailedStillAssigned()
    })

    it('Un-assign User from Organization', ()=> {
        org.goToOrganizationsMenu()
        org.searchByOrgName(NEW_ORG)
        org.clickAssociations(NEW_ORG)
        org.findAccount(USER_EMAIL)
        org.unassignAccount(USER_EMAIL)
    })

    it('Successful Deletion of Account', () => {
        users.goToUserManagementMenu()
        users.findUser(USER_EMAIL)
        users.deleteUser()
        users.assertSuccessfulDelete()
    })

    it('Unsuccessfull Delete of Organization', () => {
        org.goToOrganizationsMenu()
        org.searchByOrgName(NEW_ORG)
        org.searchResultsCheck(NEW_ORG)
        org.deleteOrg()
        org.assertDeletionFailed()
    })

    it('Delete Custom Design', () =>{
        designs.goToTemplateDesignsMenu()
        designs.findOrg(NEW_ORG)
        designs.searchDesignName('ChrisTest_cypress')
        designs.deleteDesign()
    })

    it('Delete Organization', () => {
        org.goToOrganizationsMenu()
        org.searchByOrgName(NEW_ORG)
        org.searchResultsCheck(NEW_ORG)
        org.deleteOrg()
        org.assertSuccessfullDeletion()
    })

})