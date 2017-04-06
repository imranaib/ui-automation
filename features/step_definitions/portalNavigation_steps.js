'use strict';
const DashBoardPage = require('../../Pages/Dashboard');
const dashboard = new DashBoardPage();
const AccountsPage = require('../../Pages/Accounts/AccountsPage');
const accountsPage = new AccountsPage();
const TransactionsPage = require('./../../Pages/Transactions/TransactionsPage');
const transactionsPage = new TransactionsPage();
const LoginPage = require('./../../Pages/LoginPage');
const loginPage = new LoginPage();

const utils = require('../../Pages/support/utils');

module.exports = function () {
    this.World = require('../../Pages/support/world');

    this.Then(/^I should land on Home Page$/, function () {
        return dashboard.sideNavigation.waitForHomePageUrl().should.eventually.be.true;
    });


    this.When(/^I click on Home page button$/, function () {
        return dashboard.sideNavigation.clickHomePageButton();
    });

    this.When(/^I click on Accounts button$/, function () {
        return dashboard.sideNavigation.clickAccountsButton();
    });

    this.When(/^I click on Payments button$/, function () {
        return dashboard.sideNavigation.clickPaymentsButton();
    });

    this.When(/^I click on Beneficiaries button$/, function () {
        return dashboard.sideNavigation.clickBeneficiariesButton();
    });

    this.When(/^I click on Profile settings button$/, function () {
        return dashboard.sideNavigation.clickProfileSettingsButton();
    });

    this.When(/^I click on Navigation Alerts button$/, function () {
        return dashboard.sideNavigation.clickAlertsButton();
    });

    this.When(/^I click on Navigation Support button$/, function () {
        return dashboard.sideNavigation.clickSupportButton();
    });


    this.Then(/^I should see only following menu items$/, function (table) {
        const values = table.hashes().map(row => row.MenuItems);
        return dashboard.sideNavigation.menuItems
            .should.eventually.eql(values);
    });


    this.Then(/^I should see AIB Logo icon$/, function () {
        return dashboard.sideNavigation.isDisplayedAibLogo
            .should.eventually.be.true;
    });


    this.Then(/^I should see Messages icon$/, function () {
        return dashboard.sideNavigation.isDisaplayedMessagesIcon
            .should.eventually.be.true;
    });

    this.Then(/^I should see Alerts Notifications icon$/, function () {
        return dashboard.sideNavigation.isDisplayedAlertsNotificationsIcon
            .should.eventually.be.true;
    });

    this.Then(/^I should see Task List icon$/, function () {
        return dashboard.sideNavigation.isDisplayedTasklistIcon
            .should.eventually.be.true;
    });




    //---------------------------------------------------------------------------------------------------------

    this.When(/^I click "([^"]*)" button$/, function (button) {
        return dashboard.sideNavigation.clickSideMenuButton(button);

    });

    this.Then(/^I should land on "([^"]*)" Page$/, function (pageTitle) {
        return utils.getPageTitle().should.eventually.equal(pageTitle);

    });


    /**Open Pages By URL */

    this.Given(/^Account page is opened$/, function () {
        return accountsPage.openByUrl();

    });

    this.Given(/^Transactions page is opened$/, function () {
        return transactionsPage.openByUrl();

    });

    this.Given(/^User is on the Login page$/, function () {
        return loginPage.openByUrl();

    });

};