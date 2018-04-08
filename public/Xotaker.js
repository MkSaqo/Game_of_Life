class Xotaker extends KendaniEak {
    constructor(x, y) {
        super(x,y);
        this.energy = 5;
    }

    yntrelVandak(ch){
        super.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    utel() {
        super.stanalNorKordinatner();
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
      super.stanalNorKordinatner();
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
