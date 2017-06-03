function Centaur(name, breed) {
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.layingDown = false;
}

let counter = 0

Centaur.prototype.shoot = function(){
  counter++
  if (this.layingDown === true || counter >= 3){
    this.cranky = true;
    return 'NO!';
  }
  return 'Twang!!!';
}

Centaur.prototype.run = function() {
  counter++
  if (counter >= 3){
    this.cranky = true;
  }if (this.standing === false){
    return 'NO!'
  }
  return 'Clop clop clop clop!!!'
}

Centaur.prototype.sleep = function (){
  counter = 0;
  if (this.standing === true){
    return 'NO!';
  }else {this.cranky = false;
    return "ZZZZ";
  }
}

Centaur.prototype.layDown = function () {
  this.layingDown = true;
  this.standing = false;
}

Centaur.prototype.standUp = function () {
  this.layingDown = false;
  this.standing = true;
}

Centaur.prototype.drinkPotion = function () {
  if (this.standing === true && this.cranky === true){
    this.cranky = false;
  }else if (this.cranky === false && this.standing === true){
    this.cranky = true
  }
  else return "Not while I\'m standing!"
}

module.exports = Centaur;
