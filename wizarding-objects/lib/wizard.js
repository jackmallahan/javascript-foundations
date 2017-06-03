function Wizard(name){
  this.name = name;
  this.petsCount = 0;
  this.pets = [];
};

Wizard.prototype.givePet = function(pet){
  this.petsCount++;
  this.pets.push(pet);
};

Wizard.prototype.petList = function(){
  return (this.pets[0].name + ", a " + this.pets[0].type + ", " + this.pets[1].name + ", an " + this.pets[1].type + ".")
    };

Wizard.prototype.giveWand = function(wand) {
  this.wand = wand;
};

Wizard.prototype.castSpell = function(spell) {
  return 'Casting ' + spell + "!";
};

module.exports = Wizard
