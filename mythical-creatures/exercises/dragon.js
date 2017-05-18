eatCount = 0

function Dragon(name, rider, color, hungry){
  this.name = name;
  this.rider = rider;
  this.color = color;
  this.hungry = true;
  this.eat = function(){
    eatCount++
    if (eatCount >= 3)
      this.hungry = false
  }
}



module.exports = Dragon;
