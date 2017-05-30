function Pirate(name, job){
  this.name = name;
  this.job = job;
  if (this.job === undefined){
    this.job = 'Scallywag'
  }else {this.job = job}
  this.cursed = false;
  counter = 0
  this.booty = 0;
}

Pirate.prototype.commitHeinousAct = function(){
  counter++;
    if (counter >= 3){
      this.cursed = true
    } else {this.cursed = false}
  }

Pirate.prototype.robShip = function(){
  this.booty = 100;
  return 'YAARRR!';
}

module.exports = Pirate
