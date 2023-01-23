const { assert, Assertion } = require("chai");
const { By } = require("selenium-webdriver");
const chromeDriver = require("selenium-webdriver/chrome");
const webdriver = require("selenium-webdriver");
const firefoxDriver = require('selenium-webdriver/firefox');
const { Key, Builder } = require("selenium-webdriver");
var chrome = require("chromedriver");
var firefox = require("geckodriver");
const { Alert } = require("selenium-webdriver");
const { clearCookies } = require("../runtime/helpers");
const helpers = require("../runtime/helpers");
const actions = require('selenium-webdriver/lib/input');
//const rp = require('request-promise');
const keys = webdriver.Key;
//const expect = chai.expect;
//const should = chai.should();
const WebElement = require('selenium-webdriver');
const { action } = require("commander");
//const robot = require("robotjs");
/*const ps=require("prompt-sync");
const prompt=ps();  */

/* eslint-disable no-undef */
module.exports = {

    siteUrls: {
        SelHQ: 'https://www.seleniumhq.org/download/',
        AutomationPractice: 'http://automationpractice.com/',
        APContactUsPage: 'http://automationpractice.com/index.php?controller=contact',
        HSScripts: 'http://www.hscripts.com/tutorials/html/form-combobox.php',
        jQuery: 'http://jqueryui.com/droppable/',
        Hotmail: 'https://www.hotmail.com',
        LICSITE: 'https://licindia.in/Top-Links/Contact-Us#',
    },

    elements: {
        SelHQHeader: '//*[@id="td-cover-block-0"]/div/div/div/div/h1',
        DownloadVersion: '//p[contains(text(),"Download version")]/following-sibling::p/a[contains(text(),"64 bit Windows IE")]',

        APTopsTabSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > a',
        APTShirtsSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > ul > li:nth-child(1) > a',
        APBlousesSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > ul > li:nth-child(2) > a',
        APDressesSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > a',
        APCasualDressesSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(1) > a',
        APEveningDressesSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(2) > a',
        APSummerDressesSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(3) > a',
        APTopsHeader: '//*[@id="center_column"]/div[1]/div/div/span',
        APTShirtsHeader: '//*[@id="center_column"]/div[1]/div/div/span',
        APBlousesHeader: '//*[@id="center_column"]/div[1]/div/div/span',
        APDressesHeader: '//*[@id="center_column"]/div[1]/div/div/span',
        APCasualDressesHeader: '//*[@id="center_column"]/div[1]/div/div/span',
        APEveningDressesHeader: '//*[@id="center_column"]/div[1]/div/div/span',
        APSummerDressesHeader: '//*[@id="center_column"]/div[1]/div/div/span',

        APScrollToFooter: '/html/body/div/div[3]/footer/div',
        FooterBlk2Link1: '//li[@class="facebook"]//a[@target="_blank"]',
        FooterFacebookHeader: '//span//div[text()="Public group"]',
        FooterFacebookHeader1: '//*[text()="Anyone can find this group."]',
        FooterBlk2Link2: '/html/body/div/div[3]/footer/div/section[1]/ul/li[2]/a',
        FooterTwitterHeader: '/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[2]/div/div/div/div[2]/div[2]/div[1]/div/div[1]/div/div/span[1]/span',
        FooterBlk2Link3: '/html/body/div/div[3]/footer/div/section[1]/ul/li[3]/a',
        FooterYouTubeHeader: '//yt-formatted-string[contains(text(),"Selenium Framework")]',
        FooterBlk2Link4: '//li[@class="google-plus"]//a[@target="_blank"]',
        FooterGoogleHeader: '/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[1]/div/h1/span',

        APContactUsSubjHeadDropBox: '',
        APContactUsSubjHeadDropBox: '//select[@id="id_contact"]',
        APContactUsEmail: '//input[@id="email"]',
        APContactUsOrderReference: '//input[@id="id_order"]',
        APContactUsMessage: '//textarea[@id="message"]',
        APContactUsSendBtn: '//span[contains(text(),"Send")]',
        APContactUsResponseSuccess: '//p[@class="alert alert-success"]',
        APContactUsFileAttachBox: '//input[@id="fileUpload"]',

        APScrollToEmail: '//i[@class="icon-envelope-alt"]',
        APEmailLink: '//a[contains(text(),"support@seleniumframework.com")]',

        MultiSelect: '//h5[text()="Multi Select Option"]',
        MultiSelectOptions: '//select[@name="mytextarea" and @size="3"]',

        DragAndDrop: '//iframe[@class="demo-frame"]',
        Draggable: By.id("draggable"),
        Droppable: By.id("droppable"),

        LICContactUS: '//*[@id="container"]/div[1]/div/div[1]/article/div/div[4]/table/tbody/tr[3]/td[2]/p/a',
        DelhiContacts: '/html/body/',
    },

    content: {
        'Adams, Jimmy': 'Adams, Jimmy',
        TShirts: 'T-Shirts',
        Kurtas: 'Kurtas',
        Tops: 'Tops',
        TShirts1: 'T-shirts',
        Blouses: 'Blouses',
        Dresses: 'Dresses',
        CasualDresses: 'Casual Dresses',
        EveningDresses: 'Evening Dresses',
        SummerDresses: 'Summer Dresses',
    },

    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.newConcepts.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    certErrors: async function (objectKey) {
        var selector1 = page.newConcepts.siteUrls[objectKey];
        var profile = new firefoxDriver.Profile();
        profile.setAcceptUntrustedCerts(true);
        profile.setAssumeUntrustedCertIssuer(false);
        var options = new firefoxDriver.Options();
        options.setProfile(profile);
        //To wait for browser to build and launch properly

        var driver = new webdriver.Builder()
            .forBrowser("firefox")
            .setFirefoxOptions(options).build();

        //var driver = new webdriver.Builder().withCapabilities({ 'browserName': 'firefox', acceptSslCerts: true, acceptInsecureCerts: true }).build();

        //await driver.sleep(8000);
        await driver.get(selector1);
        await driver.manage().window().maximize();
        //driver.navigate.to(selector1);
        await driver.sleep(8000);
    },

    selectDropDownByText: async function (optionName, obj1) {
        // eslint-disable-next-line no-console
        var selector1 = page.newConcepts.elements[obj1];
        console.log("Lang value: " + optionName);
        //driver.findElement(By.xpath(selector1)).click();
        await driver.sleep(3000);
        var elementSelector = page.newConcepts.elements['ListOfLang'];
        await driver.sleep(3000);
        //var optionName = page.phpTravelsHeader.content['Russian'];
        // return helpers.selectDropdownValueByVisibleText(elementSelector,"Russian");
        return helpers.selectDropdownValueByVisibleText(elementSelector, optionName);

    },

    dragAndDropFile: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector1 = page.newConcepts.elements[objectKey];
        var selector2 = page.newConcepts.elements['Draggable'];
        var selector3 = page.newConcepts.elements['Droppable'];
        await driver.sleep(3000);
        const originalWindow = await driver.getWindowHandle();
        //Switching to an iframe from window 
        await driver.switchTo().frame(driver.findElement(By.xpath(selector1)));
        //To locate the source and target elements
        let draggable = driver.findElement(selector2); //Source element
        let droppable = driver.findElement(selector3); //Target element
        await driver.sleep(5000);
        //To perform drag and drop operation(drag the source element and drop into the target element)
        await driver.actions().dragAndDrop(draggable, droppable).perform();
        await driver.sleep(5000);
        //To verify drop success/fail by validating the text inside target element
        let targetText = await droppable.getText();
        if (targetText === "Dropped!") {
            console.log("PASS: Source is dropped at location");
        } else {
            console.log("FAIL: Source is not dropped at location");
        }
        //Switching to window from iframe
        await driver.switchTo().window(originalWindow);
        driver.findElement(By.linkText("Draggable")).click();
        await driver.sleep(5000);
    },

    multiSelectedOptions: async function (objectKey) {
        // eslint-disable-next-line no-console
        var elementSelector = page.newConcepts.elements[objectKey];
        //For selecting multiple values(Multi-Select)   
        helpers.selectDropdownValueByVisibleText(elementSelector, "one");
        //helpers.selectDropdownValueByVisibleText(elementSelector, "two");
        //helpers.selectDropdownValueByVisibleText(elementSelector, "four");
        //helpers.selectDropdownValueByVisibleText(elementSelector, "three");
        await driver.sleep(3000);
        //Selected values get printed to console
        var select = await driver.findElement(By.xpath(elementSelector));
        var selectElements = await select.findElements({ css: 'option' });
        var options = [];
        for (var option of selectElements) {
            options.push((await option.getText()));
        }
        selectElements[options.indexOf("one")].isSelected().then(async function (text1) {
            //await console.log("Selected Options: " + text1);
            if (text1 === true) {
                console.log("Option1 selected");
            }
            else {
                console.log("Option1 Not Selected");
            }
        });
        selectElements[options.indexOf("two")].isSelected().then(async function (text1) {
            if (text1 === true) {
                console.log("Option2 selected");
            }
            else {
                console.log("Option2 Not Selected");
            }
        });
        selectElements[options.indexOf("three")].isSelected().then(async function (text1) {
            if (text1 === true) {
                console.log("Option3 selected");
            }
            else {
                console.log("Option3 Not Selected");
            }
        });
        selectElements[options.indexOf("four")].isSelected().then(async function (text1) {
            if (text1 === true) {
                console.log("Option4 selected");
            }
            else {
                console.log("Option4 Not Selected");
            }
        });
        await driver.sleep(8000);
    },

    scrollElement: async function (obj1) {
        await driver.sleep(3000);
        var selector = page.newConcepts.elements[obj1];
        return helpers.scrollToElement(driver.findElement(By.xpath(selector)));

    },

    alertPopup: async function () {
        // eslint-disable-next-line no-console
        /*driver.switchTo().alert().accept(); //Window to Alert
        driver.switchTo().window(driver.getWindowHandle()); // Alert to Window*/
        driver.findElement(By.xpath("//*[text()='Got It']")).click();
        await driver.sleep(5000);
    },
    inputEmailforNewsLet: async function (value, objectKey) {
        var selector = page.newConcepts.elements[objectKey];
        await driver.sleep(2000);
        //driver.findElement(By.xpath(selector)).clear();
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    chooseFileUpload: async function (objectKey1, objectKey2, objectKey3) {
        var selector1 = page.newConcepts.elements[objectKey1];
        var selector2 = page.newConcepts.elements[objectKey2];
        var selector3 = page.newConcepts.elements[objectKey3];
        driver.findElement(By.xpath(selector1)).sendKeys("C://Users/Hari/Desktop/BDD_Shan_July_31st_2022/abc.txt");
        console.log("File got Selected");
        await driver.sleep(2000);
        driver.findElement(By.xpath(selector2)).click();
        await driver.wait(until.elementsLocated(By.xpath(selector3)), 3000);
        const upload = await driver.findElement(By.xpath(selector3)).getText();
        console.log("Upload File Text: " + upload);
        if (upload.includes("successfully sent")) {
            console.log("File Uploaded");
        }
        else {
            console.log("File Not Uploaded");
        }
    },

    hoverElement: async function (objectKey, textval) {
        // eslint-disable-next-line no-console
        var selector = page.newConcepts.elements[objectKey];
        var textv = page.newConcepts.content[textval];
        await helpers.clickHiddenElement(selector, textv);
    },

    verifyNewTabOpened: async function (objectKey1, objectKey2) {
        var selector1 = page.newConcepts.elements[objectKey1];
        var selector2 = page.newConcepts.elements[objectKey2];
        //1. Store the ID of the original window 
        const originalWindow = await driver.getWindowHandle();
        //2. Click the link which opens in a new window
        await driver.findElement(By.xpath(selector1)).click();
        //Wait for the new window or tab (Check we don't have any other windows open already)
        await driver.wait(
            async () => (await driver.getAllWindowHandles()).length === 3, 5000
        );
        //Loop through until we find a new window handle
        const windows = await driver.getAllWindowHandles();
        windows.forEach(async handle => {
            if (handle !== originalWindow) {
                await driver.switchTo().window(handle);
            }
        });
        //helpers.waitForNewWindows(5000);
        //Wait for the new tab to finish loading content
        //await driver.wait(until.titleIs('Selenium Framework | Facebook'), 3000); //working
        await driver.wait(until.elementsLocated(By.xpath(selector2)), 5000); //working
        //close tab and get back
        driver.close();
        await driver.switchTo().window(originalWindow);
        await driver.sleep(5000);
    },

    verifyNewWindowOpened: async function (objectKey1, objectKey2) {
        var selector1 = page.newConcepts.elements[objectKey1];
        var selector2 = page.newConcepts.elements[objectKey2];
        //1. Store the ID of the original window 
        const originalWindow = await driver.getWindowHandle();
        //2. Click the link which opens in a new window
        await driver.findElement(By.xpath(selector1)).click();
        //Wait for the new window or tab (Check we don't have any other windows open already)
        await driver.wait(
            async () => (await driver.getAllWindowHandles()).length === 3, 5000
        );
        //Loop through until we find a new window handle
        const windows = await driver.getAllWindowHandles();
        windows.forEach(async handle => {
            if (handle !== originalWindow) {
                await driver.switchTo().window(handle);
            }
        });
        //helpers.waitForNewWindows(5000);
        //Wait for the new tab to finish loading content
        //await driver.wait(until.titleIs('Selenium Framework | Facebook'), 3000); //working
        //await driver.wait(until.elementsLocated(By.xpath(selector2)), 5000); //working
       /* robot.moveMouseSmooth(98, 844);
        robot.mouseClick();
        //robot.typeString(" openboard ");
        robot.keyTap("enter");
        robot.keyToggle("control", "down");
        //robot.keyTap("t");
        robot.keyToggle("control", "up"); */
        //close tab and get back
        driver.close();
        await driver.switchTo().window(originalWindow);
        await driver.sleep(5000);

    },


    chooseFileDownload: async function (objectKey1, objectKey2) {
        var selector1 = page.newConcepts.siteUrls[objectKey1];
        var selector2 = page.newConcepts.elements[objectKey2];
        const downloadFilepath = "C:\\Users\\Hari\\Desktop\\BDD_Shan_July_31st_2022";
        //To set chromeOptions
        var options = new chromeDriver.Options();
        options.setUserPreferences({
            "profile.default_content_settings.popups": 0,
            "download.default_directory": downloadFilepath,
        });
        //To wait for browser to build and launch properly
        var driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .forBrowser("chrome")
            .setChromeOptions(options).build();
        try {
            await driver.sleep(3000);
            await driver.get(selector1);
            await driver.manage().window().maximize();
            await driver.sleep(3000);
            //To Click on "Download" link
            driver.findElement(By.xpath(selector2)).click();
            console.log("File Downloaded");
            await driver.sleep(5000);
        }
        catch (e) {
            console.log("Error Occured:", e.name);
        }
        //await driver.quit();
    },

    verifyEmailLink: async function (objectKey) {
        var selector = page.newConcepts.elements[objectKey];
        const string = await driver.findElement(By.xpath(selector)).getAttribute("href");
        console.log("href value is:" + string);

        if (driver.findElement(By.xpath("//*[text()='support@seleniumframework.com']"))) {
            console.log("verified");
            return;
        }
        else {
            console.log("error")
        };
    },

    inputUserName: async function (val) {
        var selector = page.newConcepts.elements['username'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },

    inputPassword: async function (val) {
        var selector = page.newConcepts.elements['password'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputElement: async function (name, val) {
        var selector = page.newConcepts.elements[name];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
    },

    inputEmail: async function (value, obj1) {
        var selector = page.newConcepts.elements[obj1];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.newConcepts.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },

    elementExists1: async function (obj1, obj2, obj3, obj4) {
        // eslint-disable-next-line no-console
        var selector = page.newConcepts.elements[obj1, obj2, obj3, obj4];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },

    elementExists2: function (obj1) {
        // eslint-disable-next-line no-console
        var selector = page.newConcepts.elements[obj1];
        var str = driver.findElement(By.css(selector)).getAttribute("class");
        console.log("Value: " + str);
        //var str = helpers.getAttributeValue(selector, "class");
        assert.equal("pb-1", str);
        //await driver.sleep(5000);        
        //assert.equal(" Let’s book your next trip!", sel1.getText());
        //await driver.sleep(3000);
        //var textToMatch = page.phpTravelsHeader.elements[''];
        //return helpers.getAttributeValue(selector, "classkkkk");

    }
};





