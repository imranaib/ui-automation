'use strict';
const ClosedEnvAbstractPage = require('./../abstract/ClosedEnvAbstractPage');

module.exports = class AccountsPage extends ClosedEnvAbstractPage {
    constructor() { super('aib-commercial/transactions'); }

    get $transactionDate() { return element(by.testHook('transactionDate')); }
    get $transactionDescription() { return element(by.testHook('transactionDescription')); }
    get $transactionType() { return element(by.testHook('transactionType')); }
    get $transactionAmount() { return element(by.testHook('transactionAmount')); }
    get $transactionAdditionalInfo() { return element(by.testHook('transactionAdditionalInfo')); }
    get $transactionPaymentRefID() { return element(by.testHook('transactionPaymentRefID')); }

    $transaction(id) { return element(by.testHook(`transaction.${id}`)); }
    selectTransactionByID(id) { return element(by.testHook(`transaction.${id}`)).$('.caret').click(); }

    viewTransactionDate(id) { return this.$transaction(id).element(by.testHook('transactionDate')).getText(); }
    viewTransactionDescription(id) { return this.$transaction(id).element(by.testHook('transactionDescription')).getText(); }
    viewTransactionType(id) { return this.$transaction(id).element(by.testHook('transactionType')).getText(); }
    viewTransactionAmount(id) { return this.$transaction(id).element(by.testHook('transactionAmount')).getText(); }
    viewTransactionAdditionalInfo(id) { return this.$transaction(id).element(by.testHook('transactionAdditionalInfo')).getText(); }
    viewTransactionPaymentRefID(id) { return this.$transaction(id).element(by.testHook('transactionPaymentRefID')).getText(); }

    get $noTransactionsMessage() { return element(by.testHook('noTransactionsMessageContainer')); }
    get noTransactionsMessageText() { return this.$noTransactionsMessage.getText(); }



};

