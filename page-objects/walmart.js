const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    siteUrls:
    {
        walmartUrl: 'https://www.walmart.com/'
    },

    elements: {
        SignInMove: '//a//div[text()="Sign In"]',
        SignInBtn: '//div//button[text()="Sign In"]',
        LoginHeader: '//span[@data-url="/account/login"]/span',
    },
    content: {
        'Adams, Jimmy': 'Adams, Jimmy',
        'ADMIN, CLT': 'ADMIN, CLT'
    },
    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.walmart.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.walmart.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    }

};
