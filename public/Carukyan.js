class Carukyan extends KendaniEak{

     yntrelVandak(ch){
        super.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    yntrelVandak1() {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }
    baregorcutun() {
        super.stanalNorKordinatner();
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
       
        super.stanalNorKordinatner();
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
