'use strict';
const AbstractPage = require('./AbstractPage');
const SideNavigation = require('./../SideNavigation');
const FiltersContainer = require('./../Accounts/FiltersContainer');
const ProductSummaryContainer = require('./../Accounts/ProductSummaryContainer');

module.exports = class ClosedEnvAbstractPage extends AbstractPage {
    get sideNavigation() { return new SideNavigation(); }
    get filtersContainer() { return new FiltersContainer(); }
    get productSumaryContainer() { return new ProductSummaryContainer(); }
};
