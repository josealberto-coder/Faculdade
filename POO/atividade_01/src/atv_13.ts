class Numero{

    valor: number;

    constructor(numero: number){

        this.valor = numero;

    }

    ehPar(){

        if (this.valor % 2 == 0){

            return true;
        }else{

            return false;
        }
    }



    ehImpar(){

        if (this.valor % 2 == 1){

            return true;

        }else{
            return false;
        }
    }
}



const valor1 = new Numero(20);

const valor2 = new Numero(5);


console.log(valor1.ehPar());

console.log(valor2.ehImpar());




