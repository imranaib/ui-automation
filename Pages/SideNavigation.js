'use strict';
const AbstractContainer = require('./abstract/AbstractContainer');
const utils = require('./support/utils');
const mainMenuTestData = require('../test-data/main-menu');

module.exports = class SideNavigation extends AbstractContainer {

    get $logo() { return $('#aib-logo'); }

    get $messagesIcon() { return element(by.testHook('messagesIcon')); }
    get $alertsNotificationsIcon() { return element(by.testHook('alertsIcon')); }
    get $tasklistIcon() { return element(by.testHook('tasklistIcon')); }

    get $homePageButton() { return element(by.testHook('indexPageBtn')); }
    get $accountsButton() { return element(by.testHook('accountsPageBtn')); }
    get $transactionsButton() { return element(by.testHook('transactionsPageBtn')); }
    get $paymentsButton() { return element(by.testHook('paymentsPageBtn')); }
    get $beneficiariesButton() { return element(by.testHook('beneficiariesPageBtn')); }
    get $profileSettingsButton() { return element(by.testHook('profile-settingsPageBtn')); }
    get $alertsButton() { return element(by.testHook('alertsPageBtn')); }
    get $supportButton() { return element(by.testHook('supportPageBtn')); }
    get $$menuItems() { return $$('.nav.nav-pills.nav-stacked > li'); }

    $sideMenuButton(buttonText) { return element(by.testHook(`${mainMenuTestData.find(testData => testData.buttonText === buttonText).testHook}`)); }
    $sideMenuButtonLabel(buttonName) { return this.$sideMenuButton(buttonName).getText(); }
    clickSideMenuButton(buttonName) { return this.$sideMenuButton(buttonName).click(); }

    waitForHomePageUrl() { return browser.wait(() => utils.currentUrl.then(url => url === `${browser.baseUrl}aib-commercial/index`), 3000); }
    waitForLoginPageUrl() { return browser.wait(() => utils.currentUrl.then(url => url === `${browser.baseUrl}aib-commercial/login`), 3000); }
    waitForAccountsPageUrl() { return browser.wait(() => utils.currentUrl.then(url => url === `${browser.baseUrl}aib-commercial/accounts`), 3000); }

    clickHomePageButton() { return this.$homePageButton.click(); }
    clickAccountsButton() { return this.$accountsButton.click(); }
    clickTransactionsButton() { return this.$transactionsButton.click(); }
    clickPaymentsButton() { return this.$paymentsButton.click(); }
    clickBeneficiariesButton() { return this.$beneficiariesButton.click(); }
    clickProfileSettingsButton() { return this.$profileSettingsButton.click(); }
    clickAlertsButton() { return this.$alertsButton.click(); }
    clickSupportButton() { return this.$supportButton.click(); }

    get isDisaplayedLogo() { return this.$logo.isDisplayed(); }
    get isDisaplayedMessagesIcon() { return this.$messagesIcon.isDisplayed(); }
    get isDisplayedAlertsNotificationsIcon() { return this.$alertsNotificationsIcon.isDisplayed(); }
    get isDisplayedTasklistIcon() { return this.$tasklistIcon.isDisplayed(); }

    get isDisplayedHomePageButton() { return this.$homePageButton.isDisplayed(); }
    get isDisplayedAccountsButton() { return this.$accountsButton.isDisplayed(); }
    get isDisplayedTransactionsButton() { return this.$transactionsButton.isDisplayed(); }
    get isDisplayedPaymentsButton() { return this.$paymentsButton.isDisplayed(); }
    get isDisplayedBeneficiariesButton() { return this.$beneficiariesButton.isDisplayed(); }
    get isDisplayedProfileSettingsButton() { return this.$profileSettingsButton.isDisplayed(); }
    get isDisplayedAlertsButton() { return this.$alertsButton.isDisplayed(); }
    get isDisplayedSupportButton() { return this.$supportButton.isDisplayed(); }

    get menuItems() { return this.$$menuItems.getText(); }




};


