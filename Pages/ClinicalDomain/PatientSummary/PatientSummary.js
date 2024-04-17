class PatientSummary
{
    // Manoj Vyavahare
    constructor(page)
    {
        this.page=page
        //All Categories icon from left hand side on patient Summary page
        buttonMenuCategory=page.locator("xpath=//button[@aria-label='Menu Button']//*[name()='svg']")
        iconDiagnosisCategory=page.locator("xpath=//img[@alt='Diagnosis Image Avatar']")
        iconDocumentCategory=page.locator("xpath=//img[@alt='Documents Image Avatar']")
        iconPatientDetailsCategory=page.locator("xpath=//img[@alt='Patient Details Image Avatar']")
        iconAllergyCategory=page.locator("xpath=//img[@alt='Allergies Image Avatar']")
        iconConditionCategory=page.locator("xpath=//img[@alt='Conditions Image Avatar']")
        iconMedicationCategory=page.locator("xpath=//img[@alt='Medications Image Avatar']")
        iconInvestigationCategory=page.locator("xpath=//img[@alt='Investigations Image Avatar']")
        iconDeviceCategory=page.locator("xpath=//img[@alt='Devices Image Avatar']")
        iconExaminationsCategory=page.locator("xpath=//img[@alt='Examinations Image Avatar']")
        iconPhysicalSignCategory=page.locator("xpath=//img[@alt='Physical Signs Image Avatar']")
        iconLifestyleCategory=page.locator("xpath=//img[@alt='Lifestyle Image Avatar']")
        iconSocialCircumstancesCategory=page.locator("xpath=//img[@alt='Social Circumstances Image Avatar']")
        iconRiskFactorCategory=page.locator("xpath=//img[@alt='Risk Factor Image Avatar']")
        iconTestToolCategory=page.locator("xpath=//img[@alt='Test Tools Image Avatar']")
        iconPromsCategory=page.locator("xpath=//img[@alt='PROMs Image Avatar']")
        iconPatientScanCategory=page.locator("xpath=//img[@alt='Patient Scans Image Avatar']")
        iconPregnanciesCategory=page.locator("xpath=//img[@alt='Pregnancies Image Avatar']")
        iconOutcomeCategory=page.locator("xpath=//img[@alt='Outcomes Image Avatar']")
        iconInterpretationsCategory=page.locator("xpath=//img[@alt='Interpretations Image Avatar']")
        iconRecommendationsCategory=page.locator("xpath=//img[@alt='Recommendations Image Avatar']")
        iconCommunicationCategory=page.locator("xpath=//img[@alt='Communication Image Avatar']")
        iconOverviewCategory=page.locator("xpath=//img[@alt='Overview Image Avatar']")

        //Top Icons on Patient Summary page
        topIconHome=page.locator("xpath=//div[contains(text(),'Home')]")
        topIconMyArea=page.locator("xpath=//div[contains(text(),'My Area')]")
        topIconCategories=page.locator("xpath=//div[contains(text(),'Categories')]")
        topIconModules=page.locator("xpath=//div[contains(text(),'Modules')]")
        topIconView=page.locator("xpath=//div[contains(text(),'View')]")
        topIconAddTo=page.locator("xpath=//div[contains(text(),'Add To')]")
        topIconPrint=page.locator("xpath=//div[contains(text(),'Print')]")

        //Setting Button for customizable view
        buttonSetting=page.locator("xpath=//button[@aria-label='settingButton']//*[name()='svg']")
        buttonCustomisableView=page.locator("xpath=//li[normalize-space()='Customizable View']")
        

    }
}