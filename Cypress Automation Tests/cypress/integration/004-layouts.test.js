/// <reference types="cypress" />

import DesignsActions from "../support/actions/DesignsActions"
import LayoutsActions from "../support/actions/LayoutsActions"

const designs = new DesignsActions()
const layouts = new LayoutsActions()

describe('Test the Template Designs Menu', () => { 

    const LAYOUT_NAME = 'Cypress_Layout'
    const PAGE_FORMAT = 'letter landscape'

    it('Create New Layout', () => {
        layouts.goToLayoutsMenu()
        layouts.clickCreateNewLayout()
        layouts.inputNewLayoutName(LAYOUT_NAME)
        designs.selectPageFormat(PAGE_FORMAT)
        layouts.clickStartDesign()
        layouts.clickSaveLayout(LAYOUT_NAME)
        layouts.newlyCreatedLayoutAssertion(LAYOUT_NAME)
    })

    it('Check that Layout is not Visible', () => {
        designs.goToTemplateDesignsMenu()
        designs.createNewDesign()
        designs.enterNewDesignDetails('TEST', 'ORGANIZATION NAME', 'English')
        designs.clickNext()
        designs.selectPageFormat(PAGE_FORMAT)
        designs.clickNext()
        designs.layoutShouldNotExist(LAYOUT_NAME)
    })

    it('Change Layout Visibility', () => {
        layouts.goToLayoutsMenu()
        layouts.changeLayoutVisibility(LAYOUT_NAME)
    })

    it('Layout Should Now be Visible in Designs Page', ()=> {
        designs.goToTemplateDesignsMenu()
        designs.createNewDesign()
        designs.enterNewDesignDetails('TEST', 'ORGANIZATION NAME', 'English')
        designs.clickNext()
        designs.selectPageFormat(PAGE_FORMAT)
        designs.clickNext()
        designs.layoutShouldExist(LAYOUT_NAME)
    })

    it('Edit Layout', ()=> { 
        layouts.goToLayoutsMenu()
        layouts.editLayout(LAYOUT_NAME)
        designs.addBackground()
        designs.selectBackgroundImage()
        designs.addNewElement()
        designs.addTextElement()
        designs.clickOnPage()
        layouts.clickSaveLayout(LAYOUT_NAME)
    })

    //TEAR DOWN
    it('Delete Layout', ()=> { 
        layouts.goToLayoutsMenu()
        layouts.deleteLayout(LAYOUT_NAME)
    })
})