var KendaniEak = require("./KendaniEak.js");

module.exports = class Xotakeraker extends KendaniEak{

    yntrelVandak(ch){
        super.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    utel() {
        super.stanalNorKordinatner();
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