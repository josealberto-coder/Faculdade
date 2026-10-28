"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`O meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
const pessoa1 = new pessoa("jose", 18);
pessoa1.apresentar();
//# sourceMappingURL=atv_11.js.map