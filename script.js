var matrix = matrica(15, 15);
var side = 70;
var grassArr = [];
var xkArr = [];
var patArr = [];
var xotakerakerArr = [];
var carukyanArr = [];
function setup() {
    createCanvas(matrix.length * side, matrix[0].length * side);
    background("grey");

    noStroke()
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xkArr.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                patArr.push(new Pat(x, y));
            }

            else if (matrix[y][x] == 4) {
                xotakerakerArr.push(new Xotakeraker(x, y));
            }

            else if (matrix[y][x] == 5) {
                carukyanArr.push(new Carukyan(x, y));
            }
        }
    }
}


function draw() {
    var fr1 = document.getElementById("val").value;
    var fr = parseInt(fr1);
    frameRate(fr);
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix.length; ++x) {
            if (matrix[y][x] == 1) {
                fill("green");
                ellipse(x * side + side / 2, y * side + side / 2, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("gray");
                ellipse(x * side + side / 2, y * side + side / 2, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                ellipse(x * side + side / 2, y * side + side / 2, side, side);
            }

            else if (matrix[y][x] == 3) {
                fill("black");
                ellipse(x * side + side / 2, y * side + side / 2, side, side);
            }

            else if (matrix[y][x] == 4) {
                fill("red");
                ellipse(x * side + side / 2, y * side + side / 2, side, side);
            }

            else if (matrix[y][x] == 5) {
                if(matrix[y][x]==3)
                fill("lightblue");
                ellipse(x * side + side / 2, y * side + side / 2, side, side);
            }
            
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in xkArr) {
        xkArr[i].utel();
    }
    for (var i in xotakerakerArr) {
        xotakerakerArr[i].utel();
    }

    for (var i in patArr) {
        patArr[i].pat_sharjvel();
    }

    for (var i in carukyanArr) {
        carukyanArr[i].baregorcutun();
    }
    
}

function matrica(n, m) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        matrix.push([]);
        for (var j = 0; j < m; j++) {
            matrix[i][j] = Math.floor(Math.random() * 2);
        }
    }

    matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 2;
    matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 2;
    matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 2;
    matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 2;
    matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 3;
    matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 5;
    matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 5;
    matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 5;
    matrix[Math.floor(matrix.length / 4)][Math.floor(Math.random() * matrix[0].length)] = 4;
    matrix[Math.floor(matrix.length - 3)][Math.floor(Math.random() * matrix[0].length)] = 4;
    matrix[Math.floor(matrix.length - 7)][Math.floor(Math.random() * matrix[0].length)] = 4;
    return matrix;
}

