function Unicorn(name, color) {
  this.name = name;
  if (color === undefined){
    this.color = 'white';
  } else {this.color = color};
}

Unicorn.prototype.isWhite = function(){
  if (this.color === 'white'){
    return true
  } else {return false}
}

Unicorn.prototype.says = function(words){
  return "**;* " + words + " *;**";
}

module.exports = Unicorn;
