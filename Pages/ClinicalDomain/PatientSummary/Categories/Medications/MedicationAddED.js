class MedicationAddED
{
    constructor(page)
    {
        this.page=page
        //Expand extra details
        this.btnexpands=page.locator("xpath=//div[@class='MuiGrid-root MuiGrid-container css-1bsa7z6']//button[@aria-label='cellmaAccordionIcon']//*[name()='svg']//*[name()='path' and contains(@d,'M15.08 9.5')]")
        
        //Add Extra Details pop up locators
        
        this.dropdownSubCategory=page.locator("xpath=//input[@id='Sub Category']")
        this.txtboxDose=page.locator("xpath=//input[@aria-label='Dose']")
        this.dropdownFrequency=page.locator("xpath=//input[@id='Frequency']")
        this.dropdownRuote=page.locator("xpath=//input[@id='Route']")
        this.txtboxDays=page.locator("xpath=//input[@aria-label='Days']")
        this.dropdownSite=page.locator("xpath=//input[@id='Site']")
        this.dropdownPrescribeBy=page.locator("xpath=//input[@id='PrescribedBy']")
        this.txtboxMethod=page.locator("xpath=//input[@aria-label='Method']")
        this.calendarStartDate=page.locator("xpath=//input[@name='startDate']")
        this.calendarStopDate=page.locator("xpath=//input[@id='StopDate']")
        this.dropdownSideEffect=page.locator("xpath=//input[@id='SideEffect']")
        this.dropdownStatus=page.locator("xpath=//input[@id='Status']")
        this.dropdownIndication=page.locator("xpath=//input[@id='Indication']")
        this.dropdownStopReason=page.locator("xpath=//input[@id='StoppedReason']")
        this.dropdownPGDPSD=page.locator("xpath=//input[@id='PGD/PSD']")
        this.dropdownMedicationGradeForAdministrator=page.locator("xpath=//label[@id='User grades that can administator medication-MAED-label']")
        this.dropdownMaxReffills=page.locator("xpath=//input[@id='Max Reffills']")
        this.txtboxQuantity=page.locator("xpath=//input[@aria-label='Quantity']")
        this.txtboxUnit=page.locator("xpath=//input[@aria-label='Unit']")
        this.dropdownCurrentLocation=page.locator("xpath=//input[@id='Current Location']")
        this.txtboxLinkToDiagnosis=page.locator("xpath=//input[@id='Link to Diagnosis']")
        this.dropdownAdherent=page.locator("xpath=//input[@id='Adherent']")
        this.dropdownEndoserment=page.locator("xpath=//input[@id='Endoserment']")
        this.dropdownForCondition=page.locator("xpath=//input[@id='For Condition']")
        this.dropdownPriceCheckQuantity=page.locator("xpath=//input[@id='Price check quantity']")
        this.txtboxTotalCost=page.locator("xpath=//input[@id='Total Cost']")
        //Checkboxes
        this.checkboxPrescriptionandSupply=page.locator("xpath=//span[@data-testid='Prescription and supply']")
        this.checkboxSupply=page.locator("xpath=//span[@data-testid='Supply']")
        this.checkboxRepeatable=page.locator("xpath=//span[@data-testid='Repeatable']")
        this.checkboxPrivateRecord=page.locator("xpath=//span[@data-testid='Private Record']")
        this.checkboxSuitableforHomeDelivery=page.locator("xpath=//span[@data-testid='Suitable for Home Delivery']")
        this.checkboxSetasDefault=page.locator("xpath=//span[@data-testid='Set as Default']")
        this.checkboxAddtoFavourites=page.locator("xpath=//span[@data-testid='Add to favourites']")
        this.checkboxAddtoOrderSet=page.locator("xpath=//span[@data-testid='Add to order set']")
        this.checkboxAddtoPrescription=page.locator("xpath=//span[@data-testid='Add to Prescription']")

        this.btnSave=page.locator("xpath=//button[@data-testid='Save']")
        this.btnSaveandCreatePrescription=page.locator("xpath=//div[contains(text(),'Save and Create Prescription')]")

        //Setting Button
       this.btnSetting=page.locator("xpath=//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-d5btle']//*[name()='svg']//*[name()='path' and contains(@d,'M19.43 12.')]")
        this.linkCustomisableView=page.locator("xpath=//li[@data-testid='customizableView']")
        this.linkdefaultView=page.locator("xpath=//li[@data-testid='defaultView']")

        //Variable Dose Regime
        this.linkVariableDoseRegime=page.locator("xpath=//a[normalize-space()='Variable dose regime']")
        this.txtboxDose=page.locator("xpath=//input[@aria-label='Dose']")
        this.dropdownFrequency=page.getByTestId('frequency').getByLabel('Frequency')

        //Top icons on Pop up
        this.iconAddDiagnosis=page.locator("xpath=//img[@alt='addDiagnosis']")
        this.iconStandardDosing=page.locator("xpath=//img[@alt='standardDosing']")
        this.iconUploadFile=page.locator("xpath=//img[@alt='uploadFile']")
        this.iconFolder=page.locator("xpath=//img[@alt='folder']")
        this.iconAddTask=page.locator("xpath=//img[@alt='addTask']")
        this.iconAddToWorkList=page.locator("xpath=//img[@alt='addToWorklist']")
        this.iconAddPathway=page.locator("xpath=//img[@alt='AddPathway']")
        this.iconAddLink=page.locator("xpath=//img[@alt='LinkAdd']")
        this.buttonClosePopup=page.locator("xpath=//button[@aria-label='cancelIcon'][1]")

    }   
    async expandMedicationSection()
    {
        await this.btnexpands.click()
    }
    async selectSubcategory()
    {
        await this.dropdownSubCategory.click()
        await this.page.getByRole('option', { name: 'Antibacterial' }).click()
    }
    async enterDose(medi_dose)
    {
        await this.txtboxDose.fill("")
        await this.txtboxDose.type(medi_dose)
    }
    async selectFrequency(medi_frequency)
    {
        await this.dropdownFrequency.click()
        await this.page.getByRole('option', { name: medi_frequency }).click()
        
    }
    async selectRoute(medi_route)
    {
        await this.dropdownRuote.click()
        await this.page.getByRole('option', { name: medi_route }).click()
    }
    async enterDays(medi_duration)
    {
        await this.txtboxDays.fill(medi_duration)
    }
    async enterMethod(medi_method)
    {
        await this.txtboxMethod.fill(medi_method)
    }
    async selectStartEndDate(medi_start_date,medi_stop_date)
    {
        // await this.calendarStartDate.clear()
        // await this.calendarStopDate.clear()
       
        await this.calendarStartDate.fill(medi_start_date)
        await this.calendarStopDate.fill(medi_stop_date)
    }
    async selectSideEffect()
    {
        await this.dropdownSideEffect.click()
    }
    async selectStatus()
    {
        await this.dropdownStatus.fill("")
        await this.dropdownStatus.click()
    }
    async selectIndication()
    {
        await this.dropdownIndication.click()
    }
    async selectStopReason()
    {
        await this.dropdownStopReason.click()
    }
    async selectPGDPSD()
    {
        await this.dropdownPGDPSD.click()
    }
    async selectMedicationGradeForAdministrator()
    {
        await this.dropdownMedicationGradeForAdministrator.click()
    }
    async selectMaxReffills()
    {
        await this.dropdownMaxReffills.click()
    }
    async enterQuantity()
    {
        await this.txtboxQuantity.fill("5")
    }
    async enterUnit()
    {
        await this.txtboxUnit.fill("Tab")
    }
    async selectCurrentLocation()
    {
        await this.dropdownCurrentLocation.click()
    }
    async selectLinkToDiagnosis()
    {
        //await this.txtboxLinkToDiagnosis.click()
        await this.txtboxLinkToDiagnosis.fill("")
    }
    async selectAdherent()
    {
        await this.dropdownAdherent.click()
    }
    async selectendoserment()
    {
        await this.dropdownEndoserment.click()
    }
    async selectForCondition()
    {
        await this.dropdownForCondition.click()
    }
    async selectPriceCheckQuantity()
    {
        await this.dropdownPriceCheckQuantity.click()
    }
    async enterTotalCost()
    {
        await this.txtboxTotalCost.fill("20.00")
    }

}

module.exports=MedicationAddED