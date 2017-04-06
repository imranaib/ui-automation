'use strict';
const ClosedEnvAbstractPage = require('./../abstract/ClosedEnvAbstractPage');
const FiltersContainer = require('./FiltersContainer');
const ProductSummaryContainer = require('./ProductSummaryContainer');
const Pagination = require('./Pagination');
const AccountsTableView = require('./AccountsTableView');
const AccountsTileView = require('./AccountsTileView');

module.exports = class AccountsPage extends ClosedEnvAbstractPage {
    constructor() { super('aib-commercial/accounts'); }

    get filtersContainer() { return new FiltersContainer(); }
    get productSumaryContainer() { return new ProductSummaryContainer(); }
    get pagination() { return new Pagination(); }
    get accountsTableView() { return new AccountsTableView(); }
    get accountsTileView() { return new AccountsTileView(); }

    get $widgetProductSumary() { return $('.widget-bb-product-summary-ng'); }

    get $tileViewButton() { return element(by.testHook('tiles')); }
    get $tableViewButton() { return element(by.testHook('table')); }
    get $filtersBtn() { return element(by.testHook('filters')); }

    get $currntAccountsHeading() { return $('[heading="Current Accounts"]'); }

    get $currentAccountsTableHeader() { return element(by.xpath('//h3[contains(.,"Current Accounts")]')); }
    get $depositsTableHeader() { return element(by.xpath('//h3[contains(.,"Deposit")]')); }
    get $loansTableHeader() { return element(by.xpath('//h3[contains(.,"Loan")]')); }
    get $creditCardsTableHeader() { return element(by.xpath('//h3[contains(.,"Credit Cards")]')); }

    get $$filteringMenuButtons() { return $$('.aib-accounts-filtering > button'); }
    get filteringMenu() { return this.$$filteringMenuButtons.isDisplayed(); }

    get $tableView() { return element(by.testHook('view.table')); }
    get $tileView() { return element(by.testHook('view.tiles')); }

    get isDisplayedTileViewButton() { return this.$tileViewButton.isDisplayed(); }
    get isDisplayedTableViewButton() { return this.$tableViewButton.isDisplayed(); }
    get isDisplayedFiltersBtn() { return this.$filtersBtn.isDisplayed(); }
    get isDisplayedWidgetProductSumary() { return this.$widgetProductSumary.isDisplayed(); }
    isLoadedCurrentAccounts() { return browser.wait(() => this.$tileView.isDisplayed(), 60 * 1000); }
    // isLoadedCurrentAccounts() { return this.$tileView.isDisplayed(); }

    get isDisplayedWidgetNavigation() { return this.$widgetAibNavigation.isDisplayed(); }
    get isDisplayedTableView() { return this.$tableView.isDisplayed(); }
    get isDisplayedTileView() { return this.$tileView.isDisplayed(); }

    get currentAccountsListIsDisplayed() { return this.$currentAccountsTableHeader.isDisplayed(); }
    get depositsListIsDisplayed() { return this.$depositsTableHeader.isDisplayed(); }
    get loansListIsDisplayed() { return this.$loansTableHeader.isDisplayed(); }
    get creditCardsListIsDisplayed() { return this.$creditCardsTableHeader.isDisplayed(); }

    get tileDeposits() { return element(by.by.xpath('//a[@ heading="Term Deposit"]')); }
    get tileLoans() { return element(by.by.xpath('//a[@ heading="Loans"]')); }

    toggleTableViewOn() { return this.$tableViewButton.click(); }
    toggleTileViewOn() { return this.$tileViewButton.click(); }

};

