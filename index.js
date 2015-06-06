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
  lines: JSON.stringify(lines)
});

var intersect = lines.ab.intersect(lines.cd);
console.log('\nend gate: ' + intersect.toString(0) );

var distance = points.a.distance(intersect);
console.log('\ndistance from point a: ' + Math.round(distance));

var netherPortal = new Point(intersect.x / 3, intersect.y / 3);
console.log('\nnether portal: ' + netherPortal.toString(0));

var netherDistance = distance / 3;
console.log('\ndistance in nether: ' + Math.round(netherDistance));
