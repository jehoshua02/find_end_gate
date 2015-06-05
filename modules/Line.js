var Point = require('modules/Point');

var Line = function (point1, point2) {
  this.point1 = point1;
  this.point2 = point2;
};

Line.prototype.getY = function (x) {
  return this.slope() * x + this.yIntercept();
};

Line.prototype.yIntercept = function () {
  return this.point1.y - this.slope() * this.point1.x;
};

Line.prototype.slope = function () {
  return (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x);
};

Line.prototype.intersect = function (line) {
  var x = (this.yIntercept() - line.yIntercept()) / (this.slope() + line.slope());
  var y = this.getY(x);
  return new Point(x, y);
};

module.exports = Line;
