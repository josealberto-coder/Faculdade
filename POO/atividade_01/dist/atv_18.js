"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Numero {
    valor = 10;
    ehPar() {
        if (this.valor % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    ehImpar() {
        return !this.ehPar();
    }
    somar(outronumero) {
        return this.valor + outronumero;
    }
    somar_numero(outronumero) {
        let resultado = new Numero();
        resultado.valor = this.valor + outronumero.valor;
        return resultado;
    }
}
const numero1 = new Numero();
const numero2 = new Numero();
console.log(`É ímpar: ${numero1.ehImpar()}\n`);
console.log(`É par: ${numero1.ehPar()}\n`);
console.log(numero1.somar_numero(numero2));
//# sourceMappingURL=atv_18.js.map