const _ = require('lodash');

module.exports = function (arr) {
    return _.sortBy(arr, item => {
        return item.quantity;
    }).reverse();
};