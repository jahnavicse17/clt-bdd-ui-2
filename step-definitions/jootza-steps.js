const {assert} = require("chai");
const helpers = require("../runtime/helpers");

module.exports = function () 
{
    this.Given(/^I am on the "([^"]*)" portal$/, function (objectKey) {
        return helpers.loadPage(page.jootza.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.jootza.clickElement(objectKey);
    });

    this.When(/^I enter username "([^"]*)"$/ , function(objKey1) {
        return page.jootza.inputUserName(objKey1);
    });

    this.When(/^I enter password "([^"]*)"$/, function(objKey1) {
        return page.jootza.inputPassword(objKey1);
    });
    this.When(/^I enter "([^"]*)""([^"]*)"$/, function(objKey1,objKey2) {
        return page.jootza.inputElement(objKey1,objKey2);
    });
    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.jootza.elementExists(objectKey);
    });

    this.Given(/^I am logged on to the Jootza portal as "([^"]*)""([^"]*)"$/, function (username,password) {
        return page.jootza.loginPortal(username,password);
    });

    this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
        return page.jootza.verifyApproverName(value);
    });
    this.When(/^I enter the inputs for login$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.jootza.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(5000);
        return;
    });


};
