'use strict';
const AccountsPage = require('../../Pages/Accounts/AccountsPage');
const accountsPage = new AccountsPage();


module.exports = function () {
    this.World = require('../../Pages/support/world');

    this.Then(/^User has LTE to (\d+) Current accounts$/, function (countCurrentAccounts) {
        return accountsPage.pagination.currentAccountsTableLength
            .should.eventually.be.lte(countCurrentAccounts);
    });

    this.When(/^No link Load more under the Current accounts list$/, function () {
        return accountsPage.pagination.isVisibleloadMoreCurrentAccountsButton
            .should.eventually.be.false;
    });

    this.When(/^User can see link Load more under Current Accounts list$/, function () {
        return accountsPage.pagination.isVisibleloadMoreCurrentAccountsButton
            .should.eventually.be.true;

    });

    this.When(/^User clicks load more current accounts$/, function () {
        return accountsPage.pagination.loadMoreCurrentAccounts();
    });

    this.Then(/^User has LTE to (\d+) Credit cards accounts$/, function (countCreditCards) {
        return accountsPage.pagination.creditCardsTableLength
            .should.eventually.be.lte(countCreditCards);

    });

    this.When(/^No link Load more under the Credit cards accounts list$/, function () {
        return accountsPage.pagination.isVisibleloadMoreCreditCardsButton
            .should.eventually.be.false;

    });

    this.Then(/^User has LTE to (\d+) Deposit accounts$/, function (countDeposits) {
        return accountsPage.pagination.depositsTableLength
            .should.eventually.be.lte(countDeposits);

    });

    this.When(/^No link Load more under the Deposit accounts list$/, function () {
        return accountsPage.pagination.isVisibleLoadMoreDepositsButton
            .should.eventually.be.false;

    });

    this.Then(/^User has LTE to (\d+) Loan accounts$/, function (countLoans) {
        return accountsPage.pagination.loansTableLength
            .should.eventually.be.lte(countLoans);

    });

    this.When(/^No link Load more under the Loan accounts list$/, function () {
        return accountsPage.pagination.isVisibleLoadMoreLoansButton
            .should.eventually.be.false;

    });


    this.Then(/^User has GT (\d+) Current accounts$/, function (countCurrentAccounts) {
        return accountsPage.pagination.currentAccountsTableLength
            .should.eventually.be.gt(countCurrentAccounts);

        // return accountsPage.pagination.loadMoreCurrentAccountsMaybe(a);

    });

    this.When(/^User can see link Load more under Credit cards list$/, function () {
        return accountsPage.pagination.isVisibleloadMoreCreditCardsButton.should.eventually.be.true;

    });

    this.When(/^User clicks load more credit cards$/, function () {
        return accountsPage.pagination.loadMoreCreditCards();

    });

    this.Then(/^User has GT (\d+) Credit cards$/, function (countCreditCards) {
        return accountsPage.pagination.creditCardsTableLength
            .should.eventually.be.gt(countCreditCards);

    });

    this.When(/^User can see link 'Load more' under Current Accounts list$/, function () {
        return accountsPage.pagination.isVisibleloadMoreCurrentAccountsButton.should.eventually.be.true;

    });

    this.Then(/^User clicks 'load more Current Accounts'$/, function () {
        return accountsPage.pagination.loadMoreCurrentAccounts();

    });

    this.Then(/^User has GT (\d+) Current Accounts$/, function (countCurrentAccounts) {
        return accountsPage.pagination.currentAccountsTableLength
            .should.eventually.be.gt(countCurrentAccounts);

    });

    this.When(/^User can see link 'Load more' under Deposits list$/, function () {
        return accountsPage.pagination.isVisibleLoadMoreDepositsButton.should.eventually.be.true;

    });

    this.When(/^User clicks 'load more Deposits'$/, function () {
        return accountsPage.pagination.loadMoreDeposits();

    });

    this.Then(/^User has GT (\d+) Deposits$/, function (countDeposits) {
        return accountsPage.pagination.currentAccountsTableLength
            .should.eventually.be.gt(countDeposits);

    });

    this.When(/^User can see link 'Load more' under Loans list$/, function () {
        return accountsPage.pagination.isVisibleLoadMoreLoansButton.should.eventually.be.true;

    });

    this.When(/^User clicks 'load more Loans'$/, function () {
        return accountsPage.pagination.loadMoreLoans();

    });

    this.Then(/^User has GT (\d+) Loans$/, function (countLoans) {
        return accountsPage.pagination.currentAccountsTableLength
            .should.eventually.be.gt(countLoans);

    });

    //-----------TilesLoadMore-----------------------------

    this.When(/^User can see Load more button$/, function () {
        return accountsPage.pagination.isVisibleLoadMoreButton.should.eventually.be.true;
    });

    this.Then(/^User clicks load more button$/, function () {
        return accountsPage.pagination.loadMoreTiles();

    });

    this.Then(/^User sees gt (\d+) credit cards$/, function (countCreditCardTiles) {
        return accountsPage.pagination.allCretditCardTilesCount
            .should.eventually.be.gt(countCreditCardTiles);
    });

};
