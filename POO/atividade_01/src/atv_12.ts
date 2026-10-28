class produto{

    private nome: string;

    private preco: number;


    constructor(nome: string, preco: number){

        this.nome = nome;

        this.preco = preco;
    }







    public desconto_emitiOrcamento(percentual: number){

        let novo_valor = this.desconto(percentual);

        console.log(`Produto: ${this.nome}, Preço: R$ ${this.preco}\n`);

        console.log(`Desconto: ${percentual}%, Novo preço: R$ ${novo_valor}\n`);
    }



    private desconto(porcentual: number){

        let desconto: number;

        desconto = this.preco - (this.preco * (porcentual/100));

        return desconto;
    }
}



const produto1 = new produto("Celular", 1000);

const produto2 = new produto("Notebook", 5000);



produto1.desconto_emitiOrcamento(10);

produto2.desconto_emitiOrcamento(20);


