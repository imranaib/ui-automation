'use strict';
const AccountsPage = require('../../Pages/Accounts/AccountsPage');
const accountsPage = new AccountsPage();

module.exports = function () {
    this.World = require('../../Pages/support/world');

    this.Then(/^I see account tile number "([^"]*)" should have "([^"]*)"$/, function (index, title) {
        return accountsPage.productSumaryContainer.getTileAccountTitleByIndex(index).should.eventually.equal(title);
    });

    this.Then(/^I can see label "([^"]*)" in the "([^"]*)" "([^"]*)" account in Tile View$/, function (label, accountType, index) {
        return accountsPage.accountsTileView.availableFundsLabel(accountType, index)
            .should.eventually.equal(label);
    });

    this.When(/^I click on "([^"]*)" icon of "([^"]*)" with index "([^"]*)"$/, function (icon, accountType, index) {
        return accountsPage.accountsTileView.clickIcon(accountType, index, icon);

    });



};
