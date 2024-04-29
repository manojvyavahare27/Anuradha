class RecommendationAddED
{
    constructor(page)
    {
        this.page=page
        this.btnexpandsAddedRecommendation=page.locator("xpath=//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-14x3gsq']//*[name()='svg']")
    }
    async clickOnExpandRecommendation()
    {
        await this.btnexpandsAddedRecommendation.click()
    }


}
module.exports=RecommendationAddED