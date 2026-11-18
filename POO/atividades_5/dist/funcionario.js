"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    _nome;
    _cpf;
    _salario;
    constructor(nome, cpf, salario) {
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
    }
    get validarCpf() {
        let contar = 0;
        for (let item of this._cpf) {
            contar += 1;
        }
        if (contar >= 3) {
            return true;
        }
        else {
            return false;
        }
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get cpf() {
        return this._cpf;
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        if (salario >= 0) {
            this._salario = salario;
        }
    }
}
class Gerente extends Funcionario {
    _login;
    _senha;
    constructor(nome, cpf, salario, login, senha) {
        super(nome, cpf, salario);
        this._login = login;
        this._senha = senha;
    }
    autenticar(login, senha) {
        return this._login === login &&
            this._senha === senha;
    }
}
class Diretor extends Gerente {
    _departamento;
    _limiteOrcamento;
    constructor(nome, cpf, salario, login, senha, departamento, limiteOrcamento) {
        super(nome, cpf, salario, login, senha);
        this._departamento = departamento;
        this._limiteOrcamento = limiteOrcamento;
    }
    aprovarOrcamento(valor) {
        return valor > 0 && valor <= this._limiteOrcamento;
    }
    get departamento() {
        return this._departamento;
    }
}
class Presidente extends Diretor {
    _participacaoAcionaria;
    _limiteInvestimento;
    constructor(nome, cpf, salario, login, senha, departamento, limiteOrcamento, participacaoAcionaria, limiteInvestimento) {
        super(nome, cpf, salario, login, senha, departamento, limiteOrcamento);
        this._participacaoAcionaria = participacaoAcionaria;
        this._limiteInvestimento = limiteInvestimento;
    }
    autorizarInvestimento(valor) {
        return valor > 0 && valor <= this._limiteInvestimento;
    }
    get participacaoAcionaria() {
        return this._participacaoAcionaria;
    }
}
const funcionario = new Funcionario("João", "111", 3000);
const gerente = new Gerente("Jose", "22", 7000, "jose123", "123");
const diretor = new Diretor("Carlos", "333", 15000, "carlos", "456", "Tecnologia", 50000);
const presidente = new Presidente("Ana", "444", 30000, "ana", "789", "Presidência", 100000, 15, 1000000);
console.log(`
Funcionario: ${funcionario.validarCpf}
Gerente: ${gerente.validarCpf}
Diretor: ${diretor.validarCpf}
Presidente: ${presidente.validarCpf}`);
//# sourceMappingURL=funcionario.js.map