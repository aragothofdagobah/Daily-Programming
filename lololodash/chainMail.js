const _ = require('lodash');

module.exports = function (arr) {
  return _.chain(arr)
      .sort()
      .map(item => {
          return (item + 'chained').toUpperCase();
      })
};