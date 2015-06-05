var Point = require('modules/Point');
var Line = require('modules/Line');

var points = {
  a: new Point(-340, 265),
  b: new Point(-329, 256),
  c: new Point(-326, 277),
  d: new Point(-311, 264)
};

var lines = {
  ab: new Line(points.a, points.b),
  cd: new Line(points.c, points.d)
};

console.log({
  points: JSON.stringify(points),
  lines: JSON.stringify(lines),
  intersect: JSON.stringify(lines.ab.intersect(lines.cd))
});
