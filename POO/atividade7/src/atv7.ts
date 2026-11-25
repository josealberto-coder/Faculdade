class Veiculo{
    placa: string;
    ano: number;
    constructor(placa:string, ano: number){
        this.placa = placa;
        this.ano = ano;
    }

}


class Carro extends Veiculo{
    modelo: string;

    constructor(placa: string, ano: number, modelo:string){
        super(placa, ano);

        this.modelo = modelo;
    }

}

class CarroEletrico extends Carro{
    autonomiaBateria:number;

    constructor(placa:string, ano:number, modelo:string, autonomiaBateria:number){
        super(placa, ano, modelo);

        this.autonomiaBateria = autonomiaBateria;
    }
}



class Calculadora{
    private num1: number;
    private num2:number;

    constructor(num1:number, num2:number){
        this.num1 = num1;
        this.num2 = num2;

    }

    somar():number{
        return this.num1 + this.num2;
    }

    obter_num1(){
        return this.num1;
    }
    obter_num2(){
        return this.num2;
    }


}



class CalculadoraCientifica extends Calculadora{

    exponencial(){
        return (this.obter_num1())** (this.obter_num2());
    }

    /* Foi preciso criar um método para obter os numeros, já que os mesmos são privados e só podem ser acessados pela própria classe*/
}

const numero = new CalculadoraCientifica(10, 2);

console.log(numero.exponencial());