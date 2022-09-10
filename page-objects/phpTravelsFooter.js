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

        TravelInfo: '//a[@href="mailto:info@travelagency.com"]',
        ViewMore: '//section//div[@class="col-lg-12"]//button[@id="loadMore"]',
        
        ContactUs: '//li/a[@href="https://phptravels.net/contact"]',
        YourName: '//input[@name="name"]',
        YourEmail: '//input[@name="email"]',
        Message: '//textarea[@name="message"]',
        RobotCheckBox: '//*[@id="recaptcha-anchor"]/div[4]',
        Send: '//button[@id="button"]',
        SuccessMsg: '//div[contains(text()," sent successfully.")]',

        TermsOfUse: '//ul[@class="dropdown-menu-item"]//a[@href="https://phptravels.net/terms-of-use"]',
        TermsOfUseHeader: '//div/h3[@class="title stroke-shape"]',
        FAQ: '//*[@id="fadein"]/div[3]/div[2]/section[11]/div[1]/div[1]/div[2]/ul/li[2]/ul/li[2]/a',
        FAQHeader: '//div/h3[@class="title stroke-shape"]',
        HowToBook: '//*[@id="fadein"]/div[3]/div[2]/section[11]/div[1]/div[1]/div[2]/ul/li[2]/ul/li[4]/a',
        HowToBookHeader: '//div/h3[@class="title stroke-shape"]',
        BecomeSupplier: '//ul[@class="dropdown-menu-item"]//a[@href="https://phptravels.net/become-supplier"]',
        BecomeSupplierHeader: '//div/h3[@class="title stroke-shape"]',
        FindaClaim: '//ul[@class="dropdown-menu-item"]//a[@href="https://phptravels.net/file-a-claim"]',
        FindaClaimHeader: '//div/h3[@class="title stroke-shape"]',
        LastMinuteDeals: '//ul[@class="dropdown-menu-item"]//a[@href="https://phptravels.net/offers"]',
        LastMinuteDealsHeader: '//div/h3[@class="title stroke-shape"]',
        AddYourBusiness: '//ul[@class="dropdown-menu-item"]//a[@href="https://phptravels.net/signup-supplier"]',
        AddYourBusinessHeader: '//div/h3[@class="title stroke-shape"]',
        CareersAndJobs: '//ul[@class="dropdown-menu-item"]//a[@href="https://phptravels.net/careers"]',
        CareersAndJobsHeader: '//div/h3[@class="title stroke-shape"]',
        PHPTravelsV8Link: '//div[@class="text-center"]/a',
        PHPTravelsV8LinkHeader: '//*[@id="PHPTRAVELS"]',
        SocialMedia: '//*[@id="fadein"]/div[3]/div[2]/section[11]/div[1]/div[2]/div[2]/div/ul/li[2]/a/i',
        SocialMediaHeader: '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div[1]/div/div[1]/div/div/span[1]/span',


    



        

    },

    content: {
        'Adams, Jimmy': 'Adams, Jimmy',
        'ADMIN1, CLT': 'ADMIN1, CLT'
    },

    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.phpTravelsFooter.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).click();
    },

    scrollElement: async function (obj1) {
        await driver.sleep(3000);
       var selector = page.phpTravelsFooter.elements[obj1];        
       return helpers.scrollToElement(driver.findElement(By.xpath(selector)));

   },

    alertPopup: async function () {
        // eslint-disable-next-line no-console
        /*driver.switchTo().alert().accept(); //Window to Alert
        driver.switchTo().window(driver.getWindowHandle()); // Alert to Window*/
        driver.findElement(By.xpath("//*[text()='Got It']")).click();
        await driver.sleep(3000);
    },    
    
       inputUserName: async function (val) {
        var selector = page.phpTravelsFooter.elements['username'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },

    inputPassword: async function (val) {
        var selector = page.phpTravelsFooter.elements['password'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputElement: async function (name, val) {
        var selector = page.phpTravelsFooter.elements[name]; 
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
    },

    inputEmail: async function (value, obj1) {
        var selector = page.phpTravelsFooter.elements[obj1];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.phpTravelsFooter.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },

    elementExists1: async function (obj1,obj2,obj3,obj4) {
        // eslint-disable-next-line no-console
        var selector = page.phpTravelsFooter.elements[obj1,obj2,obj3,obj4];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },

    needHelpContactUs: async function (value, obj1) {
        //await driver.sleep(3000);
        console.log("Contact us started")
        var selector = page.phpTravelsFooter.elements[obj1];
        //driver.findElement(By.xpath(selector)).clear();
        driver.findElement(By.xpath(selector)).sendKeys(value);
        console.log("Contact us after value")
        await driver.sleep(2000);
    },
};





