"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParImpar {
    numero_jogador;
    numero_maquina;
    constructor(numero) {
        this.numero_jogador = numero;
        this.numero_maquina = this.gerar_numero_maquina();
    }
    gerar_numero_maquina() {
        return Math.floor(Math.random() * 10) + 1;
    }
    resultado() {
        if ((this.numero_jogador + this.numero_maquina) % 2 == 0) {
            return "Par";
        }
        else {
            return "Ímpar";
        }
    }
    vencedor() {
        if ((this.numero_jogador + this.numero_maquina) % 2 == 0) {
            console.log("Vencedor: Jogador\n");
        }
        else {
            console.log("Vencedor: Máquina\n");
        }
    }
}
const jogo = new ParImpar(10);
console.log(jogo.resultado(), "\n");
jogo.vencedor();
//# sourceMappingURL=atv_12.js.map