class ColecaoNumero {
    numeros: Array<number>;



    constructor(){
        this.numeros = [];
    }

    adicionar(valor: number): void{
        this.numeros.push(valor);
    }

    limpar(): void{
        this.numeros = [];
    }
    
    get quantidade(): number{
        let total = 0;
        for(let numero of this.numeros){
            total += 1;
        }
        return total;
    }

    get somar(): number{
        let soma = 0;
        for(let numero of this.numeros){
            soma += numero;

        }
        return soma
    }

    get calcularMedia(): number{
        return this.somar/this.quantidade;
    }

    get Maior(): number{
        let maior = 0;
        let indice = 0;
        for (let numero of this.numeros){
            if (indice == 0){
                maior=numero;
                indice = 1;
            }else{
                if (numero > maior){
                    maior = numero;

                }
            }

        }
        return maior
    }


    get Menor(): number{
        let menor = 0;
        let indice = 0;
        for (let numero of this.numeros){
            if(indice == 0){
                menor = numero;
                indice = 1;
            }else{
                if (numero < menor){
                    menor=numero;
                }
            }
        }
        return menor; 
    }


    Mostrar():void{
        console.log(`
Quantidade: ${this.quantidade}
Soma: ${this.somar}
Média: ${this.calcularMedia}
Maior: ${this.Maior}
Menor: ${this.Menor}`);

    }


}


const array1 = new ColecaoNumero();

array1.adicionar(10);
array1.adicionar(20);
array1.adicionar(30);

array1.limpar();

array1.adicionar(-8);
array1.adicionar(-3);
array1.adicionar(-12);

array1.Mostrar();