var Point = require('modules/Point');

var Line = function (point1, point2) {
  this.point1 = point1;
  this.point2 = point2;
};

Line.prototype.y = function (x) {
  return this.slope() * x + this.yIntercept();
};

Line.prototype.yIntercept = function () {
  return this.point1.y - this.slope() * this.point1.x;
};

Line.prototype.slope = function () {
  return (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x);
};

Line.prototype.intersect = function (that) {
  // mx + b = nx + c
  // mx = nx + c - b
  // mx - nx = c - b
  // (m - n)x = c - b
  // x = (c - b) / (m - n)
  var x = (that.yIntercept() - this.yIntercept()) / (this.slope() - that.slope());
  var y = this.y(x);
  return new Point(x, y);
};

Line.prototype.toString = function () {
  return "y = " + this.slope() + "x + " + this.yIntercept();
};

module.exports = Line;
