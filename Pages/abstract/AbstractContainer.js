'use strict';
module.exports = class AbstractContainer {
    /** @param {protractor.ElementFinder} $element */
    waitTillEnabled($element) { return browser.wait($element.isEnabled); }

    /** @param {protractor.ElementFinder} $element */
    waitTillVisible($element) { return browser.wait(protractor.ExpectedConditions.visibilityOf($element)); }

    /** @param {protractor.ElementFinder} $element */
    isVisible($element) {
        try {
            this.waitTillVisible($element);
            return true;
        } catch (error) {
            return false;
        }
    }

    /** @param {protractor.ElementFinder} $button */
    clickAfterEnabled($button) {
        return this.waitTillEnabled($button).then(() => $button.click());
    }

    /** @param {protractor.ElementFinder} $button */
    clickAfterVisible($button) {
        return this.waitTillVisible($button).then(() => $button.click());
    }
};
