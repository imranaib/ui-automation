'use strict';
const utils = require('../../Pages/support/utils');

const LoginPage = require('../../Pages/LoginPage');
const loginPage = new LoginPage();

module.exports = function () {

    this.World = require('../../Pages/support/world');

    this.Given(/^User is on login page$/, function () {
        return loginPage.openByUrl();

    });

    this.Given(/^Login button is clickable$/, function () {
        return loginPage.loginButtonClickable().should.eventually.be.ture;

    });

    this.Then(/^User can see Header text:$/, function (headerText) {
        return loginPage.headerMessage.should.eventually.equal(headerText);

    });

    this.Then(/^User can see Subheader text:$/, function (welcomeMessage) {
        return loginPage.welocmeMessageText.should.eventually.equal(welcomeMessage);
    });

    this.Then(/^User can see Fraud Warning Message Header text in the Scam email message container:$/, function (fraudHeaderText) {
        return loginPage.fraudHeaderMessageText.should.eventually.equal(fraudHeaderText);

    });

    this.Then(/^User can see Warning Message Subheader text in the Scam email message container:$/, function (fraudMessage) {
        return loginPage.fraudMessageText.should.eventually.contain(fraudMessage);

    });

    this.Given(/^User can see Terms and conditions link in the footer of the Login page as "([^"]*)"$/, function (linkText) {
        return loginPage.getNameTermsAndConditionsLink().should.eventually.equal(linkText);

    });

    this.When(/^User clicks on the Terms & conditions link$/, function () {
        return loginPage.clickTermsAndConditionsLink();

    });

    this.Then(/^Terms & conditions link "([^"]*)" opens in the tab number "(\d+)"$/, function (url, tabIndex) {
        return utils.switchToTab(tabIndex)
            .then(() => utils.currentUrl.should.eventually.equal(url));
    });

    this.Then(/^User closes the current tab$/, function () {
        return utils.closeCurrentTab().then(() => utils.switchToTab(0));

    });

    this.Given(/^User can see Privacy Policy link in the footer of the Login page as "([^"]*)"$/, function (linkText) {
        return loginPage.getNamePrivacyPolicyLink().should.eventually.equal(linkText);

    });

    this.When(/^User clicks on the Privacy Policy link$/, function () {
        return loginPage.clickPrivacyPolicyLink();

    });

    this.Then(/^Privacy Policy link "([^"]*)" opens in the tab number "([^"]*)"$/, function (url, tabIndex) {
        return utils.switchToTab(tabIndex)
            .then(() => utils.currentUrl.should.eventually.equal(url));
    });

    this.Given(/^User can see Fraud Prevention Page link in the footer of the Login page as "([^"]*)"$/, function (linkText) {
        return loginPage.getNameFraudPreventionPageLink().should.eventually.equal(linkText);
    });

    this.When(/^User clicks on the Fraud Prevention Page link$/, function () {
        return loginPage.clickFraudPreventionPageLink();

    });

    this.Then(/^Fraud Prevention Page link "([^"]*)" opens in the tab number "([^"]*)"$/, function (url, tabIndex) {
        return utils.switchToTab(tabIndex)
            .then(() => utils.currentUrl.should.eventually.equal(url));
    });

    this.Given(/^User can see Security Pages link in the footer of the Login page as "([^"]*)"$/, function (linkText) {
        return loginPage.getNameSecurityPagesLink().should.eventually.equal(linkText);
    });

    this.When(/^User clicks on the Security Pages link$/, function () {
        return loginPage.clickSecurityPagesLink();
    });

    this.Then(/^Security Pages link "([^"]*)" opens in the tab number "([^"]*)"$/, function (url, tabIndex) {
        return utils.switchToTab(tabIndex)
            .then(() => utils.currentUrl.should.eventually.equal(url));
    });

    this.Given(/^User can see Legal Pages link in the footer of the Login page as "([^"]*)"$/, function (linkText) {
        return loginPage.getNameLegalPagesLink().should.eventually.equal(linkText);
    });

    this.When(/^User clicks on the Legal Pages link$/, function () {
        return loginPage.clickLegalPagesLink();
    });

    this.Then(/^Legal Pages link "([^"]*)" opens in the tab number "([^"]*)"$/, function (url, tabIndex) {
        return utils.switchToTab(tabIndex)
            .then(() => utils.currentUrl.should.eventually.equal(url));

    });

    this.Given(/^"([^"]*)" should be set to "([^"]*)" in User\-ID field$/, function (attribute, value) {
        return loginPage.userIdFieldSecurity(attribute).should.eventually.equal(value);

    });

    this.Given(/^"([^"]*)" should be set to "([^"]*)" in Password field$/, function (attribute, value) {
        return loginPage.pwFieldSecurity(attribute).should.eventually.equal(value);

    });

    this.Given(/^"([^"]*)" should be set to "([^"]*)" in OTC field$/, function (attribute, value) {
        return loginPage.otcFieldSecurity(attribute).should.eventually.equal(value);

    });

    this.Given(/^Login widget is displayed$/, function () {
        return loginPage.loginFieldVisible().should.eventually.be.true;
    });

};
