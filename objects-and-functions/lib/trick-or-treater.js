function TrickOrTreater(costume) {
  this.dressedUpAs = costume.style;
  this.bag = [];
  this.hasCandy = false;
  this.countCandies = 0;
}

TrickOrTreater.prototype.putCandyInBag = function(candy) {
  this.countCandies++;
  this.hasCandy = true;
  this.bag.push(candy)
}

TrickOrTreater.prototype.eat = function(candy) {
  this.countCandies--;
  this.bag.pop(candy);
}

module.exports = TrickOrTreater;
