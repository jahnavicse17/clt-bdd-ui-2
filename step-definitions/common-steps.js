module.exports = function () {

    this.Given(/^I am on the "([^"]*)" portal$/, function (obj) {
        const url = page.pageObjects.siteUrls[obj]
        return helpers.loadPage(url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.pageObjects.clickElement(objectKey);
    });

    this.When(/^I click on "([^"]*)" button$/, function (objectKey) {
        return page.pageObjects.clickElement(objectKey);
    });

    this.When(/^I enter username$/, function () {
        return page.pageObjects.enterUsername();
    });

    this.When(/^I enter password$/, function () {
        return page.pageObjects.enterPassword();
    });

    this.When(/^I enter username "([^"]*)"$/ , function(objKey1) {
        return page.pageObjects.inputUserName(objKey1);
    });

    this.When(/^I enter password "([^"]*)"$/, function(objKey1) {
        return page.pageObjects.inputPassword(objKey1);
    });
    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.pageObjects.elementExists(objectKey);
    });


    this.Given(/^I am logged on to the pageObjects portal as "([^"]*)"$/, function (user) {
        return page.pageObjects.loginPortal(user);
    });

    this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
        return page.pageObjects.verifyApproverName(value);
    });
    this.When(/^I enter the inputs for login$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.pageObjects.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(3000);
        return;
    });


};
