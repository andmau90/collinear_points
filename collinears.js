var exports = (module.exports = {});

var points = [];

exports.clearSpace = function() {
  points = [];
};

exports.getSpace = function() {
  return points;
};

exports.addToSpace = function(point) {
  var message = "";
  if (point.x && point.y) {
    message = "added point to space";
  } else {
    message = "error on point's coordinates";
  }
  return { x: point.x, y: point.y, message: message };
};

exports.getLines = function(n) {
  var collinears = {};
  var pointsCopy = points.slice(0);
  for (var i = 0; i < pointsCopy.length - 1; i++) {
    var pointA = pointsCopy[i];
    for (var j = i + 1; j < pointsCopy.length; j++) {
      var pointB = pointsCopy[j];
      var slope = (pointB.y - pointA.y) / (pointB.x - pointA.x);
      if (!collinears[slope]) {
        collinears[slope] = [];
      }
      collinears[slope].push(pointA, pointB);
    }
  }
  //TODO: algorithm to retrieve collinear lines
  // > 3 punti
  //sort
  //res.json(points);
  return [];
};
