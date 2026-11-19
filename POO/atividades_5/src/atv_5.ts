class Conta {
    private id: number;
    private numero: string;
    saldo: number;
    private cliente: Cliente | undefined;
    private data_abertura: Date;
    associacao_conta: boolean;
    


    constructor(id: number, numero: string, saldo: number, data_abertura: Date) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = undefined;
        this.data_abertura = data_abertura;
        this.associacao_conta = false;
    }
    adicionar_cliente(cliente:Cliente){
        if(cliente.associacao_cliente == false){
            this.cliente = cliente;
            cliente.associacao_cliente = true; 
        }else{
            console.log("Cliente foi já cadastrado");
        }
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





class Cliente{
    id:number;
    nome:string;
    cpf:string;
    data_nascimento:Date;
    contas: Conta[];
    associacao_cliente:boolean;

    constructor(id: number, nome:string, cpf: string, data_nasc:Date){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nasc;
        this.contas = [];
        this.associacao_cliente = false;
    }

    adiconar_conta(conta: Conta){
        this.contas.push(conta);
        conta.associacao_conta = true;
    }

    consultar_contas(){
        for(let conta of this.contas){
            console.log(conta);
        }
    }

    obter_saldo_total(){
        let total = 0;
        for(let conta of this.contas){
            total += conta.saldo;

        }
        return total;

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
        let conta = this.obter_conta(contaNum);
        let cliente = this.obter_cliente(cpf);
        if(conta?.associacao_conta == false && cliente?.associacao_cliente == false){
            conta.adicionar_cliente(cliente);
            cliente.adiconar_conta(conta);
            
        }else{
            console.log("Associação não possível.\n");
        }

    }
    saldo_total_cliente(cpf: string){
        for(let cliente of this.clientes){
            if(cliente.cpf == cpf){
                return cliente.obter_saldo_total();
            }
        }
    }
    lista_contas_cliente(cpf: string){
        for(let cliente of this.clientes){
            if(cliente.cpf == cpf){
                for(let contas of cliente.contas){
                    console.log(contas);
                }
            }
        }
    }
    obter_cliente(cpf: string){
        for(let cliente of this.clientes){

            if(cliente.cpf == cpf){
                return cliente;
            }

        }
    }

    obter_conta(numero: string){
        for(let conta of this.contas){
            if(conta.obter_num() == numero)
                return conta;
        }
    }


    adicionar_conta(conta: Conta): void {
        if(this.esta_contido_id_num_conta(conta.obterId(), conta.obter_num())){
            console.log("Conta já cadastrada.");
        }else{
            this.contas.push(conta);
        }
    }

    adicionar_cliente(cliente: Cliente){
        if(this.esta_contido_id_cpf_cliente(cliente.id, cliente.cpf)){
            console.log("Cliente já cadastrado.")
        }else{
            this.clientes.push(cliente);
        }

    }

    esta_contido_id_num_conta(id: number, num:string ){
        for(let conta of this.contas){
            if(conta.obterId() == id || conta.obter_num() == num){
                return true;
            }
        }
        return false;
    }

    esta_contido_id_cpf_cliente(id: number, cpf: string): boolean{
        for(let cliente of this.clientes){
            if(cliente.cpf == cpf || cliente.id == id){
                return true;
            }
        }
        return false;
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

    transferir_varias_contas(valor: number, conta_origem: Conta, ...conta_destino: Conta[]){

        for(let conta of conta_destino){
            conta.depositar(valor);
            conta_origem.sacar(valor);
        }
    }

    quantidade_contas(){
        return this.contas.length;
    }

    valor_total_contas(){
        let total = 0;
        for(let conta of this.contas){
            total += conta.saldo;
        }
        return total;
    }

    media_valor_contas(){
        return this.valor_total_contas()/this.quantidade_contas();
    }

}




const conta1 = new Conta(1, "123", 1000, new Date("2000-12-10"));
const conta2 = new Conta(2, "345", 500, new Date("2020-10-23"));

const cliente1 = new Cliente(1,"jose", "832", new Date("2000-10-21"));

const cliente2 = new Cliente(2, "Carlos", "321", new Date("1980-09-13"));

const banco = new Banco();
banco.adicionar_cliente(cliente1);
banco.adicionar_cliente(cliente2);

banco.adicionar_conta(conta1);
banco.adicionar_conta(conta2);

banco.associarConta_cliente("832", "123");

banco.associarConta_cliente("321", "345");


cliente1.consultar_contas();

cliente2.consultar_contas();

console.log(banco.media_valor_contas());