'use strict';
const LoginPage = require('./../../Pages/LoginPage');
const loginPage = new LoginPage();
const AccountsPage = require('./../../Pages/Accounts/AccountsPage');
const accountsPage = new AccountsPage();
const DashBoardPage = require('./../../Pages/Dashboard');
const dashboard = new DashBoardPage();

const utils = require('./../../Pages/support/utils');

module.exports = function () {
    this.World = require('./../../Pages/support/world');

    this.Given(/^Dashboard page is loaded$/, function () {
        return dashboard.userMenuLoaded().should.eventually.be.true;

    });

    this.Then(/^User can see Logout button in the left\-hand navigation$/, function () {
        return dashboard.logoutBtnIsDisplayed().should.eventually.be.true;

    });

    this.Given(/^User clicks Logout button$/, function () {
        return dashboard.clickLogout();

    });

    this.Given(/^Logout confirmation message popped-up$/, function () {
        return dashboard.confirmationMessageIsDisplayed().should.eventually.be.true;

    });

    this.When(/^User clicks on Cancel button$/, function () {
        return dashboard.cancelLogout();

    });

    this.Then(/^User stays on the Dashboard page$/, function () {
        return utils.currentUrl.should.eventually.equal(`${browser.baseUrl}${dashboard.relativeUrl}`);

    });

    this.When(/^User clicks on Confirm Logout button$/, function () {
        return dashboard.confirmLogout();

    });

    this.Then(/^User is redirected to login page$/, function () {
        return dashboard.sideNavigation.waitForLoginPageUrl().should.eventually.be.true;

    });

    this.Then(/^User can't access accounts page in closed environment$/, function () {
        return accountsPage.openByUrl()
            .then(() => utils.currentUrl.should.eventually.equal(`${browser.baseUrl}${loginPage.relativeUrl}?redirect=/${accountsPage.relativeUrl}`));
    });

};
