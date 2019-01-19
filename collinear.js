var exports = (module.exports = {});

let points = [];

exports.clearSpace = () => {
    points = [];
};

exports.getSpace = () => points;

randomPoint = () => {
    const x = Math.random() * 1000;
    const y = Math.random() * 1000;
    return { x: x.toFixed(0), y: y.toFixed(0) };
};

exports.generatePoints = number => {
    var randomPoints = [];
    for (var i = 0; i < number; i++) {
        randomPoints.push(randomPoint());
    }
    points.concat(randomPoints);
    return randomPoints;
};

isNumber = number => typeof number === "number";

exports.addToSpace = ({ x, y }) => {
    let message = "";
    if (isNumber(x) && isNumber(y)) {
        points.push({ x, y });
        message = "added point to space";
    } else {
        message = "error on point's coordinates";
    }
    return { x, y, message: message };
};

exports.addsToSpace = points => {
    const messages = [];
    if (points) {
        for (let i = 0; i < points.length; i++) {
            messages.push(exports.addToSpace(points[i]));
        }
    } else {
        messages.push("No items");
    }
    return messages;
};

arePointsEqual = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
    return x1 === x2 && y1 === y2;
};

areDetEqualToZero = ({ x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }) => {
    return x1 * y2 + y1 * x3 + x2 * y3 - (x3 * y2 + y3 * x1 + x2 * y1) === 0;
};

getLinesOfCollinearPoints = minLength => {
    const lines = [];
    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            if (!arePointsEqual(points[i], points[j])) {
                let line = [points[i], points[j]];
                for (let x = j + 1; x < points.length; x++) {
                    if (!arePointsEqual(points[i], points[x])) {
                        if (areDetEqualToZero(points[i], points[j], points[x])) {
                            line.push(points[x]);
                        }
                    }
                }
                if (line.length >= minLength) {
                    lines.push(line);
                }
            }
        }
    }
    return lines;
};

exports.getLines = n => {
    const lines = getLinesOfCollinearPoints(n);
    lines.sort((a, b) => b.length - a.length);
    return lines;
};
