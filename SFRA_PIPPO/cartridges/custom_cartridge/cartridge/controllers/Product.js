'use strict';

var server = require('server');


server.extend(module.superModule);

server.append('Show', function (req, res, next) {
    
    var Locale = require('dw.util.Locale')
    var productHelper = require('*/cartridge/scripts/helpers/productHelpers');
    var convertPoundsHelper = require('*/cartridge/scripts/helpers/convertPoundsHelper');
    var viewData = res.getViewData();
    var country = viewData.getCountry();

    if (country !== "US" || country !== "UK") {
        viewData.product.Co2 = converPoundsHelper.formatPoundsToKg(viewData.product.Co2)
    }

    res.setViewData(viewData);
    next();
});