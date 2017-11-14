const _=  require('lodash');

module.exports = function (arr) {
  return _.chain(arr)
      .groupBy('username')
      .map( item=> {
          return {username: item[0].username, comment_count:item.length};
      })
      .reverse()
};