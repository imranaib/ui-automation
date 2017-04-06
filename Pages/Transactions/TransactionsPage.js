'use strict';
const ClosedEnvAbstractPage = require('./../abstract/ClosedEnvAbstractPage');
const SearchWidget = require('./SearchWidget');
const AccountSelector = require('./AccountSelector');

module.exports = class AccountsPage extends ClosedEnvAbstractPage {
    constructor() { super('aib-commercial/transactions'); }
    get searchWidget() { return new SearchWidget(); }
    get accountSelector() { return new AccountSelector(); }

    get $$currentAccountsGroup() { return element.all(by.xpath('//h3[contains(.,"Current Accounts")] > li')); }
    get $$creditCardsGroup() { return $$('[//h3[contains(.,"Credit Cards")]'); }
    get $$depositsGroup() { return $$('[//h3[contains(.,"Deposit Accounts")]]'); }
    get $$loansGroup() { return $$('[//h3[contains(.,"Loan Accounts")]]'); }

    get $accountSelectorButton() { return element(by.testHook('selectAccountDropDownToggle')); }
    get selectedDropDownWithAccount() { return this.$accountSelectorButton.getText(); }

    get $availableFundsOfaSelectedAccount() { return $('[test-hook="selectAccountDropDownToggle"] .account-amount .aib-tile-small-text'); }
    get labelAvailableFunds() { return this.$availableFundsOfaSelectedAccount.getText(); }

    clickAccountSelectorButton() { return this.$accountSelectorButton.click(); }

    get countCurrentAccountsInSelector() { return this.$$currentAccountsGroup.count(); }


};

