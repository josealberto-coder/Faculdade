let array: Array<string> = ["Jose", "Joao", "Alberto", "cecília"];




function sorteio_array(lista: string[], tamanho: number): void{

    let numero: number = Math.floor((Math.random() * tamanho));

    console.log(numero, "\n");
    
    console.log(lista[numero]);

    

}


sorteio_array(array,3);

