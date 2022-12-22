'use strict';

var baseIndex = require("base/models/product/decorators/index");

module.exports = {
    baseIndex,
    sustainability: require('*/cartridge/models/product/decorators/sustainability')
}