var express = require("express");
var bodyParser = require("body-parser");
var collinears = require("./collinears");
var app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.post("/point", function(req, res) {
  res.json(collinears.addToSpace(req.body));
});

app.get("/space", function(req, res) {
  res.json(collinears.getSpace());
});

app.use("/lines/:number", function(req, res) {
  res.json(collinears.getLines(req.params.number));
});

app.delete("/space", function(req, res) {
  collinears.clearSpace();
  res.json(collinears.getSpace());
});

const hostname = "127.0.0.1";
const port = 3000;

var server = app.listen(port, hostname, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
