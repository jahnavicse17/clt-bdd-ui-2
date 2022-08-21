"use strict";

var _require = require("chai"),
    assert = _require.assert;

var helpers = require("../runtime/helpers");
/* eslint-disable no-undef */


module.exports = {
  siteUrls: {
    Jootza: 'http://www.jootza.com/login',
    SmartSubmissions: 'https://www.smartsubmissions.com',
    Google: 'www.google.com',
    eBay: 'www.ebay.com'
  },
  elements: {
    Register: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a',
    RegisterHeader: '/html/body/mdb-root/main/div/app-signup/header/section/div/div/div/div/div/div/h2/strong',
    Login: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a',
    LoginHeader: '/html/body/mdb-root/main/div/app-login/header/section/div/div/div/div/div/div/div[1]/h2/strong',
    username: by.name('username'),
    // '//*[@id="login-username relate-pos"]',
    password: by.name('password'),
    // '//*[@name="username"]',
    LoginBtn: '//*[@id="btn-login"]/button',
    errorMessage: '//*[@id="toast-container"]/mdb-toast-component/div',
    PasswordVal: 'demo1234',
    submitBtn: '',
    approverName: '//*[@id="info"]/div[1]/div[3]/div/input',
    SSLogin: '//*[@id="mainNav"]/div/div/div[2]/ul/li[3]/button'
  },
  content: {
    'Adams, Jimmy': 'Adams, Jimmy',
    'ADMIN, CLT': 'ADMIN, CLT'
  },
  clickElement: function clickElement(objectKey) {
    var selector;
    return regeneratorRuntime.async(function clickElement$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // eslint-disable-next-line no-console
            selector = page.jootza.elements[objectKey];
            _context.next = 3;
            return regeneratorRuntime.awrap(driver.sleep(2000));

          case 3:
            return _context.abrupt("return", driver.findElement(By.xpath(selector)).click());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  enterUsername: function enterUsername() {
    var selector;
    return regeneratorRuntime.async(function enterUsername$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            selector = page.jootza.elements['username'];
            _context2.next = 3;
            return regeneratorRuntime.awrap(driver.sleep(2000));

          case 3:
            return _context2.abrupt("return", driver.findElement(selector).sendKeys('shan'));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  enterPassword: function enterPassword() {
    var selector;
    return regeneratorRuntime.async(function enterPassword$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            selector = page.jootza.elements['password'];
            _context3.next = 3;
            return regeneratorRuntime.awrap(driver.sleep(2000));

          case 3:
            return _context3.abrupt("return", driver.findElement(selector).sendKeys('test'));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  inputUserName: function inputUserName(val) {
    var selector;
    return regeneratorRuntime.async(function inputUserName$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            selector = page.jootza.elements['username'];
            _context4.next = 3;
            return regeneratorRuntime.awrap(driver.sleep(2000));

          case 3:
            return _context4.abrupt("return", driver.findElement(selector).sendKeys(val));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  inputPassword: function inputPassword(val) {
    var selector;
    return regeneratorRuntime.async(function inputPassword$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            selector = page.jootza.elements['password'];
            _context5.next = 3;
            return regeneratorRuntime.awrap(driver.sleep(2000));

          case 3:
            return _context5.abrupt("return", driver.findElement(selector).sendKeys(val));

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  inputElement: function inputElement(name, val) {
    var selector;
    return regeneratorRuntime.async(function inputElement$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            selector = page.jootza.elements[name];
            _context6.next = 3;
            return regeneratorRuntime.awrap(driver.sleep(2000));

          case 3:
            return _context6.abrupt("return", driver.findElement(selector).sendKeys(val));

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    });
  },
  elementExists: function elementExists(objectKey) {
    var selector;
    return regeneratorRuntime.async(function elementExists$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            // eslint-disable-next-line no-console
            selector = page.jootza.elements[objectKey];
            _context7.next = 3;
            return regeneratorRuntime.awrap(driver.sleep(5000));

          case 3:
            return _context7.abrupt("return", driver.findElement(By.xpath(selector)));

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    });
  },
  loginPortal: function loginPortal(username) {
    return regeneratorRuntime.async(function loginPortal$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return regeneratorRuntime.awrap(helpers.loadPage(page.jootza.url));

          case 2:
            _context8.next = 4;
            return regeneratorRuntime.awrap(this.inputUserName(username));

          case 4:
            _context8.next = 6;
            return regeneratorRuntime.awrap(this.inputPassword(page.jootza.elements['PasswordVal']));

          case 6:
            _context8.next = 8;
            return regeneratorRuntime.awrap(this.clickElement('LoginBtn'));

          case 8:
            _context8.next = 10;
            return regeneratorRuntime.awrap(driver.sleep(2000));

          case 10:
            return _context8.abrupt("return");

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, null, this);
  },
  verifyApproverName: function verifyApproverName(val) {
    var selector, result;
    return regeneratorRuntime.async(function verifyApproverName$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            selector = page.jootza.elements['approverName'];
            _context9.next = 3;
            return regeneratorRuntime.awrap(driver.findElement(By.xpath(selector)).getAttribute("value"));

          case 3:
            result = _context9.sent;
            assert.equal(page.jootza.content[val], result);

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    });
  }
};