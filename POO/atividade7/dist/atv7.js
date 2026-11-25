"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    placa;
    ano;
    constructor(placa, ano) {
        this.placa = placa;
        this.ano = ano;
    }
}
class Carro extends Veiculo {
    modelo;
    constructor(placa, ano, modelo) {
        super(placa, ano);
        this.modelo = modelo;
    }
}
class CarroEletrico extends Carro {
    autonomiaBateria;
    constructor(placa, ano, modelo, autonomiaBateria) {
        super(placa, ano, modelo);
        this.autonomiaBateria = autonomiaBateria;
    }
}
class Calculadora {
    num1;
    num2;
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    somar() {
        return this.num1 + this.num2;
    }
    obter_num1() {
        return this.num1;
    }
    obter_num2() {
        return this.num2;
    }
}
class CalculadoraCientifica extends Calculadora {
    exponencial() {
        return (this.obter_num1()) ** (this.obter_num2());
    }
}
const numero = new CalculadoraCientifica(10, 2);
console.log(numero.exponencial());
//# sourceMappingURL=atv7.js.map