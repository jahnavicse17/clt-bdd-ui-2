module.exports = function () {
    this.Given(/^I am on the "([^"]*)" boa$/, async function(objectKey) {
        //return helpers.loadPage(page.boaPageObjects.boaUrl);
        return helpers.loadPage(page.boa.siteUrls[objectKey]);
    });

    this.When(/^I click on "([^"]*)" boa$/, async function(objectKey) {
        return page.boa.clickElement('LoginBtn');
    });

    this.Then(/^I should see "([^"]*)" boa$/, async function(objectKey) {
        return page.boa.elementExists('LoginHeader');
    });

}