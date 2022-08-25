const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    siteUrls: {
        boaUrl: 'https://www.bankofamerica.com/'
    },

    elements: {
        LoginBtn: '//button/span[text()="Log In"]',
        LoginHeader: '//div[@id="signin-message"]',
    },
    content: {
        'Adams, Jimmy': 'Adams, Jimmy',
        'ADMIN, CLT': 'ADMIN, CLT'
    },
    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.boa.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.boa.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    }
    
};
