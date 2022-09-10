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

        Flights: '//i[@class="la la-plane mx-1"]/following-sibling::span[text()="flights"]',
        TicketType: '//select[@id="flight_type"]/option[1]',
        OneWay: '//label[@for="one-way"]',
        FlyingFrom: '//input[@id="autocomplete"]',
        JFK: '//*[@id="onereturn"]/div[1]/div/div[1]/div/div/div/div[1]/div/div[1]/div[2]',
        ToDestination: '//input[@id="autocomplete2"]',
        MAA: '//*[@id="onereturn"]/div[1]/div/div[2]/div/div[2]/div/div[1]/div/div[1]/div[2]',
        DepartureDate: '//*[@id="departure"]',
        Passengers: '//*[@id="onereturn"]/div[3]/div/div/div/a/i',
        AdultsPlus: '/html/body/div[3]/div[2]/section[1]/section/div/div/form/div[2]/div[3]/div/div/div/div/div[1]/div/div/div[2]/i',
        AdultsMinus: '/html/body/div[3]/div[2]/section[1]/section/div/div/form/div[2]/div[3]/div/div/div/div/div[1]/div/div/div[1]/i',
        ChildPlus: '/html/body/div[3]/div[2]/section[1]/section/div/div/form/div[2]/div[3]/div/div/div/div/div[2]/div/div/div[2]/i',
        ChildMinus: '/html/body/div[3]/div[2]/section[1]/section/div/div/form/div[2]/div[3]/div/div/div/div/div[2]/div/div/div[1]/i',
        InfantPlus: '/html/body/div[3]/div[2]/section[1]/section/div/div/form/div[2]/div[3]/div/div/div/div/div[3]/div/div/div[2]/i',
        InfantMinus: '/html/body/div[3]/div[2]/section[1]/section/div/div/form/div[2]/div[3]/div/div/div/div/div[3]/div/div/div[1]/i',
        SearchBtn: '//*[@id="flights-search"]/span[1]',
        TotalFlights: '/html/body/div[3]/div[2]/section[1]/div/div/div/div[2]/div/ul/li/a',
        LoginToBook: '/html/body/div[3]/div[2]/main/div/div[2]/section/ul/li[1]/div/form/div/div[2]/div/a/span',
        Adults: '//input[@id="fadults"]',
        Childs: '//input[@id="fchilds"]',
        Infants: '//input[@id="finfant"]',
        FlightHeader: '//h2/strong[text()=" Let’s book your next trip!"]',
        RoundTrip: '//label[@for="round-trip"]',
        ReturnDate: '/html/body/div[3]/div[2]/section[1]/div/div/div/div/div[2]/div[2]/div[1]/form/div[2]/div[2]/div/div[2]/div/div/input',
        BookNow: '/html/body/div[3]/div[2]/main/div/div[2]/section/ul/li[1]/div/form/div/div[2]/div/button/span',
        ModifySearch: '/html/body/div[3]/div[2]/section[1]/div/div/div/div[2]/div/button',
        LAX: '/html/body/div[3]/div[2]/div[1]/div/form/div[2]/div[1]/div/div[1]/div/div/div/div/div[1]/div[2]',
        BLR: '/html/body/div[3]/div[2]/div[1]/div/form/div[2]/div[1]/div/div[2]/div/div[2]/div/div/div[1]/div[2]',
        BackToSearch: '/html/body/div[3]/div[2]/div[2]/a/strong',
        PassengersInModify: '/html/body/div[3]/div[2]/div[1]/div/form/div[2]/div[3]/div/div/div/a/span/span',
        SearchBtnInModify: '/html/body/div[3]/div[2]/div[1]/div/form/div[2]/div[4]/div/button/span[1]/i',

        ViewMore: '//section//div[@class="col-lg-12"]//button[@id="loadMore"]',
        NeedHelpContactUs: '/html/body/div[3]/div[2]/section[8]/div/div/div[1]/a/div[2]/h4',
        NeedHelpContactUs1: '//div[@class="info-content pt-2"]/h4[text()="Need Help? Contact us"]',
        YourName: '//input[@name="name"]',
        YourEmail: '//input[@name="email"]',
        Message: '//textarea[@name="message"]',
        RobotCheckBox: '//*[@id="recaptcha-anchor"]/div[4]',
        Send: '//button[@id="button"]',
        SuccessMsg: '//div[contains(text()," sent successfully.")]',

    },
    content: {
        'Adams, Jimmy': 'Adams, Jimmy',
    },

    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.phpTravelsFlights.elements[objectKey];
        await driver.sleep(2000);
        console.log(" before click element")
        return driver.findElement(By.xpath(selector)).click();
    },

    clickPassenger: async function (obj1) {
        // eslint-disable-next-line no-console
        var selector1 = page.phpTravelsFlights.elements[obj1];
        console.log("Passenger Clicking Started")
        await driver.sleep(2000);
        driver.findElement(By.xpath(selector1)).click();
        await driver.sleep(2000);
        var selector2 = page.phpTravelsFlights.elements['Adults'];
        driver.findElement(By.xpath(selector2)).clear();
        driver.findElement(By.xpath(selector2)).sendKeys("1");
        driver.findElement(By.xpath(selector1)).click();
    },

    clickPassengerWithChild: async function (obj1, obj2, obj3) {
        // eslint-disable-next-line no-console
        var selector1 = page.phpTravelsFlights.elements[obj1];
        console.log("Passenger Clicking Started")
        await driver.sleep(2000);
        driver.findElement(By.xpath(selector1)).click();
        var selector2 = page.phpTravelsFlights.elements[obj2];
        console.log("Adult Clicking Started")
        await driver.sleep(2000);
        driver.findElement(By.xpath(selector2)).clear();
        driver.findElement(By.xpath(selector2)).sendKeys("2");
        var selector3 = page.phpTravelsFlights.elements[obj3];
        console.log("Child Clicking Started")
        await driver.sleep(2000);
        driver.findElement(By.xpath(selector3)).clear();
        driver.findElement(By.xpath(selector3)).sendKeys("3");
        await driver.sleep(2000);
        driver.findElement(By.xpath(selector1)).click();
        await driver.sleep(2000);
    },

    clickPassengerWithOutInput: async function (obj1) {
        // eslint-disable-next-line no-console
        var selector1 = page.phpTravelsFlights.elements[obj1];
        console.log("Passenger Clicking Started")
        await driver.sleep(2000);
        driver.findElement(By.xpath(selector1)).click();
        await driver.sleep(2000);
        var selector2 = page.phpTravelsFlights.elements['Adults'];
        driver.findElement(By.xpath(selector2)).clear();
        driver.findElement(By.xpath(selector2)).sendKeys("0");
        driver.findElement(By.xpath(selector1)).click();
    },

    alertPopup: async function () {
        // eslint-disable-next-line no-console
        /*driver.switchTo().alert().accept(); //Window to Alert
        driver.switchTo().window(driver.getWindowHandle()); // Alert to Window*/
        driver.findElement(By.xpath("//*[text()='Got It']")).click();
        await driver.sleep(5000);
    },

    scrollElement: async function (obj1) {
        await driver.sleep(5000);
        var selector = page.phpTravelsFlights.elements[obj1];
        console.log("Element Before click")
        return helpers.scrollToElement(driver.findElement(By.xpath(selector)));

    },

    inputUserName: async function (val) {
        var selector = page.phpTravelsFlights.elements['username'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },

    inputPassword: async function (val) {
        var selector = page.phpTravelsFlights.elements['password'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputElement: async function (name, val) {
        var selector = page.phpTravelsFlights.elements[name];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
    },

    flyingFrom: async function (value, obj1) {
        var selector1 = page.phpTravelsFlights.elements[obj1];
        driver.findElement(By.xpath(selector1)).clear();
        driver.findElement(By.xpath(selector1)).sendKeys(value);
        var selector2 = page.phpTravelsFlights.elements[value];
        driver.findElement(By.xpath(selector2)).click();
        await driver.sleep(2000);
    },

    toDestination: async function (value, obj1) {
        var selector1 = page.phpTravelsFlights.elements[obj1];
        driver.findElement(By.xpath(selector1)).clear();
        driver.findElement(By.xpath(selector1)).sendKeys(value);
        var selector2 = page.phpTravelsFlights.elements[value];
        driver.findElement(By.xpath(selector2)).click();
        await driver.sleep(2000);
    },

    departureDate: async function (value, obj1) {
        var selector1 = page.phpTravelsFlights.elements[obj1];
        driver.findElement(By.xpath(selector1)).clear();
        //await driver.sleep(3000);
        //selector1 = page.phpTravelsFlights.elements[obj1];
        driver.findElement(By.xpath(selector1)).sendKeys(value);
        driver.findElement(By.xpath(selector1)).click();
        await driver.sleep(3000);
    },

    departureDateWithOutInput: async function (obj1) {
        var selector1 = page.phpTravelsFlights.elements[obj1];
        driver.findElement(By.xpath(selector1)).clear();
        await driver.sleep(2000);
        driver.findElement(By.xpath(selector1)).click();
        //await driver.sleep(2000);
        driver.findElement(By.xpath(selector1)).click();
        await driver.sleep(2000);
    },

    returnDate: async function (value, obj1) {
        var selector1 = page.phpTravelsFlights.elements[obj1];
        driver.findElement(By.xpath(selector1)).clear();
        await driver.sleep(3000);
        var selector2 = page.phpTravelsFlights.elements[obj1];
        driver.findElement(By.xpath(selector2)).sendKeys(value);
        driver.findElement(By.xpath(selector2)).click();
        await driver.sleep(3000);
    },

    returnDateWithOutInput: async function (obj1) {
        var selector1 = page.phpTravelsFlights.elements[obj1];
        driver.findElement(By.xpath(selector1)).clear();
        await driver.sleep(2000);
        driver.findElement(By.xpath(selector1)).click();
        //await driver.sleep(2000);
        driver.findElement(By.xpath(selector1)).click();
        await driver.sleep(2000);
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.phpTravelsFlights.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector));
    },

    elementExists1: async function (obj1, obj2) {
        // eslint-disable-next-line no-console
        var selector1 = page.phpTravelsFlights.elements[obj1];
        driver.findElement(By.xpath(selector1));
        await driver.sleep(2000);
        var selector2 = page.phpTravelsFlights.elements[obj2];
        driver.findElement(By.xpath(selector2));
    },

    alertPopup1: async function () {
        // eslint-disable-next-line no-console
        await driver.sleep(2000);
        const alert = driver.switchTo().alert();
        var text1 = alert.getText();
        alert.accept();
        await driver.sleep(3000);
        var selector = page.phpTravelsFlights.elements['FlightHeader'];
        driver.findElement(By.xpath(selector));
        await driver.sleep(3000);
    },

    needHelpContactUs: async function (value, obj1) {
        //await driver.sleep(3000);
        console.log("Contact us started")
        var selector = page.phpTravelsFlights.elements[obj1];
        //driver.findElement(By.xpath(selector)).clear();
        driver.findElement(By.xpath(selector)).sendKeys(value);
        console.log("Contact us after value")
        await driver.sleep(2000);
    },
};
