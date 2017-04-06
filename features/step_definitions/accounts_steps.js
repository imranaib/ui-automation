'use strict';
const AccountsPage = require('./../../Pages/Accounts/AccountsPage');
const accountsPage = new AccountsPage();


module.exports = function () {
    this.World = require('../../Pages/support/world');

    this.Given(/^The view is set to tiles by default$/, function () {
        return accountsPage.isDisplayedTileView
            .should.eventually.be.true;
    });

    this.When(/^I click the toggle table view button$/, function () {
        return accountsPage.toggleTableViewOn();
    });

    this.Given(/^Current Accounts are loaded$/, function () {
        return accountsPage.isLoadedCurrentAccounts().should.eventually.be.true;

    });


    this.When(/^I click the toggle tile view button$/, function () {
        return accountsPage.toggleTileViewOn();
    });

    this.Then(/^I should see table view$/, function () {
        return accountsPage.isDisplayedTableView
            .should.eventually.be.true;
    });

    this.Then(/^I should see tile view$/, function () {
        return accountsPage.isDisplayedTileView
            .should.eventually.be.true;
    });

    this.Then(/^I see the sorting tileView$/, function () {
        return accountsPage.isDisplayedTileViewButton
            .should.eventually.be.true;

    });

    this.Then(/^I see the sorting tableView$/, function () {
        return accountsPage.isDisplayedTableViewButton
            .should.eventually.be.true;
    });

    this.Then(/^I see the sorting filters$/, function () {
        return accountsPage.isDisplayedFiltersBtn
            .should.eventually.be.true;

    });


};
