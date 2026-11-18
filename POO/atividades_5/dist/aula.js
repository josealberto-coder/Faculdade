"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    id;
    numero;
    saldo;
    identificador;
    cliente;
    data_abertura;
    constructor(id, numero, saldo, iden, cliente, data_abertura) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.identificador = iden;
        this.cliente = cliente;
        this.data_abertura = data_abertura;
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
    consultarSaldo() {
        return this.saldo;
    }
    obterId() {
        return this.id;
    }
}
let numeros = [3, 2, 1];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
for (let numero of numeros.reverse()) {
    console.log(numero);
}
let contas = [];
let conta1 = new Conta(1, '111-1', 100);
let conta2 = new Conta(2, '222-2', 200);
contas[0] = conta1;
contas.push(conta2);
class Banco {
    contas;
    clientes;
    constructor() {
        this.contas = [];
        this.clientes = [];
    }
    inserir(conta) {
        this.contas.push(conta);
    }
    adicionar_cliente(cliente) {
        this.clientes.push(cliente);
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
    consultarIndice(id) {
        for (let i = 0; i < this.contas.length; i++) {
            let conta = this.contas[i];
            if (conta && conta.obterId() == id) {
                return i;
            }
        }
        return -1;
    }
    excluir(id) {
        let indice = this.consultarIndice(id);
        if (indice != -1) {
            for (let i = indice; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
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
}
class Cliente {
    id;
    nome;
    cpf;
    data_nascimento;
    contas;
    constructor(id, nome, cpf, data_nasc, conta) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nasc;
        this.contas = conta;
    }
}
//# sourceMappingURL=aula.js.map