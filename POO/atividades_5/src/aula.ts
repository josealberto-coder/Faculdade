class Conta {
    private id: number;
    private numero: string;
    private saldo: number;
    private cliente: Cliente;
    private data_abertura: Date;


    constructor(id: number, numero: string, saldo: number, cliente: Cliente, data_abertura: Date) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
        this.data_abertura = data_abertura;

    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
    
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    consultarSaldo(): number {
        return this.saldo;
    }
    obterId(){
        return this.id;
    }
    obter_num(){
        return this.numero;
    }
}





class Banco {
    contas: Conta[];
    clientes: Cliente[];

    constructor() {
        this.contas = [];
        this.clientes = [];
    
    }


    associarConta_cliente(cpf: string, contaNum:string){
        let condicao = true;
        for(let cliente of this.clientes){

            if(cliente.cpf == cpf){

                for(let conta of cliente.contas){
                    if(conta.obter_num() == contaNum){
                        condicao = false;
                        return;
                    }
                }
            }

        }
        if(condicao){
            for(let cliente of this.clientes){

                if(cliente.cpf == cpf){ 
                    for(let conta of this.contas){

                        if(conta.obter_num() == contaNum){
                            cliente.contas.push(conta);
                        }
                    }

                }
            }
        }else{
            return "Conta cadastrada.\n";
        } 

    }

    obter_conta(numero: string){
        for(let conta of this.contas){
            if(conta.obter_num() == numero)
                return conta;
        }
    }


    inserir_conta(conta: Conta): void {
        this.contas.push(conta);
    }

    adicionar_cliente(cliente: Cliente){
        this.clientes.push(cliente);

    }

    consultar_via_cpf(cpf: string){
        for(let cliente of this.clientes){
            if(cliente.cpf == cpf){
                return cliente.nome;

            }
        }
        return "Cliente não encontrado."
    }
    consultar(id: number): Conta | null {

        for (let conta of this.contas) {
            if (conta.obterId()== id) {
                return conta;
            }
        }

        return null;
    }

    consultarIndice(id: number): number {

        for (let i = 0; i < this.contas.length; i++) {
            let conta = this.contas[i];
            if (conta && conta.obterId() == id) {
                return i;
            }
        }

        return -1;
    }

    excluir(id: number): void {
        let indice = this.consultarIndice(id);

        if (indice != -1) {
            for (let i = indice; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1]!;
            }

            this.contas.pop();
        }

        
    }

    depositar(id: number, valor: number): void {
        let contaProcurada: Conta | null = this.consultar(id);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    sacar(id: number, valor: number): void {
        let contraProcurada: Conta | null = this.consultar(id);
        
        if (contraProcurada) {
            contraProcurada.sacar(valor);
        }
    }

    transferir(idOrigem: number, idDestino: number, valor: number): void {
        let contaOrigem: Conta | null = this.consultar(idOrigem);
        let contaDestino: Conta | null = this.consultar(idDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }
}


class Cliente{
    id:number;
    nome:string;
    cpf:string;
    data_nascimento:Date;
    contas: Conta[];

    constructor(id: number, nome:string, cpf: string, data_nasc:Date,){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nasc;
        this.contas = [];
    }


}



