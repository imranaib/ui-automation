'use strict';
const ClosedEnvAbstractPage = require('./ClosedEnvAbstractPage');
const SideMenu = require('../SideNavigation');

module.exports = class ClosedNavEnvAbstractPage extends ClosedEnvAbstractPage {
    get sideMenu() { return new SideMenu(); }

};
