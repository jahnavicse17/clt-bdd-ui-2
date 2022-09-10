const {assert} = require("chai");
const helpers = require("../runtime/helpers");

module.exports = function () 
{
    this.Given(/^I am on the "([^"]*)" phpPage4$/, function (objectKey) {
        return helpers.loadPage(page.phpTravelsFlights.siteUrls.PHPTravels);
    });

    this.When(/^I click on "([^"]*)" php4$/, async function (objectKey) {
        await driver.sleep(2000);
        return page.phpTravelsFlights.clickElement(objectKey);
    });
    this.When(/^I click on "([^"]*)" and click off php4$/, async function (obj1) {
        await driver.sleep(2000);
        return page.phpTravelsFlights.clickPassenger(obj1);
    });

    this.When(/^I click on "([^"]*)" and "([^"]*)" and "([^"]*)" php4$/, async function (obj1,obj2,obj3) {
        await driver.sleep(2000);
        return page.phpTravelsFlights.clickPassengerWithChild(obj1,obj2,obj3);
    });    

    this.When(/^I click on "([^"]*)" without passengerdetails php4$/, async function (obj1) {
        await driver.sleep(2000);
        return page.phpTravelsFlights.clickPassengerWithOutInput(obj1);
    });

    this.When(/^I click on "([^"]*)" without departureinput php4$/, async function (obj1) {
        await driver.sleep(2000);
        return page.phpTravelsFlights.departureDateWithOutInput(obj1);
    });

    this.When(/^I click on "([^"]*)" without returninput php4$/, async function (obj1) {
        await driver.sleep(2000);
        return page.phpTravelsFlights.returnDateWithOutInput(obj1);
    });
    
    this.When(/^I handle cookie alert popups php4$/, async function () {
        return page.phpTravelsNavigational.alertPopup();
    });

    this.Then(/^I should see "([^"]*)" php4$/, function (objectKey) {
        return page.phpTravelsFlights.elementExists(objectKey);
    });

    this.Then(/^I should see "([^"]*)" and "([^"]*)" php4$/, async function (obj1, obj2) {
        await driver.sleep(3000);
        return page.phpTravelsFlights.elementExists1(obj1, obj2);
    });

    this.Then(/^I should see alertmsg popup php4$/, async function () {
        await driver.sleep(3000);
        return page.phpTravelsFlights.alertPopup1();
    });

    this.When(/^I Enter FlyingFrom input "([^"]*)" in "([^"]*)" php4$/,async function (value,obj1) {
        await driver.sleep(2000);
        return page.phpTravelsFlights.flyingFrom(value,obj1);
    });

    this.When(/^I Enter input "([^"]*)" in "([^"]*)" php4$/,async function (value,obj1) {
        await driver.sleep(2000);
        return page.phpTravelsFlights.needHelpContactUs(value,obj1);
    });

    this.When(/^I Enter ToDestination input "([^"]*)" in "([^"]*)" php4$/,async function (value,obj1) {
        await driver.sleep(2000);
        return page.phpTravelsFlights.toDestination(value,obj1);
    });

    this.When(/^I Enter DepartureDate input "([^"]*)" in "([^"]*)" php4$/,async function (value,obj1) {
        await driver.sleep(2000);
        return page.phpTravelsFlights.departureDate(value,obj1);
    });

    this.When(/^I Enter ReturnDate input "([^"]*)" in "([^"]*)" php4$/,async function (value,obj1) {
        await driver.sleep(2000);
        return page.phpTravelsFlights.returnDate(value,obj1);
    });

    this.When(/^I enter the inputs for login php4$/, async function(table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.phpTravelsFlights.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(5000);
        return;
    });

    this.When(/^I scroll for "([^"]*)" element php4$/ , async function(obj1) {
        //Scrolling and finding the element by using XPath
        page.phpTravelsNavigational.scrollElement(obj1);
        await driver.sleep(3000);
        return;
    });


};
