'use strict';
const AbstractContainer = require('./../abstract/AbstractContainer');

module.exports = class AccountsTileViewContainer extends AbstractContainer {
    constructor() { super('aib-commercial/closed-environment/accounts'); }

    get $$currentAccountsTiles() { return $$('[heading="Current Account"] > ui-aib-accounts-tile-ng'); }

    /**@param {number} tileIndex */
    /**@param {string} tileType */
    $tileByIndex(tileType, tileIndex) { return element(by.testHook(`tile.${tileType}.${tileIndex}`)); }
    $transactionsIconByIndex(tileType, tileIndex) { return this.$tileByIndex(tileType, tileIndex).element(by.testHook('transactions')); }

    $icon(tileType, tileIndex, icon) { return this.$tileByIndex(tileType, tileIndex).element(by.testHook(`${icon}`)); }
    clickIcon(tileType, tileIndex, icon) { return this.$icon(tileType, tileIndex, icon).click(); }


    $availableFundsOfTile(tileType, tileIndex) { return this.$tileByIndex(tileType, tileIndex).$('[test-hook="available-funds"] .aib-medium-grey-text'); }
    availableFundsLabel(tileType, tileIndex) { return this.$availableFundsOfTile(tileType, tileIndex).getText(); }

    clickTransactionsOfAccount(tileType, tileIndex) { return this.$transactionsIconByIndex(tileType, tileIndex).click(); }






};
