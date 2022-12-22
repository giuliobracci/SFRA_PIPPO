'use strict';
/**
 * Converts the pounds to kg 
 * @param  {data} num1 the value to convert
 * @return The converted value 
 */
function formatPoundsToKg(data) {
    var LB_TO_KG = 0.45359237
    return Math.round(data * LB_TO_KG)
}
module.exports = formatPoundsToKg();