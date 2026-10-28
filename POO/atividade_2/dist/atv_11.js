"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorteio {
    array = [];
    adicionar(nome) {
        this.array.push(nome);
    }
    sortear() {
        console.log(this.array[Math.floor(Math.random() * (this.array.length - 1))]);
    }
}
const sorteio1 = new Sorteio();
sorteio1.adicionar("Jose");
sorteio1.adicionar("Joao");
sorteio1.adicionar("Luiz");
sorteio1.adicionar("Marcos");
sorteio1.sortear();
//# sourceMappingURL=atv_11.js.map