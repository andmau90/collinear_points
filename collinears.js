var exports = (module.exports = {});

let points = [];

exports.clearSpace = () => {
    points = [];
};

exports.getSpace = () => points;

randomPoint = () => {
    const a = Math.random() * 2 * Math.PI;
    const r = 100 * Math.sqrt(Math.random());
    const x = r * Math.cos(a);
    const y = r * Math.sin(a);
    return { x: x.toFixed(0), y: y.toFixed(0) };
};

exports.generatePoints = number => {
    for (var i = 0; i < number; i++) {
        points.push(randomPoint());
    }
    return points;
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

slope = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
    if (x2 != x1) {
        return y2 - y1 / x2 - x1;
    }
    return "oo";
};

/**
 * return all available segments with slope
 */
getCollinearsSegments = minLength => {
    const lines = [];
    for (let i = 0; i < points.length - 1; i++) {
        let pointA = points[i];
        for (let j = i + 1; j < points.length; j++) {
            let pointB = points[j];
            let line = [pointA, pointB];
            for (let x = j + 1; x < points.length; x++) {
                let pointC = points[x];
                if (
                    slope(pointA, pointB) === slope(pointB, pointC) &&
                    slope(pointB, pointC) === slope(pointC, pointA)
                ) {
                    line.push(pointC);
                }
            }
            if (line.length >= minLength) {
                lines.push(line);
            }
        }
    }
    return lines;
};

exports.getLines = n => {
    const lines = getCollinearsSegments(n);
    lines.sort((a, b) => b.length - a.length);
    return lines;
};
