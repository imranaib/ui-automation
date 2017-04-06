'use strict';
const AccountsPage = require('./../../Pages/Accounts/AccountsPage');
const accountsPage = new AccountsPage();


module.exports = function () {
    this.World = require('../../Pages/support/world');

    /** Tile View */

    this.When(/^I click on Mastercard-986 info icon$/, function () {
        return accountsPage.productSumaryContainer.clickCreditCardsInfoByIndex(2);

    });

    /** Rocket Science here: */
    // this.Then(/^I can see following Credit Card attributes$/, function (table) {
    //     /** @type {string[]} */
    //     const attributes = table.hashes().map(row => row.ATTRIBUTE); // ['account number', ..]

    //     return Promise.all(
    //         attributes.map(attribute => accountsPage.accountsTableView.isVisibleAccontNumberInInfo(attribute))
    //     ).should.eventually.not.contain(false);
    // });
    this.Then(/^I can see Account number of Mastercard-986$/, function () {
        return accountsPage.accountsTableView.isVisibleCreditCardAccountNumber.should.eventually.be.true;

    });

    this.Then(/^I can see Card Expiry Date of Mastercard-986$/, function () {
        return accountsPage.accountsTableView.isVisibleCreditCardExpiryDate.should.eventually.be.true;

    });

    this.Then(/^I can see Balance of Mastercard-986$/, function () {
        return accountsPage.accountsTableView.isVisibleCreditCardBalance.should.eventually.be.true;

    });

    this.Then(/^I can see Remaining Credit of Mastercard-986$/, function () {
        return accountsPage.accountsTableView.isVisibleCreditCardRemainingCredit.should.eventually.be.true;

    });


    this.Then(/^I can see Payment Due of Mastercard-986$/, function () {
        return accountsPage.accountsTableView.isVisibleCreditCardPaymentDue.should.eventually.be.true;

    });


    this.Then(/^I can see Payment Date of Mastercard-986$/, function () {
        return accountsPage.accountsTableView.isVisibleCreditCardPaymentDate.should.eventually.be.true;

    });


    this.Then(/^I can see Account Interest Rate of of Mastercard-986$/, function () {
        return accountsPage.accountsTableView.isVisibleCreditCardAccountInterestRate.should.eventually.be.true;

    });

};