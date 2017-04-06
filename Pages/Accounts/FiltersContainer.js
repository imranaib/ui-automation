'use strict';
const AbstractContainer = require('./../abstract/AbstractContainer');

module.exports = class FiltersContainer extends AbstractContainer {
    constructor() { super('aib-commercial/closed-environment/accounts'); }

    get $filtersPopOver() { return $('.popover-content'); }
    get $applyButton() { return element(by.xpath('//button[contains(.,"Apply")]')); }
    get $currentAccountsCheckbox() { return element(by.css('#kind-filter-currentAccounts')); }
    get $teamDepositsCheckbox() { return element(by.css('#kind-filter-termDeposits')); }
    get $loansCheckbox() { return element(by.css('#kind-filter-loans')); }
    get $creditCardsCheckbox() { return element(by.css('#kind-filter-creditCards')); }
    get $currentAccountsLabel() { return element(by.css('[for="kind-filter-currentAccounts"]')); }
    get $teamDepositsLabel() { return element(by.css('[for="kind-filter-termDeposits"]')); }
    get $loansLabel() { return element(by.css('[for="kind-filter-loans"]')); }
    get $creditCardsLabel() { return element(by.css('[for="kind-filter-creditCards"]')); }
    get $filtersBtn() { return element(by.testHook('filters')); }

    get $away() { return $('#id="main"'); }

    get $currentAccountsDeselect() { return element(by.xpath('//label[@class="kind-background-currentAccounts"]')); }
    get $creditCardsDeselect() { return element(by.xpath('//label[@class="kind-background-creditCards"]]')); }
    get $depositCardsDeselect() { return element(by.xpath('//label[@class="kind-background-termDeposits"]')); }
    get $loansCardsDeselect() { return element(by.xpath('//label[@class="kind-background-loans"]')); }

    clickApplyButton() { return this.$applyButton.click(); }
    openFilterPopup() { return this.$filtersBtn.click(); }
    clickAway() { return this.$away.click(); }

    deselectCurrentAccounts() { return this.$currentAccountsDeselect.click(); }
    deselectCreditCards() { return this.$creditCardsDeselect.click(); }
    deselectDepoistis() { return this.$depositCardsDeselect.click(); }
    deselectLoans() { return this.$loansCardsDeselect.click(); }

    get isDisplayedCurrentAccountsFilterLabel() { return this.$currentAccountsDeselect.isDisplayed(); }
    get isDisplayedCreditCardsFilterLabel() { return this.$creditCardsDeselect.isDisplayed(); }
    get isDisplayedDepoistisFilterLabel() { return this.$depositCardsDeselect.isDisplayed(); }
    get isDisplayedLoansFilterLabel() { return this.$loansCardsDeselect.isDisplayed(); }

    /** @param {boolean} shouldBeChecked */
    checkCurrentAccountFilter(shouldBeChecked) { return this.selectCheckbox(this.$currentAccountsCheckbox, this.$currentAccountsLabel, shouldBeChecked); }

    /** @param {boolean} shouldBeChecked */
    checkTeamDepositsFilter(shouldBeChecked) { return this.selectCheckbox(this.$teamDepositsCheckbox, this.$teamDepositsLabel, shouldBeChecked); }

    /** @param {boolean} shouldBeChecked */
    checkLoansFilter(shouldBeChecked) { return this.selectCheckbox(this.$loansCheckbox, this.$loansLabel, shouldBeChecked); }

    /** @param {boolean} shouldBeChecked */
    checkCreditCardsFilter(shouldBeChecked) { return this.selectCheckbox(this.$creditCardsCheckbox, this.$creditCardsLabel, shouldBeChecked); }

    /**
     * @param {protractor.ElementFinder} $checkbox
     * @param {protractor.ElementFinder} $label
     * @param {boolean} shouldBeChecked
     */
    selectCheckbox($checkbox, $label, shouldBeChecked) {
        return $checkbox.isSelected().then(selected => {
            if (selected !== shouldBeChecked) {
                return $label.click();
            }
        });
    }

};

