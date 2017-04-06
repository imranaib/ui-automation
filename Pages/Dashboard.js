'use strict';
const ClosedEnvAbstractPage = require('./abstract/ClosedEnvAbstractPage');

module.exports = class DashboardPage extends ClosedEnvAbstractPage {
    constructor() { super('aib-commercial/index'); }

    get $logo() { return element.by.id('#logo'); }
    get $widgetAibNavigation() { return $('.widget-aib-navigation'); }
    get $logoutButton() { return element(by.testHook('logoutButton')); }
    get $logoutConfirmationMessage() { return element(by.testHook('logoutConfirmationPopup')); }
    get $confirmLogoutButton() { return element(by.testHook('confirmLogoutButton')); }
    get $cancelLogoutButton() { return element(by.testHook('cancelLogoutButton')); }
    get $userMenu() { return $('.ext-aib-user-menu-ng'); }

    clickLogout() { return this.$logoutButton.click(); }
    confirmationMessageIsDisplayed() { return this.$logoutConfirmationMessage.isDisplayed(); }
    confirmLogout() { return this.$confirmLogoutButton.click(); }
    cancelLogout() { return this.$cancelLogoutButton.click(); }

    userMenuLoaded() { return browser.wait(() => this.$userMenu.isDisplayed(), 3000); }
    logoutBtnIsDisplayed() { return this.$logoutButton.isDisplayed(); }
    isDisplayedWidgetNavigation() { return this.$widgetAibNavigation.isDisplayed(); }

};

