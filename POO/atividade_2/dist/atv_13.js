"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TradutorEmojis {
    dicionario = {
        "amo": "❤️",
        "futebol": "⚽",
        "cachorro": "🐕",
        "gato": "🐈"
    };
    traduzir(frase) {
        let palavras = frase.split(" ");
        let nova_frase = palavras.map((p) => {
            for (let palavra in this.dicionario) {
                if (p == palavra) {
                    p = this.dicionario[p];
                }
            }
            return p;
        });
        console.log(nova_frase.join(" "));
    }
}
const frase = new TradutorEmojis();
frase.traduzir("Eu amo o meu gato");
//# sourceMappingURL=atv_13.js.map