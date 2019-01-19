var express = require("express");
var bodyParser = require("body-parser");
var collinear = require("./collinear");
var app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.post("/point", function(req, res) {
    res.json(collinear.addToSpace(req.body));
});

app.post("/points", function(req, res) {
    res.json(collinear.addsToSpace(req.body));
});

app.get("/space", function(req, res) {
    res.json(collinear.getSpace());
});

app.use("/randomize/:number", function(req, res) {
    res.json(collinear.generatePoints(req.params.number));
});

app.use("/lines/:number", function(req, res) {
    res.json(collinear.getLines(req.params.number));
});

app.delete("/space", function(req, res) {
    collinear.clearSpace();
    res.json(collinear.getSpace());
});

const hostname = "127.0.0.1";
const port = 3000;

var server = app.listen(port, hostname, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
});
