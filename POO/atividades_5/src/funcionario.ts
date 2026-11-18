
class Funcionario {
    private _nome: string;
    private _cpf: string;
    private _salario: number;

    constructor(nome: string, cpf: string, salario: number) {
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
    }

    get validarCpf(){
        let contar = 0;
        for(let item of this._cpf){
            contar += 1;
        }
        if(contar>= 3){
            return true;
        }else{
            return false;
        }

    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    get salario(): number {
        return this._salario;
    }

    set salario(salario: number) {
        if (salario >= 0) {
            this._salario = salario;
        }
    }
}

class Gerente extends Funcionario {
    private _login: string;
    private _senha: string;

    constructor(
        nome: string,
        cpf: string,
        salario: number,
        login: string,
        senha: string
    ) {
        super(nome, cpf, salario);
        this._login = login;
        this._senha = senha;
    }

    public autenticar(login: string, senha: string): boolean {
        return this._login === login &&
               this._senha === senha;
    }
}

class Diretor extends Gerente {
    private _departamento: string;
    private _limiteOrcamento: number;

    constructor(
        nome: string,
        cpf: string,
        salario: number,
        login: string,
        senha: string,
        departamento: string,
        limiteOrcamento: number
    ) {
        super(nome, cpf, salario, login, senha);
        this._departamento = departamento;
        this._limiteOrcamento = limiteOrcamento;
    }

    public aprovarOrcamento(valor: number): boolean {
        return valor > 0 && valor <= this._limiteOrcamento;
    }

    get departamento(): string {
        return this._departamento;
    }
}

class Presidente extends Diretor {
    private _participacaoAcionaria: number;
    private _limiteInvestimento: number;

    constructor(
        nome: string,
        cpf: string,
        salario: number,
        login: string,
        senha: string,
        departamento: string,
        limiteOrcamento: number,
        participacaoAcionaria: number,
        limiteInvestimento: number
    ) {
        super(
            nome, cpf, salario, login, senha,
            departamento, limiteOrcamento
        );
        this._participacaoAcionaria = participacaoAcionaria;
        this._limiteInvestimento = limiteInvestimento;
    }

    public autorizarInvestimento(valor: number): boolean {
        return valor > 0 && valor <= this._limiteInvestimento;
    }

    get participacaoAcionaria(): number {
        return this._participacaoAcionaria;
    }
}

const funcionario = new Funcionario("João", "111", 3000);

const gerente = new Gerente(
    "Jose", "22", 7000, "jose123", "123"
);

const diretor = new Diretor(
    "Carlos", "333", 15000,
    "carlos", "456", "Tecnologia", 50000
);

const presidente = new Presidente(
    "Ana", "444", 30000,
    "ana", "789", "Presidência",
    100000, 15, 1000000
);


console.log(`
Funcionario: ${funcionario.validarCpf}
Gerente: ${gerente.validarCpf}
Diretor: ${diretor.validarCpf}
Presidente: ${presidente.validarCpf}`);


