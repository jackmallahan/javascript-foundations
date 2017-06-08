function Bag() {
  this.empty = true;
  this.count = 0;
  this.candies = [];
};


Bag.prototype.push = function (candy) {
  this.count++;
  this.candies.push(candy)
};

Bag.prototype.contains = function (candy){
  console.log(candy);
  for(var i = 0; i < this.candies.length; i++){
    if (this.candies[i].type === candy){
      return true;
    }else {return false;}
  }
}

module.exports = Bag;
