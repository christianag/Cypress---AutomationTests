/// <reference types="cypress" />

import OrganizationActions from "../support/actions/OrganizationActions"
import DesignsActions from "../support/actions/DesignsActions"
import TemplatesActions from "../support/actions/TemplatesActions"
import DiplomasActions from "../support/actions/DiplomasActions"

const designs = new DesignsActions()
const org = new OrganizationActions()
const templates = new TemplatesActions()
const diplomas = new DiplomasActions()

describe('Test the Template Designs Menu', () => {

    const CUSTOM_DESIGN_NAME = 'ChrisTest_CypressCustomDesign'
    const ORG_NAME = 'ORGANIZATION NAME'
    const REGULAR_DESIGN_NAME = 'ChrisTest_cypressRegularDesign'
    const RECEIVER_EMAIL =Cypress.env('RECEPIENT_EMAIL')
    const LANGUAGE = 'English'
    const TODAY = new Date().getDate();

    it('Create Custom Design', () => {
        designs.goToTemplateDesignsMenu()
        designs.addNewCustomDesign(CUSTOM_DESIGN_NAME)
        designs.customDesignLanguage(LANGUAGE)
        designs.customDesignSubmit()
        designs.findNewCustomDesign(CUSTOM_DESIGN_NAME) // Assertion
    })

    it('Assign Custom Design to Organization', () => { 
        org.goToOrganizationsMenu()
        org.searchByOrgName(ORG_NAME)
        org.selectAction(ORG_NAME, 'Assign Template Designs')
        org.assign(CUSTOM_DESIGN_NAME)
        org.saveChanges()
        org.designAssertion()
        designs.goToTemplateDesignsMenu()
        designs.findOrg(ORG_NAME)
        designs.searchDesignName(CUSTOM_DESIGN_NAME)
        cy.contains(CUSTOM_DESIGN_NAME).should('exist') // Assertion
    })

    it('Create Regular Design via Builder Under Organization', ()=> {
        designs.goToTemplateDesignsMenu()
        designs.createNewDesign()
        designs.enterNewDesignDetails(REGULAR_DESIGN_NAME, ORG_NAME, LANGUAGE)
        designs.clickNext()
        designs.selectPageFormat('a4 landscape')
        designs.clickNext()
        designs.selectLayout()
        designs.clickNext()
        designs.saveEmptyDesign()
    })

    it('Edit Regular Design', ()=> {
        designs.goToTemplateDesignsMenu()
        designs.searchDesignName(REGULAR_DESIGN_NAME)
        designs.clickEditDesign()
        designs.addBackground()
        designs.selectBackgroundImage()
        designs.addNewElement()
        designs.addTextElement()
        designs.clickOnPage()
        designs.addTemplateOrDiplomaField()
        designs.closeTemplateDiplomaField()
        designs.viewDesignInfo(ORG_NAME)
        designs.showPreviewMode()
        designs.saveEmptyDesign()
    })

    it('Duplicate Regular Design', ()=> {
        designs.goToTemplateDesignsMenu()
        designs.searchDesignName(REGULAR_DESIGN_NAME)
        designs.duplicateDesign('CYPRESS DUPLICATE', 'Dansk')
    })

    it('Change Visibility of Regular Design', ()=> {
        designs.goToTemplateDesignsMenu()
        designs.findOrg(ORG_NAME)
        designs.searchDesignName(REGULAR_DESIGN_NAME)
        designs.changeDesignVisibility()
        // additional visibility check in templates menu
        templates.goToTemplateMenu()
        templates.addNewTemplate()
        templates.selectOrg(ORG_NAME)
        templates.designShouldNotExist(REGULAR_DESIGN_NAME)
    })

    it('Delete Duplicate Design', ()=> {
        designs.goToTemplateDesignsMenu()
        designs.findOrg(ORG_NAME)
        designs.searchDesignName('CYPRESS DUPLICATE')
        designs.deleteDesign()
    })

    it('Make Regular Design Visible Again', ()=> {
        designs.goToTemplateDesignsMenu()
        designs.findOrg(ORG_NAME)
        designs.searchDesignName(REGULAR_DESIGN_NAME)
        designs.changeDesignVisibility()
    })

    it('Create Template with Regular Design', ()=> {
        templates.goToTemplateMenu()
        templates.addNewTemplate()
        templates.selectOrg(ORG_NAME)
        templates.selectBadge()
        templates.selectDesign(REGULAR_DESIGN_NAME)
        templates.inputTemplateName(REGULAR_DESIGN_NAME)
        templates.submitTemplate()
    })

    it('Should Not be able to Delete Regular Design', ()=> {
        designs.goToTemplateDesignsMenu()
        designs.findOrg(ORG_NAME)
        designs.searchDesignName(REGULAR_DESIGN_NAME)
        designs.deleteDesignButtonNotAvailable()
    })
    
    it('Template Should Exist, 0 Diplomas', () => {
        templates.goToTemplateMenu()
        templates.findOrg(ORG_NAME)
        templates.findTemplateByName(REGULAR_DESIGN_NAME)
        templates.noIssuedDiplomasCheck()
    })

    it('Issue a Diploma with this Design', () => {
        diplomas.goToIssueDiplomas()
        diplomas.clickNext()
        diplomas.selectOrganization(ORG_NAME)
        diplomas.selectTemplate(REGULAR_DESIGN_NAME)
        diplomas.selectManualInput()
        diplomas.inputReceiverName(REGULAR_DESIGN_NAME)
        diplomas.inputReceiverEmail(RECEIVER_EMAIL)
        diplomas.inputIssueDate(TODAY)
        diplomas.clickNext()
        diplomas.clickIssueNow()
    })

    it('Cannot Delete Template', () => {
        templates.goToTemplateMenu()
        templates.findOrg(ORG_NAME)
        templates.findTemplateByName(REGULAR_DESIGN_NAME)
        templates.hasIssuedDiplomasCheck()
    })

    //TEAR DOWN
    it('Revoke & Delete Template Diploma', () => {
        templates.goToTemplateMenu()
        templates.findOrg(ORG_NAME)
        templates.findTemplateByName(REGULAR_DESIGN_NAME)
        templates.clickOnIssuedDiplomas(REGULAR_DESIGN_NAME, ORG_NAME) // Assertion
        diplomas.revokeDiploma(REGULAR_DESIGN_NAME)
        diplomas.deleteDiploma(REGULAR_DESIGN_NAME)
    })

    it('Delete The Template', () => {
        templates.goToTemplateMenu()
        templates.findOrg(ORG_NAME)
        templates.findTemplateByName(REGULAR_DESIGN_NAME)
        templates.deleteTemplate(REGULAR_DESIGN_NAME)
    })

    it('Delete Regular Design', () => {
        designs.goToTemplateDesignsMenu()
        designs.findOrg(ORG_NAME)
        designs.searchDesignName(REGULAR_DESIGN_NAME)
        designs.deleteDesign()
    })

    it('Delete Custom Design', () => {
        designs.goToTemplateDesignsMenu()
        designs.findOrg(ORG_NAME)
        designs.searchDesignName(CUSTOM_DESIGN_NAME)
        designs.deleteDesign()
    })

})
