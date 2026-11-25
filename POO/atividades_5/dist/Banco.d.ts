export declare class Conta {
    private id;
    private numero;
    saldo: number;
    private cliente;
    private data_abertura;
    associacao_conta: boolean;
    constructor(id: number, numero: string, saldo: number, data_abertura: Date);
    adicionar_cliente(cliente: Cliente): void;
    depositar(valor: number): void;
    sacar(valor: number): void;
    transferir(contaDestino: Conta, valor: number): void;
    obter_cliente(): Cliente | undefined;
    consultarSaldo(): number;
    obterId(): number;
    obter_num(): string;
}
export declare class Cliente {
    id: number;
    nome: string;
    cpf: string;
    data_nascimento: Date;
    contas: Conta[];
    associacao_cliente: boolean;
    constructor(id: number, nome: string, cpf: string, data_nasc: Date);
    adiconar_conta(conta: Conta): void;
    consultar_contas(): void;
    obter_saldo_total(): number;
    consultar_indice(num: string): number;
    excluir_conta(num: string): void;
    excluir_todas_contas(): void;
    obter_cpf(): string;
}
export declare class Banco {
    contas: Conta[];
    clientes: Cliente[];
    constructor();
    consultar_cliente(): void;
    consultar_conta(): void;
    consultar_cliente_sem_conta(): void;
    associarConta_cliente(cpf: string, contaNum: string): void;
    saldo_total_cliente(cpf: string): number | undefined;
    lista_contas_cliente(cpf: string): void;
    obter_cliente(cpf: string): Cliente | undefined;
    obter_conta(numero: string): Conta | undefined;
    adicionar_conta(conta: Conta): void;
    adicionar_cliente(cliente: Cliente): void;
    esta_contido_id_num_conta(id: number, num: string): boolean;
    esta_contido_id_cpf_cliente(id: number, cpf: string): boolean;
    consultar_via_cpf(cpf: string): string;
    consultar(id: number): Conta | null;
    consultarIndice_conta(id: number): number;
    excluir_conta(id: number): void;
    consultar_indice_cliente(cpf: string): number;
    excluir_cliente(cpf: string): void;
    depositar(id: number, valor: number): void;
    sacar(id: number, valor: number): void;
    transferir(idOrigem: number, idDestino: number, valor: number): void;
    transferir_varias_contas(valor: number, conta_origem: Conta, ...conta_destino: Conta[]): void;
    quantidade_contas(): number;
    valor_total_contas(): number;
    media_valor_contas(): number;
    mudar_cliente(cliente: Cliente, num: string): void;
}
//# sourceMappingURL=Banco.d.ts.map