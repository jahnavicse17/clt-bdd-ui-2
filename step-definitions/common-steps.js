module.exports = function () {

    this.Given(/^I am on the "([^"]*)" Page$/, function (objectKey) {
        return helpers.loadPage(page.pageObjects.siteUrls[objectKey]);
    });

    this.When(/^I search for "([^"]*)" in the "([^"]*)"$/, function (val,objectKey) {
        page.pageObjects.inputElementAP(val,objectKey); 
    });
    
    this.When(/^I scrolldown to "([^"]*)"$/, async function (objectKey) {
        page.pageObjects.scrollToElement1(objectKey);
        await driver.sleep(3000);
        return;
    });
    
    this.When(/^I enter "([^"]*)" in the "([^"]*)"$/, function (value,objectKey) {
        page.pageObjects.inputEmailforNewsLet(value,objectKey);
        });




    this.When(/^I enter filepath in the "([^"]*)" and click "([^"]*)" to see "([^"]*)"$/,async function (objectKey1,objectKey2,objectKey3) {
       return page.pageObjects.chooseFileUpload(objectKey1,objectKey2,objectKey3);
        });




    this.Then(/^I should see "([^"]*)"$/, async function (objectKey) {
         await driver.sleep(2000);
        return page.pageObjects.elementExists(objectKey);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.pageObjects.clickElement(objectKey);
    });

    this.When(/^I click after a wait on "([^"]*)"$/, async function (objectKey) {
        var selector = page.pageObjects.elements[objectKey];
        console.log("Send Button function entered");
        await driver.wait(until.elementsLocated(By.xpath(selector)), 10000);
        driver.findElement(By.xpath(selector)).click();
    });

    this.When(/^I hover on "([^"]*)" to go to "([^"]*)"$/, function (objectKey,textval) {
        return page.pageObjects.hoverElement(objectKey,textval);
    });

    this.When(/^I click on after a wait on "([^"]*)"$/, async function (objectKey) {
        await driver.sleep(25000);
        return page.pageObjects.clickElement(objectKey);
    });

    this.When(/^I click on "([^"]*)" I should see a new window with "([^"]*)"$/, async function (objectKey1,objectKey2) {
        await driver.sleep(5000);
        return page.pageObjects.verifyNewTabOpened(objectKey1,objectKey2);
    });

    this.When(/^I enter the inputs$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.pageObjects.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(3000);
        return;
    });


    this.When(/^I enter "([^"]*)""([^"]*)""([^"]*)""([^"]*)""([^"]*)""([^"]*)"$/, async function (objectKey1,objectKey2,objectKey3,objectKey4,objectKey5,objectKey6) {
        if (objectKey1 == 'SSFname'){
            return page.pageObjects.inputElement1(objectKey1,objectKey2,objectKey3,objectKey4,objectKey5,objectKey6);
        }
        await driver.sleep(3000);
        return page.pageObjects.inputElement2(objectKey1,objectKey2,objectKey3,objectKey4,objectKey5,objectKey6);
    });

    this.Then(/^I should be able to see "([^"]*)"$/, async function (objectKey) {
        if(objectKey == 'SSErrorMessage5'){
            await driver.sleep(2000);
            return page.pageObjects.elementExists1();
        }
        await driver.sleep(5000);
        return page.pageObjects.elementExists(objectKey);
    });

    this.Then(/^I verify "([^"]*)"$/, function (objectKey) {
        return page.pageObjects.verifyEmailLink(objectKey);
    });


};