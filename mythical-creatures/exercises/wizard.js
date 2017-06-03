function Wizard(object) {
  this.name = object.name;
  this.bearded = true;
  if (object.bearded === false){
    this.bearded = false;
  this.isRested = true;
  }
}

Wizard.prototype.incantation = function(spell){
  return spell.toUpperCase();
}

var counter = 0

Wizard.prototype.cast = function(){
  counter++;
  if (counter < 3){
  return 'MAGIC BULLET';
} else { return 'I SHALL NOT CAST!'
}
}



module.exports = Wizard
