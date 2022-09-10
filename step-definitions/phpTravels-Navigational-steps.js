const {assert} = require("chai");
const { Key } = require("selenium-webdriver");
const { Alert } = require("selenium-webdriver");
const helpers = require("../runtime/helpers");

module.exports = function () 
{
    this.Given(/^I am on the "([^"]*)" phpPage1$/, function (objectKey) {
        //return helpers.loadPage(page.jootza.url);
        return helpers.loadPage(page.phpTravelsNavigational.siteUrls[objectKey]);
    });

    this.When(/^I click on "([^"]*)" php1$/, async function (objectKey) {
        return page.phpTravelsNavigational.clickElement(objectKey);
    });

    this.When(/^I handle cookie alert popups php1$/, async function () {
        return page.phpTravelsNavigational.alertPopup();
    });

    this.When(/^I scroll for "([^"]*)" element php1$/ , async function(obj1) {
        //Scrolling and finding the element by using XPath
        page.phpTravelsNavigational.scrollElement(obj1);
        await driver.sleep(3000);
        return;
    });

    this.When(/^I enter password "([^"]*)" php1$/, function(objKey1) {
        return page.phpTravelsNavigational.inputPassword(objKey1);
    });
    this.When(/^I enter "([^"]*)""([^"]*)" php$/, function(objKey1,objKey2) {
        return page.phpTravelsNavigational.inputElement(objKey1,objKey2);
    });
    this.Then(/^I should see "([^"]*)" php1$/, function (objectKey) {
        return page.phpTravelsNavigational.elementExists(objectKey);
    });

    this.Given(/^I am logged on to the Jootza portal as "([^"]*)""([^"]*)" php1$/, function (username,password) {
        return page.phpTravelsNavigational.loginPortal(username,password);
    });

    this.Then(/^I should see the approver name as "([^"]*)" php1$/, function (value) {
        return page.phpTravelsNavigational.verifyApproverName(value);
    });


    this.When(/^I Enter "([^"]*)" address in "([^"]*)" php1$/,async function (value,obj1) {
        await driver.sleep(3000);
        return page.phpTravelsNavigational.inputEmail(value,obj1);
    });



    this.When(/^I Enter inputs for email address in SubscribetoSecretDeals php1$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.phpTravelsNavigational.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(3000);
        return;
    });
};
