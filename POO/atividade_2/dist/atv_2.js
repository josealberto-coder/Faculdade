"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dados = [12, 10, 50, 12];
function array_to_string(lista) {
    let converter;
    let resultado = "";
    lista.forEach((i) => {
        converter = i.toString();
        resultado += converter + "-";
    });
    return resultado;
}
console.log(array_to_string(dados));
//# sourceMappingURL=atv_2.js.map