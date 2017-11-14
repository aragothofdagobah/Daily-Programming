const _ = require('lodash');

module.exports = function (arr) {
    return _.forEach(arr, city => {
        if(city.population < .5){
            city.size = 'small'
        }
        else if(city.population < 1){
            city.size = 'med';
        }
        else {
            city.size = 'big'
        }
    })
};