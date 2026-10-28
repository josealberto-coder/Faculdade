"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class situacao_financeira {
    valorDebito;
    valorCredito;
    constructor(credito, debito) {
        this.valorDebito = debito;
        this.valorCredito = credito;
    }
    calcularSaldo() {
        let diferenca;
        if (this.valorCredito >= this.valorDebito) {
            diferenca = this.valorCredito - this.valorDebito;
        }
        else {
            diferenca = this.valorDebito - this.valorCredito;
        }
        return diferenca;
    }
}
const cont1 = new situacao_financeira(100, 200);
console.log(cont1.calcularSaldo());
//# sourceMappingURL=atv_10.js.map