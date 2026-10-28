class Conta{

    id: string;
    saldo: number;
    
    constructor(id: string, saldo: number){

        this.id = id;
        this.saldo = saldo;
    }

    sacar(valor: number){

        if (valor <= this.saldo){
            this.saldo -= valor
            return true;
            
        }else{
            return false;

        }


    }

    transferir(c: Conta, valor: number){

        if(this.sacar(valor)){

            c.saldo += valor;

            return true;
        }else{
            return false;
        }

    }

    consultar_saldo(){

        console.log(`Saldo: ${this.saldo}\n`);
    }

}


const c1 = new Conta("1", 1000);

let c2 = new Conta("2", 0);

console.log(c1.transferir(c2, 500));


c1.consultar_saldo();

c2.consultar_saldo();



