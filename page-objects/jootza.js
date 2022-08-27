const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'http://www.jootza.com/login',

    elements: {
        Login: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a',
        LoginHeader: '//mdb-root//app-login/header/section//div[1]/h2/strong',
        username: by.name('username'),
        password: by.name('password'),
        LoginBtn: '//*[@id="btn-login"]/button',
        errorMessage: '//*[@id="toast-container"]/mdb-toast-component/div',
        PasswordVal: 'demo1234',
        submitBtn: '',
        approverName: '//label[span[text()="Approver"]]/preceding-sibling::input',
        //approverName : '//*[@id="info"]/div[1]/div[3]/div/input'
        RecordTimeHeader: '//mdb-root//app-record//div[1]/h4'
    },
    content : {
        'Adams, Jimmy': 'Adams, Jimmy',
        'ADMIN1, CLT' : 'ADMIN1, CLT'
    },
    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.jootza.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).click();
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
    loginPortal: async function(username,password) {
        await helpers.loadPage(page.jootza.url);
        await this.inputUserName(username)
        await this.inputPassword(password)
      //await this.inputPassword(page.jootza.elements['PasswordVal'])
        await this.clickElement('LoginBtn')
        await driver.sleep(5000); 
        return;
    }, 
    verifyApproverName: async function(val) {
        var selector = page.jootza.elements['approverName'];
        var result = await driver.findElement(By.xpath(selector)).getAttribute("value");
        assert.equal(page.jootza.content[val], result);
    }
};
