'use strict';
const AccountsPage = require('../../Pages/Accounts/AccountsPage');
const accountsPage = new AccountsPage();


module.exports = function () {
    this.World = require('./../../Pages/support/world');

    this.Given(/^I open Filters Dropdown$/, function () {
        return accountsPage.filtersContainer.openFilterPopup();

    });

    this.When(/^I check Current Accounts as ([-\+])$/, function (checked) {
        checked = checked === '+';

        accountsPage.filtersContainer.checkCurrentAccountFilter(checked);
    });

    this.When(/^I check Team Deposites as ([-\+])$/, function (checked) {
        checked = checked === '+';

        accountsPage.filtersContainer.checkTeamDepositsFilter(checked);
    });

    this.When(/^I check Loans as ([-\+])$/, function (checked) {
        checked = checked === '+';

        accountsPage.filtersContainer.checkLoansFilter(checked);
    });

    this.When(/^I check Credit Cards as ([-\+])$/, function (checked) {
        checked = checked === '+';

        accountsPage.filtersContainer.checkCreditCardsFilter(checked);
    });

    this.When(/^I click Apply button$/, function () {
        return accountsPage.filtersContainer.clickApplyButton();
    });

    this.Then(/^I should see Current Accounts result: ([-\+])$/, function (shouldSee) {
        shouldSee = shouldSee === '+';

        return accountsPage.currentAccountsListIsDisplayed
            .should.eventually.equal(shouldSee);
    });

    this.Then(/^I should see Team Deposites result: ([-\+])$/, function (shouldSee) {
        shouldSee = shouldSee === '+';

        return accountsPage.depositsListIsDisplayed
            .should.eventually.equal(shouldSee);
    });

    this.Then(/^I should see Loans result: ([-\+])$/, function (shouldSee) {
        shouldSee = shouldSee === '+';

        return accountsPage.loansListIsDisplayed
            .should.eventually.equal(shouldSee);
    });


    this.Then(/^I should see Credit Cards result: ([-\+])$/, function (shouldSee) {
        shouldSee = shouldSee === '+';

        return accountsPage.creditCardsListIsDisplayed
            .should.eventually.equal(shouldSee);
    });

    this.When(/^I Click away from filters popup$/, function () {
        return accountsPage.filtersContainer.clickAway();
    });





    //-----Deselect Using Filter Labels steps -----------------------


};
