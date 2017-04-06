'use strict';
const AccountsPage = require('../../Pages/Accounts/AccountsPage');
const accountsPage = new AccountsPage();


module.exports = function () {
    this.World = require('../../Pages/support/world');

    this.Then(/^I see a widgetProductSummary$/, function () {
        return accountsPage.isDisplayedWidgetProductSumary.should.eventually.be.true;

    });

    this.Then(/^I see a Card Name$/, function () {
        return accountsPage.accountsTableView.$currentAccountsTableName.getText().should.eventually.be('Current account');

    });

    this.Then(/^I see account number "([^"]*)" should have "([^"]*)"$/, function (index, title) {
        return accountsPage.productSumaryContainer.getAccountTitleByIndex(index).should.eventually.equal(title);
    });


    this.When(/^I click on "([^"]*)" icon of a current account with index "([^"]*)" in table view$/, function (icon, index) {
        return accountsPage.productSumaryContainer.clickCurrentAccountIconInTable(icon, index);

    });

    // this.When(/^I click on "([^"]*)" icon of a term deposit with index "([^"]*)" in table view$/, function (arg1, arg2, callback) {
    //     // Write code here that turns the phrase above into concrete actions
    //     callback(null, 'pending');
    // });


};
