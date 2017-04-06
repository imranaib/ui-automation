'use strict';
const AbstractContainer = require('./../abstract/AbstractContainer');

module.exports = class FiltersContainer extends AbstractContainer {
    constructor() { super('aib-commercial/transactions'); }

    get $searchTransactionsField() { return element(by.testHook('transactionSearchField')); }
    get $searchTransactionsButton() { return element(by.testHook('transactionSearchButton')); }
    get $transactionDescriptionResult() { return $('.transaction-description'); }

    clickSearchTransactions() { return this.$searchTransactionsButton.click(); }
    enterSearchCriteria(searchText) { return this.$searchTransactionsField.sendKeys(searchText); }

    clearSearchTransactionsField() { return this.$searchTransactionsField.clear(); }

    get descriptionText() { return this.$transactionDescriptionResult.getText(); }


};

