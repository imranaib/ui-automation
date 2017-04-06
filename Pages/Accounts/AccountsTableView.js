'use strict';
const AbstractContainer = require('./../abstract/AbstractContainer');

module.exports = class FiltersContainer extends AbstractContainer {
    constructor() { super('aib-commercial/closed-environment/accounts'); }

    get $$currentAccountsTable() { return $$('.aib-accounts-table type-currentaccounts'); }

    get $currentAccountsTableName() { return element(by.testHook('currentaccountsColumnName')); }
    get $ibanColumName() { return element(by.testHook('ibanColumnName')); }
    get $balanceColumName() { return element(by.testHook('balanceColumnName')); }
    get $availableFundsColumName() { return element(by.testHook('availableFundsColumnName')); }

    get $ccAccountNumberInfo() { return element(by.xpath('//span[contains(.,"Account number")]')); }
    get $ccExpiryDate() { return element(by.xpath('//span[contains(.,"Card Expiry Date")]')); }
    get $ccBalance() { return element(by.xpath('//span[contains(.,"Balance")]')); }
    get $ccRemainingCredit() { return element(by.xpath('//span[contains(.,"Remaining")]')); }
    get $ccPaymentDue() { return element(by.xpath('//span[contains(.,"Payment Due")]')); }
    get $ccPaymentDate() { return element(by.xpath('//span[contains(.,"Payment Date")]')); }
    get $ccAccountInterestRate() { return element(by.xpath('//span[contains(.,"Account Interest Rate")]')); }

    get isVisibleCreditCardAccountNumber() { return this.$ccAccountNumberInfo.isDisplayed(); }
    get isVisibleCreditCardExpiryDate() { return this.$ccExpiryDate.isDisplayed(); }
    get isVisibleCreditCardBalance() { return this.$ccBalance.isDisplayed(); }
    get isVisibleCreditCardRemainingCredit() { return this.$ccRemainingCredit.isDisplayed(); }
    get isVisibleCreditCardPaymentDue() { return this.$ccPaymentDue.isDisplayed(); }
    get isVisibleCreditCardPaymentDate() { return this.$ccPaymentDate.isDisplayed(); }
    get isVisibleCreditCardAccountInterestRate() { return this.$ccAccountInterestRate.isDisplayed(); }

    //Rocket Science: isVisibleAccontNumberInInfo(label) { return element.all(by.xpath(`//span[text() = '${label}']`)).count().then(count => count > 0); }

};

