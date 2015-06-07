var expect = require('expect');
var Line = require('modules/Line');
var Point = require('modules/Point');

describe('Line', function () {

  describe('#slope', function () {
    it('should return the slope', function () {
      var line1 = new Line(new Point(-5, -3), new Point(5, 3));
      expect(line1.slope()).toBe(3/5);
    });

    it('should return negative slope', function () {
      var line1 = new Line(new Point(-5, 3), new Point(5, -3));
      expect(line1.slope()).toBe(-3/5);
    });
  });

  describe('#yIntercept', function () {
    it('should return yIntercept', function () {
      var line1 = new Line(new Point(-5, -3), new Point(5, 3));
      expect(line1.yIntercept()).toBe(0);
    });
  });

  describe('#y', function () {
    it('should return y for specified x', function () {
      var line = new Line(
        new Point(0, 0),
        new Point(5, 5)
      );

      expect(line.y(0)).toBe(0);
      expect(line.y(1)).toBe(1);
      expect(line.y(2)).toBe(2);
      expect(line.y(3)).toBe(3);
      expect(line.y(4)).toBe(4);
      expect(line.y(5)).toBe(5);
      expect(line.y(6)).toBe(6);
    });
  });

  describe('#intersect', function () {
    it('should return intercept with another line', function () {
      var line1 = new Line(new Point(0, 0), new Point(5, 5));
      var line2 = new Line(new Point(0, 3), new Point(5, 5));
      expect(line1.intersect(line2).toArray()).toEqual([5, 5]);
    });
  });

});
