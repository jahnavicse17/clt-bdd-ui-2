const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    siteUrls: {
        //url: 'https://www.smartsubmissions.com/'
        SmartSubmissions: 'https://www.smartsubmissions.com/',
        SignUpLink: 'https://www.smartsubmissions.com/signup'
    },

    elements: {
        SignUpLink: '//div//button[text()="Sign Up"]',
        SSLogo: '//img[@class="ng-tns-c8-2"]',

        Recruiter: '//form//label[position()=1]',
        AccessCode: '//input[@name="accessCode"]',
        CompanyName: '//input[@name="companyName"]',

        JobSeeker: '//form//label[position()=2]',
        FirstName: '//input[@name="firstName"]',
        LastName: '//input[@name="lastName"]',
        Email: '//input[@name="email"]',
        MobileNo: '//input[@name="mobileNumber"]',
        Password: '//input[@name="password"]',
        ConfirmPwd: '//input[@name="confirmPassword"]',
        //AgreeTermsCheckBox: '//form[@id="RegistrationForm"]//p-checkbox/div',
        AgreeTermsCheckBox: '//p-checkbox/div[@class="ui-chkbox ui-widget"]/div[position()=2]',
        RegisterBtn: '//div/button[text()=" Register "]',
        WithOutDetailsValErr: '//div[@class="mb0 has-error"]/div[position()=2]',
        UserExistsErrMessage: '//div[@id="toast-container"]//div[contains(text(),"User already exists")]',
        RegisterSuccess: '//div[@id="toast-container"]//div[contains(text(),"Thank you for signing up. Please check your email for further instructions.")]',

        AccessCodeErr: '//div[div[input[@name="accessCode"]]]/div[text()="Access Code is required"]',
        CompanyNameErr: '//div[div[input[@name="companyName"]]]/div[text()="Company Name is required"]',

        FirstNameErr: '//div[div[input[@name="firstName"]]]/div[text()="First Name is required"]',
        LastNameErr: '//div[div[input[@name="lastName"]]]/div[text()="Last Name is required"]',
        EmailErr: '//div[div[input[@name="email"]]]/div[text()="Email is required"]',
        PasswordErr: '//div[div[input[@name="password"]]]/div[text()="Password must be minimum of 8 characters"]',
        ConfirmPwdErr: '//div[div[input[@name="confirmPassword"]]]/div[text()="Confirm Password is required"]',
            
        LoginBtnInSignUpPage: '//form//div//a[@href="/login"]',
        LOGINBtnInLoginPage: '//form//button[text()=" Login "]',
        EmailErrVal: '//div[div[input[@name="email"]]]/div[text()="Valid email is required"]',
        PwdErrVal: '//div[div[input[@name="password"]]]/div[text()="Password is required"]',
        ErrLoginWithoutDetails:'//form[div[button[text()=" Login "]]]/div[@class="mb0 has-error"]',
        ErrAfterLoginwithDetails:'//div[input[@name="password"]]/following-sibling::div[text()="Invalid username or password. Please try again!"]',
        LoginHeader: ''
    },

    content: {

    },

    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.smartSubmissions.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
    inputElement: async function (name, val) {
        var selector = page.smartSubmissions.elements[name];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
    },
    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.smartSubmissions.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    }
};
