'use strict';
const TransactionsPage = require('./../../Pages/Transactions/TransactionsPage');
const transactionsPage = new TransactionsPage();


module.exports = function () {
    this.World = require('../../Pages/support/world');

    this.Given(/^I select account Paul Simpson$/, function () {
        return transactionsPage.clickAccountSelectorButton()
            .then(() => transactionsPage.selectPaulSimpsonAcc());

    });

    this.When(/^I enter "([^"]*)" into the search filed$/, function (searchText) {
        return transactionsPage.searchWidget.clearSearchTransactionsField()
            .then(() => transactionsPage.searchWidget.enterSearchCriteria(searchText));

    });

    this.When(/^I click search transactions button$/, function () {
        return transactionsPage.searchWidget.clickSearchTransactions();

    });

    this.Then(/^I shuld see "([^"]*)" reusult displayed in the transactions table$/, function (searchText) {
        return transactionsPage.searchWidget.descriptionText.should.eventually.to.contain(searchText);

    });


};
