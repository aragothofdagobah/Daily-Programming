const _ = require('lodash');

module.exports = function (arr) {
  let towns = {
      hot: [],
      warm: []
  };

  const checkTemp = temp => temp > 19;

  _.forEach(arr, (town,key) => {
      return _.every(town, checkTemp)
      ? towns.hot.push(key) :
          _.some(town, checkTemp) ? towns.warm.push(key) : null
  });

  return towns;

};