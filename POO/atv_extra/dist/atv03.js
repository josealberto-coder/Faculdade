"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Impressora {
    pagina;
    colorida;
    totalpaginasImpressa;
    valortotalImpresso;
    constructor() {
        this.pagina = 0;
        this.colorida = false;
        this.totalpaginasImpressa = 0;
        this.valortotalImpresso = 0;
    }
    inicializarPedido(paginas, colorido) {
        if (paginas > 0) {
            this.pagina = paginas;
            this.colorida = colorido;
        }
        this.imprimir();
    }
    get calcularValor() {
        if (this.colorida) {
            return this.pagina * 0.80;
        }
        else {
            return this.pagina * 0.25;
        }
    }
    imprimir() {
        this.valortotalImpresso += this.calcularValor;
        this.totalpaginasImpressa += this.pagina;
    }
    mostrar() {
        console.log(`
Páginas total: ${this.totalpaginasImpressa}
Valor total: ${this.valortotalImpresso}`);
    }
}
const i1 = new Impressora();
i1.inicializarPedido(10, true);
i1.inicializarPedido(10, false);
i1.mostrar();
//# sourceMappingURL=atv03.js.map