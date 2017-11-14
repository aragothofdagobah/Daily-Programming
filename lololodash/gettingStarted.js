const _ = require('lodash');

const func = function (array) {
    return _.filter(array, {active: true})
};

module.exports = func;