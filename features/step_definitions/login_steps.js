'use strict';
const DashBoardPage = require('../../Pages/Dashboard');
const dashboard = new DashBoardPage();
const LoginPage = require('../../Pages/LoginPage');
const loginPage = new LoginPage();
const testUsers = require('../../Pages/TestUsers');

module.exports = function () {
    this.World = require('../../Pages/support/world');

    this.Given(/^I am logged in as admin$/, function () {
        return loginPage.openByUrl()
            .then(() => loginPage.login(testUsers.testUser00));
    });

    this.Given(/^I am logged in as a user$/, function () {
        return loginPage.openByUrl()
            .then(() => loginPage.userLogin(testUsers.testUser01));
    });

    this.Given(/^User enters "([^"]*)" into the User ID field$/, function (userId) {
        return loginPage.enterUserID(userId);
    });

    this.Given(/^User enters "([^"]*)" into the Password field$/, function (password) {
        return loginPage.enterPassword(password);
    });

    this.Given(/^User enters "([^"]*)" into the One\-Time Code field$/, function (otc) {
        return loginPage.enterOTC(otc);
    });

    this.When(/^User clicks on the Log\-in button$/, function () {
        return loginPage.clickLoginButton();
    });


    this.Then(/^I should see the Dashboard page$/, function () {
        return dashboard.sideNavigation.isDisplayedLogo
            .should.eventually.be.true;
    });

    this.Then(/^Unsuccessful login message is displayed as "(.*)"$/, function (message) {
        return loginPage.unsuccessfulLoginMessageText.should.eventually.equal(message);

    });

    this.Then(/^Unsuccessful login message is not displayed after "(\d+)" seconds$/, function (seconds) {
        return loginPage.unseccessfulLoginMessageIsInvisibleAfterTime(seconds)
            .should.eventually.be.true;
    });

    this.Then(/^Password is a secure field$/, function () {
        return loginPage.pwFieldType.should.eventually.equal('password');

    });

    this.Then(/^OTC is a secure field$/, function () {
        return loginPage.otcFieldType.should.eventually.equal('password');

    });


};
