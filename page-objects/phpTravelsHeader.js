const { assert, Assertion } = require("chai");
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

        Languages: '//*[@id="languages"]',
        Languages1: '#languages',
        ListOfLang: '#fadein > header > div > div > div > div > div > div.main-menu-content.w-100 > div > div.d-flex.header-top-bar > div.header-right-action.pt-1.multi_language > div > ul',
        ListOfLang1: '//*[@id="fadein"]/header/div/div/div/div/div/div[2]/div/div[2]/div[1]/div/ul',
        RussianLang: '//ul/li[2]/a/span',
        RussianLangHeader: '//div/h2/strong[text()=" Давайте забронируем вашу следующую поездку!"]',

        Currency: '//*[@id="currency"]',
        IndianCurrency: '//a[@href="https://phptravels.net/currency-INR"]',
        CurrencyHeader: '//h2/strong[text()=" Let’s book your next trip!"]',

        HeaderText: '//*[@id="fadein"]/section[1]/div/div/div/div/div[2]/div[1]/h2',
        //HeaderText: '#fadein > section.hero-wrappe > div > div > div > div > div.section-tab.fade-in > div.d-none.d-sm-block.d-lg-block.d-xl-block > h2',

    },

    content: {
        'Adams, Jimmy': 'Adams, Jimmy',
        'ADMIN1, CLT': 'ADMIN1, CLT',
        Russian: "Russian",
    },

    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.phpTravelsHeader.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    selectDropDownByText: async function (optionName, obj1) {
        // eslint-disable-next-line no-console
        var selector1 = page.phpTravelsHeader.elements[obj1];
        console.log("Lang value: " + optionName);
        //driver.findElement(By.xpath(selector1)).click();
        await driver.sleep(3000);
        var elementSelector = page.phpTravelsHeader.elements['ListOfLang'];
        await driver.sleep(3000);
        var optionName = page.phpTravelsHeader.content['Russian'];
       //return helpers.selectDropdownValueByVisibleText(elementSelector,"Russian");
        return helpers.selectDropdownValueByVisibleText(elementSelector, optionName);

    },

    scrollElement: async function (obj1) {
        await driver.sleep(3000);
        var selector = page.phpTravelsHeader.elements[obj1];
        return helpers.scrollToElement(driver.findElement(By.xpath(selector)));

    },

    alertPopup: async function () {
        // eslint-disable-next-line no-console
        /*driver.switchTo().alert().accept(); //Window to Alert
        driver.switchTo().window(driver.getWindowHandle()); // Alert to Window*/
        driver.findElement(By.xpath("//*[text()='Got It']")).click();
        await driver.sleep(5000);
    },

    inputUserName: async function (val) {
        var selector = page.phpTravelsHeader.elements['username'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },

    inputPassword: async function (val) {
        var selector = page.phpTravelsHeader.elements['password'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputElement: async function (name, val) {
        var selector = page.phpTravelsHeader.elements[name];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
    },

    inputEmail: async function (value, obj1) {
        var selector = page.phpTravelsHeader.elements[obj1];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.phpTravelsHeader.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },

    elementExists1: async function (obj1, obj2, obj3, obj4) {
        // eslint-disable-next-line no-console
        var selector = page.phpTravelsHeader.elements[obj1, obj2, obj3, obj4];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },

    elementExists2: function (obj1) {
        // eslint-disable-next-line no-console
        var selector = this.elements[obj1];
        //var selector = page.phpTravelsHeader.elements[obj1];
        /*driver.findElement(By.css(selector)).getText().then(async function (text1){
            assert.equal("pb-1",text1);
    } */
       driver.findElement(By.xpath(selector)).getAttribute('class').then(async function (text1)
       {
            //textOfElement = text1;
            await console.log("Value: "+text1);
            //var str="Let’s book1 your next trip!";
            var str1="pb-1";
            assert.equal(str1,text1);
        },async function (err1){
            await console.log('ERROR: ' + err1);    
        });
        //console.log("Value: "+result);
        //assert.equal("Let’s book your next trip!",result);
       
       //var str = helpers.getAttributeValue(selector, "class");
       
       //await driver.sleep(5000);        
        //assert.equal(" Let’s book your next trip!", sel1.getText());
        //await driver.sleep(3000);
        //var textToMatch = page.phpTravelsHeader.elements[''];
        //return helpers.getAttributeValue(selector, "classkkkk");
        
    }
};





