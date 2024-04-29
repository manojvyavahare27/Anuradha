class RecommendationsHomepage
{
    // Manoj Vyavahare
    constructor(page)
    {
        this.page=page
        this.txtboxSearchItem=page.locator("xpath=//input[@id=':rj8:']")
        //Add Recommendations
        this.btnAddRecommendation=page.locator("xpath=//button[@data-testid='Add']")
    }
    async searchRecommendation(pacr_category)
    {
        await this.txtboxSearchItem.type(pacr_category)
    }
    async clickonAddRecommendationButton()
    {
        await this.btnAddRecommendation.click()
    }
}
module.exports=RecommendationsHomepage