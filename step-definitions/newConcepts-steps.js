const { assert } = require("chai");
const { Key } = require("selenium-webdriver");
const { Alert } = require("selenium-webdriver");
const helpers = require("../runtime/helpers");

module.exports = function () {
    this.Given(/^I am on the "([^"]*)" portal bdd$/, async function (objectKey) {
        //return helpers.loadPage(page.jootza.url);
        await driver.sleep(3000);
        return helpers.loadPage(page.newConcepts.siteUrls[objectKey]);
    });

    this.When(/^I handle cookie alert popups bdd$/, async function () {
        return page.newConcepts.alertPopup();
    });

    this.When(/^I scroll for "([^"]*)" element bdd$/, async function (obj1) {
        //Scrolling and finding the element by using XPath
        page.newConcepts.scrollElement(obj1);
        await driver.sleep(3000);
        return;
    });

    this.When(/^I am on the "([^"]*)" portal and I click on "([^"]*)" and saved to local folder bdd$/, function (objectKey1, objectKey2) {
        return page.newConcepts.chooseFileDownload(objectKey1, objectKey2);
    });

    /*this.When(/^I click on "([^"]*)" and saved to local folder bdd$/, function (objectKey1) {
        return page.newConcepts.chooseFileDownload(objectKey1);
    });*/

    this.When(/^I hover on "([^"]*)" to go to "([^"]*)" bdd$/, function (objectKey, textval) {
        return page.newConcepts.hoverElement(objectKey, textval);
    });

    this.When(/^I am on the "([^"]*)" and rectified certificate errors bdd$/, async function (objectKey) {
        return page.newConcepts.certErrors(objectKey);
    });

    this.When(/^I did "([^"]*)" bdd$/, async function (objectKey) {
        return page.newConcepts.dragAndDropFile(objectKey);
    });

    this.When(/^I click on "([^"]*)" I should see a new window with "([^"]*)" bdd$/, async function (objectKey1, objectKey2) {
        await driver.sleep(5000);
        return page.newConcepts.verifyNewTabOpened(objectKey1, objectKey2);
    });

    this.When(/^I click on "([^"]*)" I should see a new window popup with "([^"]*)" bdd$/, async function (objectKey1, objectKey2) {
        await driver.sleep(5000);
        return page.newConcepts.verifyNewWindowOpened(objectKey1, objectKey2);
    });

    this.When(/^I enter "([^"]*)" in the "([^"]*)" bdd$/, function (value, objectKey) {
        return page.newConcepts.inputEmailforNewsLet(value, objectKey);
    });

    this.Then(/^I verify "([^"]*)" bdd$/, function (objectKey) {
        return page.newConcepts.verifyEmailLink(objectKey);
    });

    this.Then(/^I selected "([^"]*)" bdd$/, function (objectKey) {
        return page.newConcepts.multiSelectedOptions(objectKey);
    });


    this.When(/^I enter password "([^"]*)" bdd$/, function (objKey1) {
        return page.newConcepts.inputPassword(objKey1);
    });
    this.When(/^I enter "([^"]*)""([^"]*)" bdd$/, function (objKey1, objKey2) {
        return page.newConcepts.inputElement(objKey1, objKey2);
    });
    this.Then(/^I should see "([^"]*)" bdd$/, function (objectKey) {
        return page.newConcepts.elementExists(objectKey);
    });

    this.When(/^I Enter input "([^"]*)" in "([^"]*)" bdd$/, async function (value, obj1) {
        await driver.sleep(2000);
        return page.newConcepts.needHelpContactUs(value, obj1);
    });

    this.When(/^I enter filepath in the "([^"]*)" and click "([^"]*)" to see "([^"]*)" bdd$/, async function (objectKey1, objectKey2, objectKey3) {
        return page.newConcepts.chooseFileUpload(objectKey1, objectKey2, objectKey3);
    });

    this.When(/^I Enter "([^"]*)" address in "([^"]*)" bdd$/, async function (value, obj1) {
        await driver.sleep(3000);
        return page.newConcepts.inputEmail(value, obj1);
    });

};
