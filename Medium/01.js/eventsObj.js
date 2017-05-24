//Events object to be used in Med-01


//init vars
var total = 0;
//Constructor
function Events(name, hour){
  this.name = name;
  this.hour = hour;
  done = false;
  total++;
};

Events.prototype.getTotal = function(){
  return total;
}

Events.prototype.getName = function(){
  return this.name;
}

Events.prototype.getHour = function(){
  return this.hour;
}

Events.prototype.isDone = function(){
  return done;
}

Events.prototype.markDone = function(){
  done = true;
}

Events.prototype.setName = function(n){
  this.name = n;
}

Events.prototype.setHour = function (h) {
  this.hour = h;
};

module.exports = Events;
