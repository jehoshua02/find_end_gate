var Point = require('modules/Point');
var Line = require('modules/Line');

var points = {
  a: new Point(-269, 702),
  b: new Point(-244, 719),

  c: new Point(-271, 761),
  d: new Point(-234, 782),

  e: new Point(-215, 679),
  f: new Point(-182, 702),

  g: new Point(-328, 690),
  h: new Point(-290, 714),
};

var lines = {
  ab: new Line(points.a, points.b),
  cd: new Line(points.c, points.d),
  // ef: new Line(points.e, points.f),
  gh: new Line(points.g, points.h),
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
