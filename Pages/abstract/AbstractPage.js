'use strict';
const AbstractContainer = require('./AbstractContainer');

module.exports = class AbstractPage extends AbstractContainer {
    constructor(relativeUrl) {
        super();
        this.relativeUrl = relativeUrl;
    }

    openByUrl() {
        return browser.driver.get(`${browser.baseUrl}${this.relativeUrl}`);
    }

    /** @param {Date} date */
    toLocalDate(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    // getRealAttribute(element, attribute) {
    //     return browser.executeScript(
    //         (el, attr) => el.getAttribute(attr),
    //         element.getWebElement(),
    //         attribute);
    // How to use:
    // userIdFieldSecurity(attribute) { return this.getRealAttribute(this.$loginField, attribute); }

};