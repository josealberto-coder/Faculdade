"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class produto {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    desconto_emitiOrcamento(percentual) {
        let novo_valor = this.desconto(percentual);
        console.log(`Produto: ${this.nome}, Preço: R$ ${this.preco}\n`);
        console.log(`Desconto: ${percentual}%, Novo preço: R$ ${novo_valor}\n`);
    }
    desconto(porcentual) {
        let desconto;
        desconto = this.preco - (this.preco * (porcentual / 100));
        return desconto;
    }
}
const produto1 = new produto("Celular", 1000);
const produto2 = new produto("Notebook", 5000);
produto1.desconto_emitiOrcamento(10);
produto2.desconto_emitiOrcamento(20);
//# sourceMappingURL=atv_12.js.map