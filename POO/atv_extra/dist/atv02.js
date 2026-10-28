"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estacionamento {
    placa;
    horas;
    constructor(placa) {
        this.placa = placa;
        this.horas = 0;
    }
    registrarPermanencia(horas) {
        if (horas > 0) {
            this.horas = horas;
        }
    }
    get calcularHorascobradas() {
        if (this.horas % 1 == 0) {
            return this.horas;
        }
        else {
            return (this.horas - (this.horas % 1)) + 1;
        }
    }
    get calcular_valor() {
        let valor = 8;
        for (let i = 1; i < this.calcularHorascobradas; i++) {
            valor += 5;
        }
        return valor;
    }
    emitirticket() {
        console.log(`
Placa: ${this.placa}
horas: ${this.horas}
Valor: ${this.calcular_valor}`);
    }
}
const c1 = new Estacionamento("abd12");
c1.registrarPermanencia(3.5);
c1.emitirticket();
//# sourceMappingURL=atv02.js.map