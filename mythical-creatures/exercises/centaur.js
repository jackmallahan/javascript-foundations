function Centaur(name, breed){
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.layingDown = false;
}


let crankyCounter = 0;

Centaur.prototype.shoot = function(){
  crankyCounter++;
  if (crankyCounter > 3){
    this.cranky = true
    return "NO!"
  }else if(this.layingDown === true){
    return 'NO!'
  }else
  return "Twang!!!"
}

Centaur.prototype.run = function(){
  crankyCounter++;
  if (crankyCounter > 3 || this.layingDown === true){
    this.cranky = true;
    return 'NO!'
}
return "Clop clop clop clop!!!"
}

Centaur.prototype.sleep = function(){
  if (this.standing === true || this.layingDown === false){
    return 'NO!'
  }else if(this.layingDown === true){
    crankyCounter = 0;
    this.cranky = false;
    return 'ZZZZ';
  }
}

Centaur.prototype.layDown = function(){
  this.standing = false;
  this.layingDown = true;
}

Centaur.prototype.standUp = function(){
  this.standing = true;
  this.layingDown = false;
}

module.exports = Centaur;
