"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Triangulo {
    l1;
    l2;
    l3;
    constructor(l1, l2, l3) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
    get eh_triagulo() {
        if ((this.l1 + this.l2 > this.l3)
            && (this.l1 + this.l3 > this.l2)
            && (this.l2 + this.l3 > this.l1)) {
            return true;
        }
        else {
            return false;
        }
    }
    get eh_isoceles() {
        if (this.eh_triagulo) {
            if (this.l1 == this.l2 || this.l1 == this.l3 || this.l2 == this.l3) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    get eh_equilatero() {
        if (this.eh_triagulo) {
            if (this.l1 == this.l2 && this.l1 == this.l3) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    get eh_escaleno() {
        if (this.eh_triagulo) {
            if (this.l1 != this.l2 && this.l1 != this.l3 && this.l2 != this.l3) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}
const tri_equi = new Triangulo(10, 10, 10);
const tri_ecale = new Triangulo(12, 14, 10);
const tri_isoce = new Triangulo(10, 12, 10);
console.log(tri_isoce.eh_isoceles);
console.log(tri_ecale.eh_escaleno);
console.log(tri_equi.eh_equilatero);
//# sourceMappingURL=q6.js.map