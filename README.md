# Steps

-   clone the repository
-   run `npm install`
-   run `node server.js`
-   open the postman workspace to test the REST api [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/73543843c3d2505eb636)

```
GET /space
```

return an array of points in the space

```
DELETE /space
```

remove all points from the space

```
POST /point
```

add the point to space and return if it is added

```
POST /points
```

add some points to space and return the state of each point

```
GET /randomize/:number
```

add :number of random points to space and return the points added

```
GET /lines/:number
```

return all lines with almost :number of collinear points, the longest is at top of array

# Programming Test - Pattern Recognition

## Pattern Recognition

Computer vision involves analyzing patterns in visual images and reconstructing the real world objects that
produced them. The process in often broken up into two phases: feature detection and pattern recognition.
Feature detection involves selecting important features of the image; pattern recognition involves
discovering patterns in the features. We will investigate a particularly clean pattern recognition problem
involving points and line segments. This kind of pattern recognition arises in many other applications, for
example statistical data analysis.

## Problem to solve

Given a set of P feature points in the bidimensional plane, determine every line that contains at least N or
more COLLINEAR points.

You should also expose a REST API that will allow the caller to:

-   Add a point to the space

`POST /point with body { "x": ..., "y": ... }`

-   Get all points in the space

`GET /space`

Example response

```
[
    {"x": 2, "y": 3},
    {"x": -2, "y": 1023},
    {"x": 3.2, "y": 0},
    ...
]
```

-   Get the longest line segment passing through at least N points. Note that a line segment should be a
    set of COLLINEAR points.

`GET /lines/{n}`

Example
Request: `GET /lines/2`

```
[
    [
        {"x": 2, "y": 3},
        {"x": -2, "y": 1023}
    ],
    [
        {"x": 3.2, "y": 0},
        {"x": -2, "y": 1023}
    ],
    ...
]
```

-   Remove all points from the space
    `DELETE /space`

## Additional rules

-   All code should be under version control, on a publicly accessible git repository (e.g., a GitHub
    repository);
-   Unless specified in the instructions above, the API should consume and produce JSON;
-   The languages you can choose to implement are: Java, Scala, Kotlin and JavaScript

## Suggestions

-   Properly naming variables and documenting the code can help us understand your solution;
-   Validating all inputs to your program will help your solution pass our test cases;
-   There is no bound on the computational complexity of the solution, but solutions with good
    computational complexity will earn you bonus points.
