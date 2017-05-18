function Vampire(name, pet="bat", thirsty, drank) {
  this.name = name;
  this.pet = pet;
  this.thirsty = true;
}

Vampire.prototype.drink = function(){
  this.thirsty = false;
}

module.exports = Vampire;
