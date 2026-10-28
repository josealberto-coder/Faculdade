"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class circulo {
    raio;
    area;
    perimetro;
    constructor(raio) {
        this.raio = raio;
        this.area = this.calcular_area();
        this.perimetro = this.calcular_perimetro();
    }
    calcular_area() {
        let area = 3.14 * (this.raio ** 2);
        return area;
    }
    calcular_perimetro() {
        let perimetro = 2 * 3.14 * this.raio;
        return perimetro;
    }
    imprimir() {
        console.log("Resultados\n");
        console.log(`Área: ${this.area.toFixed(2)}`);
        console.log(`Perímetro: ${this.perimetro.toFixed(2)}\n`);
    }
}
const circulo1 = new circulo(5);
const circulo2 = new circulo(10);
circulo1.imprimir();
circulo2.imprimir();
//# sourceMappingURL=atv_09.js.map