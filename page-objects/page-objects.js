const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    siteUrls: {
        Jootza: 'http://www.jootza.com/login',
        SmartSubmissions: 'https://www.smartsubmissions.com',
        Google: 'www.google.com',
        eBay:'www.ebay.com'
    },

    elements: {
        Register: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a',
        RegisterHeader: '/html/body/mdb-root/main/div/app-signup/header/section/div/div/div/div/div/div/h2/strong',
        Login: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a',
        LoginHeader: '/html/body/mdb-root/main/div/app-login/header/section/div/div/div/div/div/div/div[1]/h2/strong',
        username: by.name('username'), // '//*[@id="login-username relate-pos"]',
        password: by.name('password'), // '//*[@name="username"]',
        LoginBtn: '//*[@id="btn-login"]/button',
        errorMessage: '//*[@id="toast-container"]/mdb-toast-component/div',
        PasswordVal: 'demo1234',
        submitBtn: '',
        approverName : '//*[@id="info"]/div[1]/div[3]/div/input',
        SSLogin: '//*[@id="mainNav"]/div/div/div[2]/ul/li[3]/button',
        
    },
    content : {
        'Adams, Jimmy': 'Adams, Jimmy',
        'ADMIN, CLT' : 'ADMIN, CLT'
    },
    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.jootza.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
    enterUsername: async function() {
        var selector = page.jootza.elements['username'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys('shan')
    },

    enterPassword: async function() {
        var selector = page.jootza.elements['password'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys('test')
    },

    inputUserName: async function(val) {
        var selector = page.jootza.elements['username']; 
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputPassword: async function(val) {
        var selector = page.jootza.elements['password']; 
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputElement: async function(name,val) {
        var selector = page.jootza.elements[name]; 
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    elementExists: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.jootza.elements[objectKey];

        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
    loginPortal: async function(username) {
        await helpers.loadPage(page.jootza.url);
        await this.inputUserName(username)
        await this.inputPassword(page.jootza.elements['PasswordVal'])
        await this.clickElement('LoginBtn')
        await driver.sleep(2000); 
        return;
    },
    verifyApproverName: async function(val) {
        var selector = page.jootza.elements['approverName'];
        var result = await driver.findElement(By.xpath(selector)).getAttribute("value");
        assert.equal(page.jootza.content[val], result);
    }
};
