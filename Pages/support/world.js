'use strict';

const chai = require('chai');
const chai_as_promised = require('chai-as-promised');

module.exports = function World() {
    chai.use(chai_as_promised);
    chai.should();
};