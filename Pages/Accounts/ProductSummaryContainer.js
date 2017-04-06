'use strict';
const AbstractContainer = require('./../abstract/AbstractContainer');

module.exports = class FiltersContainer extends AbstractContainer {
    constructor() { super('aib-commercial/closed-environment/accounts'); }

    get $$currentAccountsTableRows() { return $$('.type-currentaccounts tbody > tr'); }
    get $$creditCardsTableRows() { return $$('.type-creditcards tbody > tr'); }
    get $$termDepositsTableRows() { return $$('.type-termdeposits tbody > tr'); }
    get $$loansTableRows() { return $$('.type-loans tbody > tr'); }


    $iconByIndexInTable(index, icon) { return this.$getCurrentAccountsRowByIndex(index).element(by.testHook(`${icon}`)); }
    clickCurrentAccountIconInTable(icon, index) { return this.$iconByIndexInTable(index, icon).click(); }


    get $$currentAccountTiles() { return $$('[heading="Current Accounts"] > ui-aib-accounts-tile-ng'); }
    get currentAccountsTilesCount() { return this.$$currentAccountTiles.count(); }
    $getCurrentAccountsTileByIndex(index) { return this.$$currentAccountTiles.get(index); }

    get currentAccountsRowsCount() { return this.$$currentAccountsTableRows.count(); }
    $getCurrentAccountsRowByIndex(index) { return this.$$currentAccountsTableRows.get(index); }
    $getCurrentAccountsInfoButtonByIndex(index) { return this.$getCurrentAccountsRowByIndex(index).element(by.testHook('info')); }
    $getCurrentAccountsTransactionsButtonByIndex(index) { return this.$getCurrentAccountsRowByIndex(index).element(by.testHook('transactions')); }
    $getCurrentAccountsExchangeButtonByIndex(index) { return this.$getCurrentAccountsRowByIndex(index).element(by.testHook('exchange')); }

    clickCurrentAccountsInfoByIndex(index) { return this.$getCurrentAccountsInfoButtonByIndex(index).click(); }
    clickCurrentAccountsTransactionsButtonByIndex(index) { return this.$getCurrentAccountsTransactionsButtonByIndex(index).click(); }
    clickCurrentAccountsExchangeButtonByIndex(index) { return this.$getCurrentAccountsExchangeButtonByIndex(index).click(); }

    get creditCardsRowsCount() { return this.$$creditCardsTableRows.count(); }
    $getCreditCardsRowByIndex(index) { return this.$$creditCardsTableRows.get(index); }
    $getCreditCardsInfoButtonByIndex(index) { return this.$getCreditCardsRowByIndex(index).element(by.testHook('info')); }
    $getCreditCardsTransactionsButtonByIndex(index) { return this.$getCreditCardsRowByIndex(index).element(by.testHook('transactions')); }
    $getCreditCardsExchangeButtonByIndex(index) { return this.$getCreditCardsRowByIndex(index).element(by.testHook('exchange')); }

    clickCreditCardsInfoByIndex(index) { return this.$getCreditCardsInfoButtonByIndex(index).click(); }
    clickCreditCardsTransactionsButtonByIndex(index) { return this.$getCreditCardsTransactionsButtonByIndex(index).click(); }
    clickCreditCardsExchangeButtonByIndex(index) { return this.$getCreditCardsExchangeButtonByIndex(index).click(); }

    isDisplayedCurrentAccountByIndex(index) { return this.$getCurrentAccountsRowByIndex(index).isDisplayed(); }

    getAccountTitleByIndex(index) { return this.$getCurrentAccountsRowByIndex(index).$('td:first-child').getText(); }
    getTileAccountTitleByIndex(index) { return this.$getCurrentAccountsTileByIndex(index).element(by.testHook('tileName')).getText(); }



};