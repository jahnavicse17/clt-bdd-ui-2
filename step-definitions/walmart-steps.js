const { WebDriver } = require("selenium-webdriver")
const { Driver } = require("selenium-webdriver/chrome")

module.exports = function () {
    this.Given(/^I am on the "([^"]*)" walmart$/, async function(objectKey) {
        //selenium-WebDriver.loadPage("https://www.walmart.com");
        return helpers.loadPage(page.walmart.siteUrls[objectKey]);
    });

    this.When(/^I move on "([^"]*)" walmart$/, async function(objectKey) {
        //selenium-WebDriver.clickElement("xpath for signin link");
        return page.walmart.clickElement('SignInMove');
    });

    this.When(/^I click on "([^"]*)" walmart$/, async function(objectKey) {
        //selenium-WebDriver.clickElement("xpath for signin link");
        return page.walmart.clickElement('SignInBtn');
    });

    this.Then(/^I should see "([^"]*)" walmart$/, async function(objectKey) {
        //selenium-WebDriver.findElement("xpath expression of SignIn Link"); 
        return page.walmart.elementExists('LoginHeader');
    });

}