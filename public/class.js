class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
    }
    stanalNorKordinatner() {
        this.diellipseions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {

        var found = [];
        for (var i in this.diellipseions) {
            var x = this.diellipseions[i][0];
            var y = this.diellipseions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.diellipseions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        this.multiply++;
        if (this.multiply > 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }

}
////////////////////////////////////////////////////////////////////////
////////////////////XOTAKER//////////XOTAKER////////////////////////////
////////////////////////////////////////////////////////////////////////
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
    }
    stanalNorKordinatner() {
        this.diellipseions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.diellipseions) {
            var x = this.diellipseions[i][0];
            var y = this.diellipseions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.diellipseions[i]);
                }
            }
        }
        return found;
    }
    utel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            for (var i in grassArr) {
                if (norVandak[0] == grassArr[i].x && norVandak[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            this.energy++;
            this.bazmanal();
        }
        else {
            this.sharjvel();
        }
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.satkel();
        }

    }
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak && this.energy > 10) {
            matrix[norVandak[1]][norVandak[0]] = 2;
            xkArr.push(new Xotaker(norVandak[0], norVandak[1]));
            this.energy = 5;
        }
    }
    satkel() {
        if (this.energy < 0) {
            for (var i in xkArr) {
                if (this.x == xkArr[i].x && this.y == xkArr[i].y) {
                    xkArr.splice(i, 1);
                }
            }
            matrix[this.y][this.x] = 0;
        }
    }



}



////////////////////////////////////////////////////////////////////////
////////////////////PAT//////////PAT//////////////PAT////////PAT////////
////////////////////////////////////////////////////////////////////////



class Pat {
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
////////////////////////////////////////////////////////////////////////
////////////////////Xotakeraker//////////Xotakeraker////////////////////
////////////////////////////////////////////////////////////////////////
class Xotakeraker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    stanalNorKordinatner() {
        this.diellipseions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.diellipseions) {
            var x = this.diellipseions[i][0];
            var y = this.diellipseions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.diellipseions[i]);
                }
            }
        }
        return found;
    }
    utel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(2));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            for (var i in xkArr) {
                if (this.x == xkArr[i].x && this.y == xkArr[i].y) {
                    xkArr.splice(i, 1);
                    break;
                }
            }
        }

    }
}
////////////////////////////////////////////////////////////////////////
////////////////////Carukyan//////////Carukyan////////////////////
////////////////////////////////////////////////////////////////////////
class Carukyan {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    stanalNorKordinatner() {
        this.diellipseions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.diellipseions) {
            var x = this.diellipseions[i][0];
            var y = this.diellipseions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.diellipseions[i]);
                }
            }
        }
        return found;
    }

    yntrelVandak1() {
        var found = [];
        for (var i in this.diellipseions) {
            var x = this.diellipseions[i][0];
            var y = this.diellipseions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                found.push(this.diellipseions[i]);
            }
        }
        return found;
    }
    baregorcutun() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(3));
        if (norVandak) {
            matrix[this.y][this.x] = 2;
            xkArr.push(new Xotaker(this.x, this.y));
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 5;
        }
        else {
            this.haramutyun();
        }
    }
    zohvel(){
        if (grassArr.length == 0 && xkArr.length == 0 && xotakerakerArr.length == 0 ) {
            for (var i in carukyanArr) {
                if (this.x == carukyanArr[i].x && this.y == carukyanArr[i].y) {
                    carukyanArr.splice(i, 1);
                }
            }
            matrix[this.y][this.x] = 0;
        }
    }
    haramutyun() {
       
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak1());
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];

            if(matrix[this.y][this.x]==1){
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if(matrix[this.y][this.x]==2){
                for (var i in xkArr) {
                    if (this.x == xkArr[i].x && this.y == xkArr[i].y) {
                        xkArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if(matrix[this.y][this.x]==4){
                for (var i in xotakerakerArr) {
                    if (this.x == xotakerakerArr[i].x && this.y == xotakerakerArr[i].y) {
                        xotakerakerArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[this.y][this.x] = 5;
            this.zohvel();
        }
    }
}
