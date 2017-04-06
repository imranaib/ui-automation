'use strict';
const TransactionDetailsPage = require('./../../Pages/Transactions/TransactionDetailsPage');
const transactionDetails = new TransactionDetailsPage();

module.exports = function () {
    this.World = require('../../Pages/support/world');

    this.When(/^I select a transaction with ID "([^"]*)"$/, function (transactionID) {
        return transactionDetails.selectTransactionByID(transactionID);

    });

    this.Then(/^I should see the transaction's "([^"]*)" title as "([^"]*)"$/, function (id, title) {
        return transactionDetails.viewTransactionDescription(id).should.eventually.equal(title);

    });

    this.Then(/^I should see the transaction's "([^"]*)" date as "([^"]*)"$/, function (id, date) {
        return transactionDetails.viewTransactionDate(id).should.eventually.equal(date);

    });

    this.Then(/^I should see the transaction's "([^"]*)" additional information as "([^"]*)"$/, function (id, info) {
        return transactionDetails.viewTransactionAdditionalInfo(id).should.eventually.equal(info);

    });

    this.Then(/^I should see the transaction's "([^"]*)" amount as "([^"]*)"$/, function (id, amount) {
        return transactionDetails.viewTransactionAmount(id).should.eventually.equal(amount);

    });

    this.Then(/^I should see the transaction's "([^"]*)" currency as "([^"]*)"$/, function (id, currency) {
        return transactionDetails.viewTransactionAmount(id).should.eventually.contain(currency);
    });

    this.Then(/^I should see the transaction's "([^"]*)" type as "([^"]*)"$/, function (id, type) {
        return transactionDetails.viewTransactionType(id).should.eventually.equal(type);
    });

    this.Then(/^I should see the transaction's "([^"]*)" Payment Reference ID as "([^"]*)"$/, function (id, RefID) {
        return transactionDetails.viewTransactionPaymentRefID(id).should.eventually.equal(RefID);

    });

    this.Then(/^No transactions Message is shown:$/, function (message) {
        return transactionDetails.noTransactionsMessageText.should.eventually.equal(message);

    });




};
