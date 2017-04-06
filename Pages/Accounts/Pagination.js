'use strict';
const AbstractContainer = require('./../abstract/AbstractContainer');

module.exports = class Pagination extends AbstractContainer {
    constructor() { super('aib-commercial/closed-environment/accounts'); }

    get $$currentAccountsTableRows() { return $$('.type-currentaccounts tbody > tr'); }
    get $$creditCardsTableRows() { return $$('.type-creditcards tbody > tr'); }
    get $$depositsTableRows() { return $$('.type-termdeposits tbody > tr'); }
    get $$loansTableRows() { return $$('.type-loans tbody > tr'); }
    get $$allTiles() { return $$('.aib-accounts-tile'); }
    get $$creditCardTiles() { return $$('[heading="Credit Cards"] > ui-aib-accounts-tile-ng'); }

    get $loadMoreButton() { return element(by.testHook('loadMore')); }
    get $loadMoreCurrentAccounts() { return element(by.testHook('loadMoreCurrentAccounts')); }
    get $loadMoreCreditCards() { return element(by.testHook('loadMoreCreditCards')); }
    get $loadMoreDeposits() { return element(by.testHook('loadMoreTermDeposits')); }
    get $loadMoreLoans() { return element(by.testHook('loadMoreLoans')); }

    get allTilesCount() { return this.$$allTiles.count(); }
    get allCretditCardTilesCount() { return this.$$creditCardTiles.count(); }
    get currentAccountsTableLength() { return this.$$currentAccountsTableRows.count(); }
    get creditCardsTableLength() { return this.$$creditCardsTableRows.count(); }
    get depositsTableLength() { return this.$$depositsTableRows.count(); }
    get loansTableLength() { return this.$$loansTableRows.count(); }

    loadMoreTiles() { return this.$loadMoreButton.click(); }
    loadMoreCurrentAccounts() { return this.$loadMoreCurrentAccounts.click(); }
    loadMoreCreditCards() { return this.$loadMoreCreditCards.click(); }
    loadMoreDeposits() { return this.$loadMoreDeposits.click(); }
    loadMoreLoans() { return this.$loadMoreLoans.click(); }

    get isVisibleLoadMoreButton() { return this.$loadMoreButton.isDisplayed(); }
    get isVisibleloadMoreCurrentAccountsButton() { return this.$loadMoreCurrentAccounts.isDisplayed(); }
    get isVisibleloadMoreCreditCardsButton() { return this.$loadMoreCreditCards.isDisplayed(); }
    get isVisibleLoadMoreDepositsButton() { return this.$loadMoreDeposits.isDisplayed(); }
    get isVisibleLoadMoreLoansButton() { return this.$loadMoreLoans.isDisplayed(); }

    loadMoreCurrentAccountsMaybe() {
        return Promise.all([this.currentAccountsTableLength, this.isVisibleloadMoreCurrentAccountsButton])
            .then(vals => vals[0] > 12 && vals[1] && this.loadMoreCurrentAccounts());

    }





};