'use strict';
const ClosedEnvAbstractPage = require('./../abstract/ClosedEnvAbstractPage');
const SearchWidget = require('./SearchWidget');

module.exports = class AccountsPage extends ClosedEnvAbstractPage {
    constructor() { super('aib-commercial/transactions'); }
    get searchWidget() { return new SearchWidget(); }
    get $accountSelectorButton() { return element(by.testHook('selectAccountDropDownToggle')); }

    clickAccountSelectorButton() { return this.$accountSelectorButton.click(); }

    get $accountsInSelectorHeading() { return $('.currentAccounts'); }

    get $$currentAccountsGroup() { return $$('.uib-dropdown-menu.dropdown-menu > li'); }
    // waitForAccounts() { return browser.wait(this.$$currentAccountsGroup.isDisplayed(), 8000); }
    waitForAccounts() { return browser.wait(this.$accountsInSelectorHeading.isPresent(), 8000); }

    get countCurrentAccountsInSelector() { return this.$$currentAccountsGroup.count(); }
    selectAnAccount(index) { return this.$$currentAccountsGroup.get(index).click(); }

    get $accountName() { return this.$accountSelectorButton.$('.account-name'); }
    get $iban() { return this.$accountSelectorButton.$('.account-number'); }
    get $balanceLabel() { return this.$accountSelectorButton.$('.account-balance .aib-tile-small-text'); }
    get $balanceValue() { return this.$accountSelectorButton.$('.account-balance [data-role="amount"]'); }
    get $availableFundsLabel() { return this.$accountSelectorButton.$('.account-amount .aib-tile-small-text'); }
    get $availableFundsValue() { return this.$accountSelectorButton.$('.account-amount [data-role="amount"]'); }


    get $ccAvailableFundsLabel() { return this.$accountSelectorButton.$('.account-amount .aib-tile-small-text'); }
    get $ccAvailableFundsValue() { return this.$accountSelectorButton.$('.account-amount [data-role="amount"]'); }
    get $ccBalanceLabel() { return this.$accountSelectorButton.$('.account-balance .aib-tile-small-text'); }
    get $ccBalanceValue() { return this.$accountSelectorButton.$('.account-balance [data-role="amount"]'); }

    get labelAccountName() { return this.$accountName.getText(); }
    get ibanValue() { return this.$iban.getText(); }
    get labelBalance() { return this.$balanceLabel.getText(); }
    get valueBalance() { return this.$balanceValue.getText(); }
    get labelAvailableFunds() { return this.$availableFundsLabel.getText(); }
    get valueAvailableFunds() { return this.$availableFundsValue.getText(); }


    get selectedDropDownWithAccount() { return this.$accountSelectorButton.getText(); }

};

