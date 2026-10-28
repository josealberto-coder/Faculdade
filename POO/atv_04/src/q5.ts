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
            
        }else{
            console.log("Saldo insuficiente.\n");

        }


    }

    transferir(c: Conta, valor: number){

        if(valor <= this.saldo ){
            this.saldo -= valor;

            c.saldo += valor;

        }else{
            console.log("Saldo insuficiente.\n");
        }

    }

    consultar_saldo(){

        console.log(`Saldo: ${this.saldo}\n`);
    }

}
let c1 = new Conta("1", 100);

let c2 = new Conta("2", 100);

let c3: Conta;


c1 = c2;

c3 = c1;

c1.sacar(10); 

c1.transferir(c2, 50);





c1.consultar_saldo();//90
c2.consultar_saldo();//90
c3.consultar_saldo();//90


//Isso ocorre porque com a atribuição de c1 = c2 o que acontece de fato não é uma cópia, mas sim, faz com que o c1 passa apontar para o mesmo espaço de memória que c2. Com o c3 = c1, C3 passa a apontar para o mesmo espaço de memória que o c1, que por sinal, é o mesmo que c2.


