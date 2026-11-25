"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    numero_1;
    numero_2;
    constructor(n1, n2) {
        this.numero_1 = n1;
        this.numero_2 = n2;
    }
    somar() {
        console.log(`Soma: ${this.numero_1 + this.numero_2}`);
    }
    subtracao() {
        console.log(`Subtração: ${this.numero_1 - this.numero_2}`);
    }
}
class Hora {
    hora;
    minutos;
    segundos;
    constructor(hora, minutos, segundos) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    consultar_hora() {
        console.log(`Hora(s):${this.hora} \n`);
    }
    consultar_minutos() {
        console.log(`Minutos: ${this.minutos}\n`);
    }
    consultar_segundos() {
        console.log(`Segundos: ${this.segundos}\n`);
    }
    consultar_horario() {
        console.log(`Horário: ${this.hora}:${this.minutos}:${this.segundos} \n`);
    }
}
//# sourceMappingURL=atv5.js.map