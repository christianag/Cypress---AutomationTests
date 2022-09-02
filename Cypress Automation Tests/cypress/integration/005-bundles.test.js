/// <reference types="cypress" />

import BundlesActions from "../support/actions/BundlesActions"
import TemplatesActions from "../support/actions/TemplatesActions"

const templates = new TemplatesActions()
const bundles = new BundlesActions()

describe('Test the Bundles Menu', () => {

    const ORG_NAME = 'ORGANIZATION NAME'
    const BUNDLE_NAME = 'ChrisTest_CypressBundle'
    const BUNDLE_TEMPLATE_1 = 'ChrisTest_Cypress_forBundle_1'
    const BUNDLE_TEMPLATE_2 = 'ChrisTest_Cypress_forBundle_2'
    const DESIGN_NAME_1 = 'DESIGN 1'
    const DESIGN_NAME_2 = 'DESIGN 2'

    it('Create 1st New Template for Bundle Use', ()=> {
        templates.goToTemplateMenu()
        templates.addNewTemplate()
        templates.selectOrg(ORG_NAME)
        templates.selectBadge()
        templates.selectDesign(DESIGN_NAME_1)
        templates.inputTemplateName(BUNDLE_TEMPLATE_1)
        templates.submitTemplate()
        templates.assertionNewTemplate()
    })

    it('Create 2nd New Template for Bundle Use', ()=> {
        templates.goToTemplateMenu()
        templates.addNewTemplate()
        templates.selectOrg(ORG_NAME)
        templates.selectBadge()
        templates.selectDesign(DESIGN_NAME_2)
        templates.inputTemplateName(BUNDLE_TEMPLATE_2)
        templates.submitTemplate()
        templates.assertionNewTemplate()
    })

    it('Create New Bundle', ()=> {
        bundles.goToBundlesMenu()
        bundles.clickAddNewBundle()
        bundles.newBundleOrg(ORG_NAME)
        bundles.newBundleName(BUNDLE_NAME)
        bundles.newBundleLanguage('English')
        bundles.newBundleTitleEN(BUNDLE_NAME)
        bundles.newBundleTypeEN('Award')
        bundles.newBundleEmailTemplate('ChrisTest_new')
        bundles.newBundleAddFirstTemplate(BUNDLE_TEMPLATE_1, 1)
        bundles.newBundleAddAnotherTemplate(BUNDLE_TEMPLATE_2, 2)
        bundles.newBundleSubmit()
    })

    it('Edit New Bundle', ()=> {
        bundles.goToBundlesMenu()
        bundles.selectOrg(ORG_NAME)
        bundles.searchByBundleName(BUNDLE_NAME)
        bundles.editBundle(BUNDLE_NAME)
        bundles.newBundleTypeEN('Certificate')
        bundles.newBundleSubmit()
    })

    //TEAR DOWN
    it('Delete New Bundle', ()=> {
        bundles.goToBundlesMenu()
        bundles.selectOrg(ORG_NAME)
        bundles.searchByBundleName(BUNDLE_NAME)
        bundles.deleteBundle(BUNDLE_NAME)
    })

    it('Delete The 2 Templates', () => {
        templates.goToTemplateMenu()
        templates.findOrg(ORG_NAME)
        templates.findTemplateByName(BUNDLE_TEMPLATE_1)
        templates.deleteTemplate(BUNDLE_TEMPLATE_1)
        templates.goToTemplateMenu()
        templates.findOrg(ORG_NAME)
        templates.findTemplateByName(BUNDLE_TEMPLATE_2)
        templates.deleteTemplate(BUNDLE_TEMPLATE_2)
    })

})

