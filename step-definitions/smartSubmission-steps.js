module.exports = function () 
{
    this.Given(/^I am on the "([^"]*)" Page$/, function (objectKey) {
        //return helpers.loadPage(page.smartSubmissions.url);
        return helpers.loadPage(page.smartSubmissions.siteUrls[objectKey]);
    });

    this.When(/^I click on "([^"]*)"$/, async function (objectKey) {
        return page.smartSubmissions.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)"$/, async function (objectKey) {
        return page.smartSubmissions.elementExists(objectKey);
    });

    this.When(/^I enter the inputs$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.smartSubmissions.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(3000);
        return;
    });
};