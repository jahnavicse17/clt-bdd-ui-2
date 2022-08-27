module.exports = function () 
{
    this.Given(/^I am on the "([^"]*)" ssPage$/, function (objectKey) {
        //return helpers.loadPage(page.smartSubmissions.url);
        return helpers.loadPage(page.smartSubmissions.siteUrls[objectKey]);
    });

    this.When(/^I click on "([^"]*)" ss$/, async function (objectKey) {
        return page.smartSubmissions.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)" ss$/, async function (objectKey) {
        return page.smartSubmissions.elementExists(objectKey);
    });

    this.Then(/^I should see "([^"]*)""([^"]*)""([^"]*)""([^"]*)""([^"]*)""([^"]*)""([^"]*)" ss1$/, async function (objKey1,objKey2,objKey3,objKey4,objKey5,objKey6,objKey7) {
        return page.smartSubmissions.elementExists1(objKey1,objKey2,objKey3,objKey4,objKey5,objKey6,objKey7);
    });

    this.When(/^I enter the inputs "([^"]*)""([^"]*)""([^"]*)""([^"]*)""([^"]*)""([^"]*)""([^"]*)""([^"]*)" ss1$/, async function(objKey1,objKey2,objKey3,objKey4,objKey5,objKey6,objKey7,objKey8) {
        return page.smartSubmissions.inputElement1(objKey1,objKey2,objKey3,objKey4,objKey5,objKey6,objKey7,objKey8);
    });

    this.When(/^I enter the inputs ss$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.smartSubmissions.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(3000);
        return;
    });


    this.When(/^there are no inputs entered ss$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.smartSubmissions.inputElement(fields[i][0], fields[i][1]);
        }; 
        await driver.sleep(3000);
        return;
    });
};