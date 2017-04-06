'use strict';
const AbstractPage = require('./abstract/AbstractPage');

module.exports = class LoginPage extends AbstractPage {
    constructor() { super('aib-commercial/login'); }

    get $loginWidget() { return $('.login-box-containter'); }

    get $cxpLogin() { return $('#j_username'); }
    get $cxpPassword() { return $('#j_password'); }
    get $cxpLoginBtn() { return element(by.xpath('//button[@type="submit"]')); }

    get $loginField() { return element(by.testHook('userIdField')); }
    get $passwordFiled() { return element(by.testHook('passwordField')); }
    get $secondFactorTokenField() { return element(by.testHook('otcField')); }
    get $userLoginButton() { return element(by.testHook('loginButton')); }

    get userIdMask() { return this.$loginField.getText(); }
    get pwFieldType() { return this.$passwordFiled.getAttribute('type'); }
    get otcFieldType() { return this.$secondFactorTokenField.getAttribute('type'); }

    userIdFieldSecurity(attribute) { return this.$loginField.getAttribute(attribute); }
    pwFieldSecurity(attribute) { return this.$passwordFiled.getAttribute(attribute); }
    otcFieldSecurity(attribute) { return this.$secondFactorTokenField.getAttribute(attribute); }

    get $unsuccessfulLoginMessage() { return element(by.testHook('unsuccessfulLoginMessageContainer')); }
    get unsuccessfulLoginMessageText() { return this.$unsuccessfulLoginMessage.getText(); }

    loginWidgetVisibility() { return this.$loginWidget.isDisplayed(); }

    loginButtonClickable() {
        const el = this.$userLoginButton;
        return browser.wait(() => el.isDisplayed(), 3000);
    }

    loginFieldVisible() {
        const el = this.$loginField;
        return browser.wait(() => el.isDisplayed(), 3000);
    }

    unseccessfulLoginMessageIsInvisibleAfterTime(seconds) {
        const el = this.$unsuccessfulLoginMessage;
        return browser.wait(() => el.isPresent().then(present => !present), seconds * 1000);
    }

    get unsuccessfulLoginMessageIsVisible() { return this.$unsuccessfulLoginMessage.isDisplayed(); }

    enterUserID(string) { return this.$loginField.sendKeys(string); }
    enterPassword(string) { return this.$passwordFiled.sendKeys(string); }
    enterOTC(string) { return this.$secondFactorTokenField.sendKeys(string); }
    clickLoginButton() { return this.$userLoginButton.click(); }

    get $headerMessage() { return $('.aib-welcome-message > h1'); }
    get $welcomeMessage() { return $('.aib-welcome-body'); }
    get $fraudHeaderMessage() { return element(by.xpath('//h1[contains(.,"Protect your business from email scams")]')); }
    get $fraudMessage() { return $('.aib-fraud-warning-message .aib-warning-body'); }

    get $termsAndConditionsLink() { return element(by.xpath('//a[@href="http://business.aib.ie/ibb-tcs-to-take-effect-from-the-09th-March-2015.pdf"]')); }
    get $privacyPolicyLink() { return element(by.xpath('//a[@href="http://business.aib.ie/privacy-statement"]')); }
    get $fraudPreventionPageLink() { return element(by.xpath(' //a[@href="http://business.aib.ie/security-centre/how-do-you-prevent-fraud"]')); }
    get $securityPagesLink() { return element(by.xpath('//a[@href="http://business.aib.ie/security-centre"]')); }
    get $legalPagesLink() { return element(by.xpath('//a[@href="http://business.aib.ie/legal"]')); }

    login({ userId, password }) {
        return this.$cxpLogin.sendKeys(userId)
            .then(() => this.$cxpPassword.sendKeys(password))
            .then(() => this.$cxpLoginBtn.click());
    }

    userLogin({ userId, password, secondFactorToken }) {
        return this.$loginField.sendKeys(userId)
            .then(() => this.$passwordFiled.sendKeys(password))
            .then(() => this.$secondFactorTokenField.sendKeys(secondFactorToken))
            .then(() => this.$userLoginButton.click());
    }

    get headerMessage() { return this.$headerMessage.getText(); }
    get welocmeMessageText() { return this.$welcomeMessage.getText(); }

    get fraudHeaderMessageText() { return this.$fraudHeaderMessage.getText(); }
    get fraudMessageText() { return this.$fraudMessage.getText(); }

    clickTermsAndConditionsLink() { return this.$termsAndConditionsLink.click(); }
    clickPrivacyPolicyLink() { return this.$privacyPolicyLink.click(); }
    clickFraudPreventionPageLink() { return this.$fraudPreventionPageLink.click(); }
    clickSecurityPagesLink() { return this.$securityPagesLink.click(); }
    clickLegalPagesLink() { return this.$legalPagesLink.click(); }

    switchToTab(index) {
        return browser.getAllWindowHandles()
            .then(handles => handles[index])
            .then(handle => browser.switchTo().window(handle))
            .then(() => browser.getCurrentUrl().should.eventually.eql('test'));
    }

    getNameTermsAndConditionsLink(linkText) { return this.$termsAndConditionsLink.getText(linkText); }
    getNamePrivacyPolicyLink(linkText) { return this.$privacyPolicyLink.getText(linkText); }
    getNameFraudPreventionPageLink(linkText) { return this.$fraudPreventionPageLink.getText(linkText); }
    getNameSecurityPagesLink(linkText) { return this.$securityPagesLink.getText(linkText); }
    getNameLegalPagesLink(linkText) { return this.$legalPagesLink.getText(linkText); }



};
