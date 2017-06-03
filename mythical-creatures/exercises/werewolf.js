function Werewolf(name, location){
  this.name = name;
  this.location = location;
  this.human = true;
  this.wolf = false;
  this.hungry = false;
}

Werewolf.prototype.change = function(){
  if (this.human === true){
    this.human = false;
    this.wolf = true;
    this.hungry = true;
  }else {
    this.human = true;
    this.wolf = false;
    this.hungry = false
  }
  };

Werewolf.prototype.eat = function(victim){
  if (this.human === false){
    this.human = true;
    this.hungry = false;
    victim.alive = false;
  } if (this.human === true){
      return "I don't eat Man Flesh!";
  }
  this.change();
}

function Victim(name){
  this.name = name;
  this.alive = true;
}

module.exports = {Werewolf, Victim}
