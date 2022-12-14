const { assert } = require("chai");
const helpers = require("../runtime/helpers");
/*const ps=require("prompt-sync");
const prompt=ps();  */

/* eslint-disable no-undef */
module.exports = {

    siteUrls: {
        //url: 'https://www.smartsubmissions.com/'
        SmartSubmissions: 'https://www.smartsubmissions.com/',
        SignUpLink: 'https://www.smartsubmissions.com/signup',
        LoginLink: 'https://www.smartsubmissions.com/login'
    },

    elements: {
        SignUpLink: '//div//button[text()="Sign Up"]',
        SSLogo: '//img[@class="ng-tns-c8-2"]',

        Recruiter: '//form//label[position()=1]',
        AccessCode: '//input[@name="accessCode"]',
        CompanyName: '//input[@name="companyName"]',

        AccessCodeErr: '//div[div[input[@name="accessCode"]]]/div[text()="Access Code is required"]',
        CompanyNameErr: '//div[div[input[@name="companyName"]]]/div[text()="Company Name is required"]',
        RecRegistrationErr: '//div[@id="toast-container"]//div[contains(text(),"Access code does not exist.")]',

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
        RegisterSuccess: '//div[@id="toast-container"]//div[contains(text(),"Thank you for signing up.")]',
        UserExistsErrMessage: '//div[@id="toast-container"]//div[contains(text(),"User already exists")]',

        FirstNameErr: '//div[div[input[@name="firstName"]]]/div[text()="First Name is required"]',
        LastNameErr: '//div[div[input[@name="lastName"]]]/div[text()="Last Name is required"]',
        EmailErr: '//div[div[input[@name="email"]]]/div[text()="Email is required"]',
        PasswordErr: '//div[div[input[@name="password"]]]/div[text()="Password must be minimum of 8 characters"]',
        ConfirmPwdErr: '//div[div[input[@name="confirmPassword"]]]/div[text()="Confirm Password is required"]',
        WithOutDetailsValErr: '//div[@class="mb0 has-error"]/div[position()=2]',

        LoginBtnInSignUpPage: '//form//div//a[@href="/login"]',
        LOGINBtnInLoginPage: '//form//button[text()=" Login "]',
        EmailErrVal: '//div[div[input[@name="email"]]]/div[text()="Valid email is required"]',
        PwdErrVal: '//div[div[input[@name="password"]]]/div[text()="Password is required"]',
        ErrLoginWithoutDetails: '//form[div[button[text()=" Login "]]]/div[@class="mb0 has-error"]',
        ErrAfterLoginwithDetails: '//div[contains(text(),"Invalid username or password.")]',
        LoginSuccess: '  ',

        ForgetPwdLink: '//form[@name="form"]//a[text()=" Forgot Password? "]',
        ForgetPwdHeader: '//form[@name="form"][span]/p[contains(text(),"Please enter your email address")]',
        EmailInForgetPwd: '//form[@name="form"]//input[@name="email"]',
        SendEmailButton: '//form[@name="form"]//button[text()=" Send Email "]',
        BackToLogin: '//i/ancestor::form[@name="form"]//a[@href="/login"]',
        PwdResetLink: '//div[@id="toast-container"]//div[contains(text(),"We emailed you a password reset link")]',
        EmailErrInForgetPwd: '//div[div[input[@name="email"]]]/div[text()="Valid email is required"]',
        InValidEmailInForgetPwd: '//div[@id="toast-container"]//div[text()="" We could not find your account with the given email. Please input your registered email. ""]'

    },

    content: {

    },

    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.smartSubmissions.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).click();
    },
    inputElement: async function(name,val) {
        var selector = page.smartSubmissions.elements[name]; 
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);
            },
    inputElement1: async function(objKey1,objKey2,objKey3,objKey4,objKey5,objKey6,objKey7,objKey8) {
        
        var selector1 = page.smartSubmissions.elements[objKey1];        
        //var accessCode = prompt("Enter your accessCode: ");
        driver.findElement(By.xpath(selector1)).sendKeys("12345");
        var selector2 = page.smartSubmissions.elements[objKey2];
        //var companyName = prompt("Enter your companyName: ");
        driver.findElement(By.xpath(selector2)).sendKeys("IBM");
        var selector3 = page.smartSubmissions.elements[objKey3];
        //var firstName = prompt("Enter your firstName: ");
        driver.findElement(By.xpath(selector3)).sendKeys("Janu");
        var selector4  = page.smartSubmissions.elements[objKey4];
        //var lastName = prompt("Enter your lastName: ");
        driver.findElement(By.xpath(selector4)).sendKeys("Som");
        var selector5  = page.smartSubmissions.elements[objKey5];
        //var email = prompt("Enter your email: ");
        driver.findElement(By.xpath(selector5)).sendKeys("Janu@abc.com");
        var selector6 = page.smartSubmissions.elements[objKey6];
        //var mobileNo = prompt("Enter your mobileNo: ");
        driver.findElement(By.xpath(selector6)).sendKeys("9898989898");
        var selector7 = page.smartSubmissions.elements[objKey7];
        //var password = prompt("Enter your password: ");
        driver.findElement(By.xpath(selector7)).sendKeys("Janu@1234");        
        var selector8 = page.smartSubmissions.elements[objKey8];
        //var confirmPwd = prompt("Enter your confirmPwd: ");
        driver.findElement(By.xpath(selector8)).sendKeys("Janu@1234");        
        await driver.sleep(2000);
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.smartSubmissions.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },

    elementExists1: async function(objKey1,objKey2,objKey3,objKey4,objKey5,objKey6,objKey7) {
        // eslint-disable-next-line no-console
        var selector = page.smartSubmissions.elements[objKey1,objKey2,objKey3,objKey4,objKey5,objKey6,objKey7];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    }
};
