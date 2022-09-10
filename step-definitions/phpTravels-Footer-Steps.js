const {assert} = require("chai");
const { Key } = require("selenium-webdriver");
const { Alert } = require("selenium-webdriver");
const helpers = require("../runtime/helpers");

module.exports = function () 
{
    this.Given(/^I am on the "([^"]*)" phpPage3$/, async function (objectKey) {
        //return helpers.loadPage(page.jootza.url);
        await driver.sleep(3000);
        return helpers.loadPage(page.phpTravelsFooter.siteUrls[objectKey]);
    });

    this.When(/^I click on "([^"]*)" php3$/, async function (objectKey) {
        return page.phpTravelsFooter.clickElement(objectKey);
    });

    this.When(/^I handle cookie alert popups php3$/, async function () {
        return page.phpTravelsFooter.alertPopup();
    });

    this.When(/^I scroll for "([^"]*)" element php3$/ , async function(obj1) {
        //Scrolling and finding the element by using XPath
        page.phpTravelsFooter.scrollElement(obj1);
        await driver.sleep(3000);
        return;
    });

    this.When(/^I enter password "([^"]*)" php3$/, function(objKey1) {
        return page.phpTravelsFooter.inputPassword(objKey1);
    });
    this.When(/^I enter "([^"]*)""([^"]*)" php3$/, function(objKey1,objKey2) {
        return page.phpTravelsFooter.inputElement(objKey1,objKey2);
    });
    this.Then(/^I should see "([^"]*)" php3$/, function (objectKey) {
        return page.phpTravelsFooter.elementExists(objectKey);
    });

    this.When(/^I Enter input "([^"]*)" in "([^"]*)" php3$/,async function (value,obj1) {
        await driver.sleep(2000);
        return page.phpTravelsFooter.needHelpContactUs(value,obj1);
    });

     this.When(/^I Enter "([^"]*)" address in "([^"]*)" php3$/,async function (value,obj1) {
        await driver.sleep(3000);
        return page.phpTravelsFooter.inputEmail(value,obj1);
    });

};
