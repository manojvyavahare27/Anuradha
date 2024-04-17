class AddPIP
{
    constructor(page)
    {
        this.page=page
        this.dropdown_PIPTitle=page.locator("xpath=//div[@aria-labelledby='mui-component-select-title']")
        this.txtbox_PIPFamilyName=page.getByTestId('Family Name')
        this.txtbox_PIPGivenName=page.getByTestId('Given Name')
        this.txtbox_PIPMiddleName=page.getByTestId('Middle Name(s)')
        this.calender_PIPBornDate=page.getByTestId('Born').getByPlaceholder('dd/mm/yyyy')
        this.dropdown_PIPEthnicity=page.locator("xpath=//div[@aria-labelledby='mui-component-select-ethnicity']")
        this.dropdown_PIPOccupation=page.locator("xpath=//div[@aria-labelledby='mui-component-select-occupation']")
        this.txtbox_PIPMobile=page.getByTestId('Mobile')
        this.txtbox_PIPEmail=page.getByTestId('Email')
        this.dropdown_PIPRelation=page.locator("xpath=//div[@aria-labelledby='mui-component-select-relationship']")                                     
        this.dropdownPIPNextOfkin=page.locator("xpath=//div[@aria-labelledby='mui-component-select-nextOfKin']")
        this.dropdownPIPFamilyAwareOfIllness=page.locator("xpath=//div[@aria-labelledby='mui-component-select-familyAwareOfIllness']")
        this.dropdownPIPIdentifierType=page.locator("xpath=//div[@aria-labelledby='mui-component-select-identifierType']")
        this.txtboxPIPIdentifier=page.getByTestId('Identifier Number')
        this.txtbox_PIPEnternalProf=page.getByTestId('externalProfessional').getByLabel('External Professional')
        this.txtbox_PIPProfessionalTitle=page.getByTestId('Professional Title')
        this.dropdown_PIPReceivePatientLetter=page.locator("xpath=//div[@aria-labelledby='mui-component-select-receivePatientLetter']")
        this.dropdown_PIPReceiveAppointmentLtr=page.locator("xpath=//div[@aria-labelledby='mui-component-select-receiveAppointmentLetters']")
        //this.dropdown_PIPPrintPartnerdetailsOnReg=page.getByTestId('Print Partner Details On Birth Registration Form').getByRole('button', { name: 'No' })
        this.dropdown_PIPPrintPartnerdetailsOnReg=page.locator("xpath=//div[@aria-labelledby='mui-component-select-partnerDetailsOnBirth']")
        this.chkbox_SendPatientTextEmail=page.getByRole('checkbox', { name: 'Send Patient Text/Email' })
        this.chkbox_PIPIsReferrer=page.getByRole('checkbox', { name: 'Is Referrer' })
        this.txtbox_PIPNotes=page.getByLabel('Notes', { exact: true })

        this.chkbox_AssistingInPartner=page.getByRole('checkbox', { name: 'Assisting in partner\'s care and treatments' })
        this.chkbox_HelpingPatients=page.getByRole('checkbox', { name: 'Helping patients and their families understanding the implant process' })
        this.chkbox_BeingPhotographed=page.getByRole('checkbox', { name: 'Being photographed or videoed for on-going training and teaching purposes' })
        this.chkbox_GeneralPublicity=page.getByRole('checkbox', { name: 'For use on the University Hospital Southampton website and general publicity' })
        this.btnSavePIP=page.getByTestId('Save')


    }
    async ClickOnSavePIP()
    {
        await this.btnSavePIP.click()
    }
    async checkGeneralPublicity()
    {
        await this.chkbox_GeneralPublicity.click()
    }
    async checkBeingPhotographed()
    {
        await this.chkbox_BeingPhotographed.click()
    }
    async checkHelpingPatients()
    {
        await this.chkbox_HelpingPatients.click()
    }
    async checkcAssistingInPartner()
    {
        await this.chkbox_AssistingInPartner.click()
    }
    async enterPIPNotes()
    {
        await this.txtbox_PIPNotes.type("Added for testing")
    }
    async checkIsReferrer()
    {
        await this.chkbox_PIPIsReferrer.click()
    }
    async checkSendPatientTextEmail()
    {
        await this.chkbox_SendPatientTextEmail.click()
    }
    async selectPIPPartnerDetailsOnRegForm()
    {
        await this.dropdown_PIPPrintPartnerdetailsOnReg.click()
        await this.page.getByRole('option', { name: 'No' }).click()
    }
    async selectPIPReceiveAppointmentLetter()
    {
        await this.dropdown_PIPReceiveAppointmentLtr.click()
        await this.page.getByRole('option', { name: 'No' }).click()
    }
    async selectPIPReceivePatientLetter()
    {
        await this.dropdown_PIPReceivePatientLetter.click()
        await this.page.getByRole('option', { name: 'No' }).click()
    }
    async enterProfessionalTitle(name)
    {
        await this.txtbox_PIPProfessionalTitle.type(name)
    }

    async enterExternalProfessional(name)
    {
        await this.txtbox_PIPEnternalProf.type(name)
    }
    async enterPIPIdentifier()
    {
        await this.txtboxPIPIdentifier.type("AJAPV1448P")
    }
    async selectPIPIdentifierType()
    {
        await this.dropdownPIPIdentifierType.click()
        await this.page.getByRole('option', { name: 'PAN Card' }).click()
    }

    async SelectPIPFamilyAwareOfIllness()
    {
        await this.dropdownPIPFamilyAwareOfIllness.click()
        await this.page.getByRole('option', { name: 'Yes' }).click()
    }

    async selectPIPNextOfKin()
    {
        await this.dropdownPIPNextOfkin.click()
        await this.page.getByRole('option', { name: 'No' }).click()
    }
    async selectPIPRelation()
    {
        await this.dropdown_PIPRelation.click()
        await this.page.getByRole('option', { name: 'Brother' }).click()
    }
    async enterPIPEmailId(name)
    {
        await this.txtbox_PIPEmail.type(name)
    }
    async enterPIPMobileNumber(name)
    {
        await this.txtbox_PIPMobile.type(name)
    }
    async selectPIPOccupation()
    {
        await this.dropdown_PIPOccupation.click()
        await this.page.getByRole('option', { name: 'Trainer', exact: true }).click()
    }
    async selecrPIPEthnicity()
    {
        await this.dropdown_PIPEthnicity.click()
        await this.page.getByRole('option', { name: 'Indian', exact: true }).click()
    }
    async selectPIPBornDate()
    {
        await this.calender_PIPBornDate.type("31/12/1992")
    }
    async enterPIPMiddleName(pip_middlename)
    {
        await this.txtbox_PIPMiddleName.type(pip_middlename)
    }
    async enterPIPGivenName(pip_surname)
    {
        await this.txtbox_PIPGivenName.type(pip_surname)
    }
    async enterPIPFamilyName(pip_firstname)
    {
        await this.txtbox_PIPFamilyName.type(pip_firstname)
    }
    async selectPIPTitle(pip_title)
    {
        await this.dropdown_PIPTitle.click()
        await this.page.getByRole('option', { name: pip_title, exact: true }).click()
    }
}
module.exports=AddPIP