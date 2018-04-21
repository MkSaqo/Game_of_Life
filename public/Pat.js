var KendaniEak = require("./KendaniEak.js");
module.exports = class Pat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
    }

    pat_sharjvel() {
        var pat = this.randVandak();
        this.multiply++;
        if (this.multiply >= 6) {
            if (pat) {
                this.x = pat[0];
                this.y = pat[1];
                matrix[this.y][this.x] = 3;
                this.multiply = 0;
                for (var c in grassArr) {
                    if ((grassArr[c].x == this.x) && (grassArr[c].y == this.y)) {
                        grassArr.splice(c, 1);
                    }
                }

                for (var c in xkArr) {
                    if ((xkArr[c].x == this.x) && (xkArr[c].y == this.y)) {
                        xkArr.splice(c, 1);
                    }
                }
            }

            if(grassArr.length == 0) {
                patArr.pop();
            }

            // }
        }
    }
    randVandak() {
        var x = Math.floor(Math.random() * matrix.length);
        var y = Math.floor(Math.random() * matrix[0].length);

        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            var arr = [x, y];
            return arr;
        }

    }
}