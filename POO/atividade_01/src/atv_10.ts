class situacao_financeira{

    valorDebito: number;

    valorCredito: number;

    constructor(credito: number, debito: number){

        this.valorDebito = debito;

        this.valorCredito = credito;

    }


    calcularSaldo(){


        let diferenca: number;


        if (this.valorCredito >= this.valorDebito){
            
            diferenca = this.valorCredito - this.valorDebito

        }else{
            
            diferenca = this.valorDebito - this.valorCredito
        }

        return diferenca;
    }

}


const cont1 = new situacao_financeira(100, 200);


console.log(cont1.calcularSaldo());


