"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.Cliente = exports.Conta = void 0;
class Conta {
    id;
    numero;
    saldo;
    cliente;
    data_abertura;
    associacao_conta;
    constructor(id, numero, saldo, data_abertura) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = undefined;
        this.data_abertura = data_abertura;
        this.associacao_conta = false;
    }
    adicionar_cliente(cliente) {
        if (cliente.associacao_cliente == false) {
            this.cliente = cliente;
            cliente.associacao_cliente = true;
        }
        else {
            console.log("Cliente foi já cadastrado");
        }
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    obter_cliente() {
        return this.cliente;
    }
    consultarSaldo() {
        return this.saldo;
    }
    obterId() {
        return this.id;
    }
    obter_num() {
        return this.numero;
    }
}
exports.Conta = Conta;
class Cliente {
    id;
    nome;
    cpf;
    data_nascimento;
    contas;
    associacao_cliente;
    constructor(id, nome, cpf, data_nasc) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nasc;
        this.contas = [];
        this.associacao_cliente = false;
    }
    adiconar_conta(conta) {
        this.contas.push(conta);
        conta.associacao_conta = true;
    }
    consultar_contas() {
        if (this.contas.length == 0) {
            console.log("Sem contas cadastradas.\n");
            return;
        }
        for (let conta of this.contas) {
            console.log(conta);
        }
    }
    obter_saldo_total() {
        let total = 0;
        for (let conta of this.contas) {
            total += conta.saldo;
        }
        return total;
    }
    consultar_indice(num) {
        for (let i = 0; i < this.contas.length; i++) {
            let conta = this.contas[i];
            if (conta && conta.obter_num() == num) {
                return i;
            }
        }
        return -1;
    }
    excluir_conta(num) {
        if (this.consultar_indice(num) != -1) {
            let indice = this.consultar_indice(num);
            for (let i = indice; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    excluir_todas_contas() {
        this.contas = [];
    }
    obter_cpf() {
        return this.cpf;
    }
}
exports.Cliente = Cliente;
class Banco {
    contas;
    clientes;
    constructor() {
        this.contas = [];
        this.clientes = [];
    }
    consultar_cliente() {
        for (let cliente of this.clientes) {
            console.log(`Cliente: ${cliente.nome}`);
        }
    }
    consultar_conta() {
        for (let conta of this.contas) {
            console.log(`
Conta: 
Cliente: ${conta.obter_cliente()?.nome}
número->:${conta.obter_num()} \n
`);
        }
    }
    consultar_cliente_sem_conta() {
        for (let cliente of this.clientes) {
            if (cliente.associacao_cliente == false) {
                console.log(`Nome: ${cliente.nome}\n`);
            }
        }
    }
    associarConta_cliente(cpf, contaNum) {
        let conta = this.obter_conta(contaNum);
        let cliente = this.obter_cliente(cpf);
        if (conta?.associacao_conta == false && cliente?.associacao_cliente == false) {
            conta.adicionar_cliente(cliente);
            cliente.adiconar_conta(conta);
        }
        else {
            console.log("Associação não possível.\n");
        }
    }
    saldo_total_cliente(cpf) {
        for (let cliente of this.clientes) {
            if (cliente.cpf == cpf) {
                return cliente.obter_saldo_total();
            }
        }
    }
    lista_contas_cliente(cpf) {
        for (let cliente of this.clientes) {
            if (cliente.cpf == cpf) {
                for (let contas of cliente.contas) {
                    console.log(contas);
                }
            }
        }
    }
    obter_cliente(cpf) {
        for (let cliente of this.clientes) {
            if (cliente.cpf == cpf) {
                return cliente;
            }
        }
    }
    obter_conta(numero) {
        for (let conta of this.contas) {
            if (conta.obter_num() == numero)
                return conta;
        }
    }
    adicionar_conta(conta) {
        if (this.esta_contido_id_num_conta(conta.obterId(), conta.obter_num())) {
            console.log("Conta já cadastrada.");
        }
        else {
            this.contas.push(conta);
        }
    }
    adicionar_cliente(cliente) {
        if (this.esta_contido_id_cpf_cliente(cliente.id, cliente.cpf)) {
            console.log("Cliente já cadastrado.");
        }
        else {
            this.clientes.push(cliente);
        }
    }
    esta_contido_id_num_conta(id, num) {
        for (let conta of this.contas) {
            if (conta.obterId() == id || conta.obter_num() == num) {
                return true;
            }
        }
        return false;
    }
    esta_contido_id_cpf_cliente(id, cpf) {
        for (let cliente of this.clientes) {
            if (cliente.cpf == cpf || cliente.id == id) {
                return true;
            }
        }
        return false;
    }
    consultar_via_cpf(cpf) {
        for (let cliente of this.clientes) {
            if (cliente.cpf == cpf) {
                return cliente.nome;
            }
        }
        return "Cliente não encontrado.";
    }
    consultar(id) {
        for (let conta of this.contas) {
            if (conta.obterId() == id) {
                return conta;
            }
        }
        return null;
    }
    consultarIndice_conta(id) {
        for (let i = 0; i < this.contas.length; i++) {
            let conta = this.contas[i];
            if (conta && conta.obterId() == id) {
                return i;
            }
        }
        return -1;
    }
    excluir_conta(id) {
        let indice = this.consultarIndice_conta(id);
        if (indice != -1) {
            for (let i = indice; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    consultar_indice_cliente(cpf) {
        for (let i = 0; i < this.clientes.length; i++) {
            let cliente = this.clientes[i];
            if (cliente && cliente.obter_cpf() == cpf) {
                return i;
            }
        }
        return -1;
    }
    excluir_cliente(cpf) {
        if (this.consultar_indice_cliente(cpf) != -1) {
            let cliente = this.clientes[this.consultar_indice_cliente(cpf)];
            for (let conta of cliente.contas) {
                this.excluir_conta(conta.obterId());
            }
            cliente.associacao_cliente = false;
            cliente.excluir_todas_contas();
            for (let i = this.consultar_indice_cliente(cpf); i < this.clientes.length - 1; i++) {
                this.clientes[i] = this.clientes[i + 1];
            }
            this.clientes.pop();
        }
        else {
            console.log("Cliente inexistente.\n");
        }
    }
    depositar(id, valor) {
        let contaProcurada = this.consultar(id);
        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }
    sacar(id, valor) {
        let contraProcurada = this.consultar(id);
        if (contraProcurada) {
            contraProcurada.sacar(valor);
        }
    }
    transferir(idOrigem, idDestino, valor) {
        let contaOrigem = this.consultar(idOrigem);
        let contaDestino = this.consultar(idDestino);
        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }
    transferir_varias_contas(valor, conta_origem, ...conta_destino) {
        for (let conta of conta_destino) {
            conta.depositar(valor);
            conta_origem.sacar(valor);
        }
    }
    quantidade_contas() {
        return this.contas.length;
    }
    valor_total_contas() {
        let total = 0;
        for (let conta of this.contas) {
            total += conta.saldo;
        }
        return total;
    }
    media_valor_contas() {
        return this.valor_total_contas() / this.quantidade_contas();
    }
    mudar_cliente(cliente, num) {
        let conta = this.obter_conta(num);
        let cliente_anterior = conta.obter_cliente();
        cliente_anterior.excluir_conta(num);
        conta.adicionar_cliente(cliente);
        cliente.adiconar_conta(conta);
    }
}
exports.Banco = Banco;
//# sourceMappingURL=Banco.js.map