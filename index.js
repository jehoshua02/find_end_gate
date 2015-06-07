var Point = require('modules/Point');
var Line = require('modules/Line');

var points = {
  a: new Point(-340, 265),
  b: new Point(-329, 256),
  c: new Point(-326, 277),
  d: new Point(-311, 264),
  e: new Point(-84, 204),
  f: new Point(-77, 189),
  g: new Point(94, 149),
  h: new Point(85, 124)
};

var lines = {
  ab: new Line(points.a, points.b),
  cd: new Line(points.c, points.d),
  ef: new Line(points.e, points.f),
  gh: new Line(points.g, points.h)
};

console.log({
  points: JSON.stringify(points),
  lines: JSON.stringify(lines)
});

var seen = [];
for (var name1 in lines) {
  seen.push(name1);
  for (var name2 in lines) {
    if (seen.indexOf(name2) !== -1) { continue; }
    var intersect = lines[name1].intersect(lines[name2]);
    console.log([
      '\nintersect ', name1, ' and ', name2, ': ', intersect.toString(0)
    ].join(''));
  }
}
