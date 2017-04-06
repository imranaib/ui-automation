'use strict';
const TransactionsPage = require('./../../Pages/Transactions/TransactionsPage');
const transactionsPage = new TransactionsPage();


module.exports = function () {
    this.World = require('../../Pages/support/world');

    this.Given(/^Accounts are loaded$/, function () {
        return transactionsPage.accountSelector.waitForAccounts().should.eventually.be.true;

    });


    this.Given(/^I select an account with id "([^"]*)"$/, function (index) {
        return transactionsPage.clickAccountSelectorButton()
            .then(() => transactionsPage.accountSelector.selectAnAccount(index));
    });

    this.Given(/^I am on Trasactions page$/, function () {
        return transactionsPage.openByUrl();
    });

    this.When(/^I click account selector$/, function () {
        return transactionsPage.clickAccountSelectorButton();
    });

    this.Then(/^I can see label "([^"]*)" label in the selected account in Account Selector$/, function (label) {
        return transactionsPage.labelAvailableFunds.should.eventually.eql(label);
    });

    this.Then(/^I should see the Account Name or Account Nickname as "([^"]*)"$/, function (accountName) {
        return transactionsPage.accountSelector.labelAccountName
            .should.eventually.equal(accountName);
    });

    this.Then(/^I should see the Iban as "([^"]*)"$/, function (iban) {
        return transactionsPage.accountSelector.ibanValue
            .should.eventually.equal(iban);
    });

    this.Then(/^I should see the Currency of Balance as "([^"]*)"$/, function (currency) {
        return transactionsPage.accountSelector.valueBalance
            .should.eventually.contain(currency);
    });

    this.Then(/^I should see the Currency of Available Funds as "([^"]*)"$/, function (currency) {
        return transactionsPage.accountSelector.valueAvailableFunds
            .should.eventually.contain(currency);
    });

    this.Then(/^I should see the Balance as "([^"]*)"$/, function (balance) {
        return transactionsPage.accountSelector.valueBalance
            .should.eventually.equal(balance);
    });

    this.Then(/^I should see the Available Funds as "([^"]*)"$/, function (currency) {
        return transactionsPage.accountSelector.valueAvailableFunds
            .should.eventually.equal(currency);
    });

};
