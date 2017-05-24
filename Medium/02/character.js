//Character Class

function Character(name, age){
  this.name = name;
  this.age = age;
}

Character.prototype.getName = function () {
  return this.name;
};

Character.prototype.getAge = function () {
  return this.age;
};

module.exports = Character;
