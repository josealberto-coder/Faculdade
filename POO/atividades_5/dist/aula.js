"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    id;
    numero;
    saldo;
    cliente;
    data_abertura;
    associacao;
    constructor(id, numero, saldo, cliente, data_abertura) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
        this.data_abertura = data_abertura;
        this.associacao = false;
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
    obter_num() {
        return this.numero;
    }
}
class Cliente {
    id;
    nome;
    cpf;
    data_nascimento;
    contas;
    constructor(id, nome, cpf, data_nasc) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nasc;
        this.contas = [];
    }
    consultar_contas() {
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
}
class Banco {
    contas;
    clientes;
    constructor() {
        this.contas = [];
        this.clientes = [];
    }
    associarConta_cliente(cpf, contaNum) {
        let condicao = true;
        for (let cliente of this.clientes) {
            if (cliente.cpf == cpf) {
                for (let conta of cliente.contas) {
                    if (conta.obter_num() == contaNum) {
                        condicao = false;
                        return;
                    }
                }
            }
        }
        if (condicao) {
            for (let cliente of this.clientes) {
                if (cliente.cpf == cpf) {
                    for (let conta of this.contas) {
                        if (conta.obter_num() == contaNum && conta.associacao == false) {
                            cliente.contas.push(conta);
                            conta.associacao = true;
                        }
                    }
                }
            }
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
    obter_conta(numero) {
        for (let conta of this.contas) {
            if (conta.obter_num() == numero)
                return conta;
        }
    }
    inserir_conta(conta) {
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
const dt_nasc_1 = new Date("2000-10-12");
const c1 = new Cliente(1, "José", "123", dt_nasc_1);
const dt_nasc_2 = new Date("2001-10-02");
const c2 = new Cliente(2, "joao", "555", dt_nasc_2);
const dt_abert_1 = new Date("10-10-2015");
const cont1 = new Conta(10, "100", 2000, c1, dt_abert_1);
const dt_abert2 = new Date("12-02, 2020");
const cont2 = new Conta(20, "200", 3000, c1, dt_abert2);
const Banco1 = new Banco();
Banco1.adicionar_cliente(c1);
Banco1.adicionar_cliente(c2);
Banco1.inserir_conta(cont1);
Banco1.inserir_conta(cont2);
Banco1.associarConta_cliente("123", "100");
Banco1.associarConta_cliente("555", "200");
c1.consultar_contas();
c2.consultar_contas();
//# sourceMappingURL=aula.js.map