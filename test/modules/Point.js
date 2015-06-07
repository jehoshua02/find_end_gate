var expect = require('expect');
var Point = require('modules/Point');

describe('Point', function () {

  it('should expose "x" and "y" props', function () {
    var point = new Point(343, 285);
    expect(point.x).toBe(343);
    expect(point.y).toBe(285);
  });

  describe('#toArray', function () {
    it('should return [x, y]', function () {
      var point = new Point(343, 285);
      expect(point.toArray()).toEqual([343, 285]);
    });
  });

  describe('#toString', function () {
    it('should return "x,y"', function () {
      var point = new Point(343, 285);
      expect(point.toString()).toBe("343,285");
    });

    it('should support rounding', function () {
      var point = new Point(343.35787834, 285.38787835);
      expect(point.toString(2)).toEqual("343.36,285.39");
    });
  });

  describe('#distance', function () {
    it('should return distance between two points', function () {
      var point1 = new Point(0, 0);
      var point2 = new Point(4, 5);
      expect(point1.distance(point2)).toBe(6.4031242374328485);
    });
  });
});
