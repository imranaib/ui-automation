'use strict';

module.exports = {
    switchToTab(tabIndex) {
        return browser.getAllWindowHandles()
            .then(handles => handles[tabIndex])
            .then(handle => browser.switchTo().window(handle));
    },

    get currentUrl() { return browser.getCurrentUrl(); },

    closeCurrentTab() { return browser.close(); },

    getPageTitle() { return browser.getTitle(); }
};
