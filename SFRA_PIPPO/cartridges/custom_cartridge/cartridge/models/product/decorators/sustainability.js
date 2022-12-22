'use strict';


module.exports = function (object, apiProduct) {

    Object.defineProperty(object, 'biodegradability', {
        enumerable: true,
        value: apiProduct.custom.biodegradability
    });

    Object.defineProperty(object, 'Co2', {
        enumerable: true,
        value: apiProduct.custom.Co2
    });
};