import EmailsActions from "../support/actions/EmailsActions"
import TemplatesActions from "../support/actions/TemplatesActions"

const emails = new EmailsActions()
const templates = new TemplatesActions()

describe('Test the E-mails Menu', () => {

    const ORG_NAME = 'ORGANIZATION NAME'
    const EMAIL_TEMPLATE_NAME = 'ChrisTest_CypressEmail'
    
    it('Create New Email Template', ()=> {
        emails.goToEmailsMenu()
        emails.clickAddNew()
        emails.addOrgName(ORG_NAME)
        emails.addTemplateName(EMAIL_TEMPLATE_NAME)
        emails.insertEmailGreeting()
        emails.insertClaimingSubject()
        emails.insertClaimingText()
        emails.previewEmail()
        emails.selectNoExpiryEmails(2)
        emails.fillOutNotification1()
        emails.fillOutNotification2()
        emails.submitEmailTemplate()
    })

    it('Reduce Number of Reminder Emails', ()=> {
        emails.goToEmailsMenu()
        emails.searchByName(EMAIL_TEMPLATE_NAME)
        emails.editEmail(EMAIL_TEMPLATE_NAME)
        emails.changeReminderNumber(2)
        emails.submitEmailTemplate()
    })

    it('Reduce Number of Notification Emails', ()=> {
        emails.goToEmailsMenu()
        emails.searchByName(EMAIL_TEMPLATE_NAME)
        emails.editEmail(EMAIL_TEMPLATE_NAME)
        emails.changeNoOfExpiryNotifications(1)
        emails.submitEmailTemplate()
    })

    it('Add Nudging Emails', ()=> {
        emails.goToEmailsMenu()
        emails.searchByName(EMAIL_TEMPLATE_NAME)
        emails.editEmail(EMAIL_TEMPLATE_NAME)
        emails.addTwoNudgingEmails()
        emails.submitEmailTemplate()
        
    })

    it('Make Email Template the Default', ()=> {
        emails.goToEmailsMenu()
        emails.searchByName(EMAIL_TEMPLATE_NAME)
        emails.editEmail(EMAIL_TEMPLATE_NAME)
        emails.makeDefault()
        emails.thereIsAlreadyADefaultEmail()
        emails.deselectAsDefault()
        emails.makeDefault()
        emails.thereIsAlreadyADefaultEmail()
        emails.submitEmailTemplate()
        // Additional assertion
        templates.goToTemplateMenu()
        templates.addNewTemplate()
        templates.selectOrg(ORG_NAME)
        templates.checkDefaultEmailTemplate(EMAIL_TEMPLATE_NAME)
    })

    //TEAR DOWN
    it('Delete Email Template', ()=> {
        emails.goToEmailsMenu()
        emails.searchByName(EMAIL_TEMPLATE_NAME)
        emails.deleteEmail(EMAIL_TEMPLATE_NAME)
    })

    it('Restore Default Email Template', ()=> {
        emails.goToEmailsMenu()
        emails.searchByName('ChrisTest_chrome')
        emails.editEmail('ChrisTest_chrome')
        emails.makeDefault()
        emails.submitEmailTemplate()
    })

})