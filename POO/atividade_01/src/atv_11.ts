class pessoa{

    nome: string;

    idade: number;


    constructor(nome: string, idade: number){

        this.nome = nome;

        this.idade = idade;

    }



    apresentar(){

        console.log(`O meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }

}


const pessoa1 = new pessoa("jose", 18);


pessoa1.apresentar();