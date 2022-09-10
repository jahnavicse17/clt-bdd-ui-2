const { assert } = require("chai");
const { By } = require("selenium-webdriver");
const { Alert } = require("selenium-webdriver");
const { clearCookies } = require("../runtime/helpers");
const helpers = require("../runtime/helpers");
/*const ps=require("prompt-sync");
const prompt=ps();  */

/* eslint-disable no-undef */
module.exports = {
    
    siteUrls: {
        PHPTravels: 'https://www.phptravels.net/'
        
    },

    elements: {
        PHPTravelsLogo: '//div[@class="logo"]/a/img',

        Blog: '//ul[@class="nav nav-tabs gap-2 cms-pages"]//strong[text()="Blog"]',
        ViewMore: '//section//div[@class="col-lg-12"]//button[@id="loadMore"]',
        Email1: '/html/body/div[3]/div[2]/section[4]/div/div/div[2]/div/div/div/div/input',
        Email: '//section//label/following-sibling::div/input[@id="exampleInputEmail1"]',
        subscribeBtn: '//form[@role="search"]/following-sibling::button[@id="email_subscribe"]',
        withoutEmailErr: '//a[@class="newstext waves-effect"]/div[text()="Please add email!"]',
        invalidEmailErr: '//a[@class="newstext waves-effect"]/div[text()="Please add correct email!"]',
        existingEmailErr: '//a[@class="newstext waves-effect"]//div[text()="Email exist"]',
        subscribedMessage: '//a[@class="newstext waves-effect"]//div[text()="Thank you for subscription"]',

        Offers: '//ul[@class="nav nav-tabs gap-2 cms-pages"]//strong[text()="Offers"]',
        AboutUs: '//li/a/small[text()="About Us"]',
        TermsOfUse: '//li/a/small[text()="Terms of Use"]',
        TermsOfUseHeader: '//div/h3[@class="title stroke-shape"]',
        FAQ: '//li/a/small[text()="FAQ"]',
        FAQHeader: '//div/h3[@class="title stroke-shape"]',
        HowToBook: '//li/a/small[text()="How to Book"]',
        HowToBookHeader: '//div/h3[@class="title stroke-shape"]',

    },

    content: {
        'Adams, Jimmy': 'Adams, Jimmy',
        'ADMIN1, CLT': 'ADMIN1, CLT'
    },

    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.phpTravelsNavigational.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).click();
    },

    alertPopup: async function () {
        // eslint-disable-next-line no-console
        /*driver.switchTo().alert().accept(); //Window to Alert
        driver.switchTo().window(driver.getWindowHandle()); // Alert to Window*/
        driver.findElement(By.xpath("//*[text()='Got It']")).click();
        await driver.sleep(5000);
        /*const alert= driver.switchTo().alert();
        var cookie = alert.getText();
        console.log("Alert Text: "+cookie);
        if(cookie=='Got It')
        {
            alert.click();
            alert.accept(); alert.dismiss();
        } */
    },    
    
    scrollElement: async function (obj1) {
         await driver.sleep(3000);
        var selector = page.phpTravelsNavigational.elements[obj1];        
        return helpers.scrollToElement(driver.findElement(By.xpath(selector)));

    },

    inputUserName: async function (val) {
        var selector = page.phpTravelsNavigational.elements['username'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },

    inputPassword: async function (val) {
        var selector = page.phpTravelsNavigational.elements['password'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputElement: async function (name, val) {
        var selector = page.phpTravelsNavigational.elements[name]; 
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
    },

    inputEmail: async function (value, obj1) {
        var selector = page.phpTravelsNavigational.elements[obj1];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.phpTravelsNavigational.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },

    elementExists1: async function (obj1,obj2,obj3,obj4) {
        // eslint-disable-next-line no-console
        var selector = page.phpTravelsNavigational.elements[obj1,obj2,obj3,obj4];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    }
};
