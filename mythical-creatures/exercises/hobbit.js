function Hobbit (name, disposition, age){
  this.name = name;
  this.disposition = 'homebody';
  this.age = 0;
  this.old = false;
  this.isShort = true;
  if (this.name === 'Frodo'){
    this.hasRing = true
  }else {this.hasRing = false}
}

Hobbit.prototype.celebrateBirthday = function(){
  this.age++;
  if (this.age < 33){
    this.adult = false
  } else {this.adult = true}
  if (this.age > 100){
    this.old = true
  }else {this.old = false}
}


// Hobbit.prototype.adult = function(){
//   timeTravel(age, hobbit);
//   this.age = age;
//   if (this.age < 33){
//     return false;
//   } else {return true}
// }

module.exports = Hobbit
