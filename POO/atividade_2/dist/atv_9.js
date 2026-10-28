"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let array = ["Jose", "Joao", "Alberto", "cecília"];
function sorteio_array(lista, tamanho) {
    let numero = Math.floor((Math.random() * tamanho));
    console.log(numero, "\n");
    console.log(lista[numero]);
}
sorteio_array(array, 3);
//# sourceMappingURL=atv_9.js.map