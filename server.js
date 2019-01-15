var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

var points = [];

app.post("/point", function(req, res) {
  var point = req.body;
  var message = "";
  if (point.x && point.y) {
    points.push(point);
    message = "added point to space";
  } else {
    message = "error on point's coordinates";
  }
  res.json({ x: point.x, y: point.y, message: message });
});

app.get("/space", function(req, res) {
  res.json(points);
});

app.use("/lines/:number", function(req, res) {
  res.json({ number: req.params.number });
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
});

app.delete("/space", function(req, res) {
  points = [];
  res.json(points);
});

const hostname = "127.0.0.1";
const port = 3000;

var server = app.listen(port, hostname, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
