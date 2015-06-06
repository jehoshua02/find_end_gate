var Point = function (x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype.distance = function (that) {
  var a = this.x - that.x;
  var b = this.y - that.y;
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

Point.prototype.toArray = function () {
  return [this.x, this.y];
};

Point.prototype.toString = function (round) {
  var string;
  var array = this.toArray();

  if (round !== undefined) {
    array = array.map(function (item) {
      return Math.round(item, round);
    });
  }

  return array.join(',');
};

module.exports = Point;
