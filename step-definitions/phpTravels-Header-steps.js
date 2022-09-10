const {assert} = require("chai");
const { Key } = require("selenium-webdriver");
const { Alert } = require("selenium-webdriver");
const helpers = require("../runtime/helpers");

module.exports = function () 
{
    this.Given(/^I am on the "([^"]*)" phpPage2$/, async function (objectKey) {
        //return helpers.loadPage(page.jootza.url);
        await driver.sleep(3000);
        return helpers.loadPage(page.phpTravelsHeader.siteUrls[objectKey]);
    });

    this.When(/^I click on "([^"]*)" php2$/, async function (objectKey) {
        return page.phpTravelsHeader.clickElement(objectKey);
    });

    this.When(/^I selected "([^"]*)" from "([^"]*)" dropdown php2$/, async function (optionName, obj1) {
        return page.phpTravelsHeader.selectDropDownByText(optionName,obj1);
    });

    this.When(/^I handle cookie alert popups php2$/, async function () {
        return page.phpTravelsHeader.alertPopup();
    });

    this.When(/^I scroll for "([^"]*)" element php2$/ , async function(obj1) {
        //Scrolling and finding the element by using XPath
        page.phpTravelsHeader.scrollElement(obj1);
        await driver.sleep(3000);
        return;
    });

    this.When(/^I enter password "([^"]*)" php2$/, function(objKey1) {
        return page.phpTravelsHeader.inputPassword(objKey1);
    });
    this.When(/^I enter "([^"]*)""([^"]*)" php2$/, function(objKey1,objKey2) {
        return page.phpTravelsHeader.inputElement(objKey1,objKey2);
    });
    this.Then(/^I should see "([^"]*)" php2$/, function (objectKey) {
        return page.phpTravelsHeader.elementExists(objectKey);
    });

    this.Then(/^I should see "([^"]*)" php21$/, function (obj1) {
        return page.phpTravelsHeader.elementExists2(obj1);
    });

    this.Given(/^I am logged on to the Jootza portal as "([^"]*)""([^"]*)" php2$/, function (username,password) {
        return page.phpTravelsHeader.loginPortal(username,password);
    });

     this.When(/^I Enter "([^"]*)" address in "([^"]*)" php2$/,async function (value,obj1) {
        await driver.sleep(3000);
        return page.phpTravelsHeader.inputEmail(value,obj1);
    });

};
