function Medusa(name){
  this.name = name;
  this.statues = [];
}

function Person(name){
  this.name = name;
  this.stoned = false;
}

Medusa.prototype.stare = function(victim){
  victim.stoned = true;
  if (this.statues.length < 3){
    this.statues.push(victim);
  }else{this.statues.splice(1, 0)}
};


module.exports = {Medusa, Person}
