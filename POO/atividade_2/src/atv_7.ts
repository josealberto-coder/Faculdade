//Letra A
const numero = [2, 4, 6, 8, 10];

let nova_array = numero.map((n)=>{

    return 2 * n;

})



console.log("Arrya original: ",numero, "\n");



//Letra B
console.log("Novo Array:", nova_array, "\n");


//Letra c





let soma_array_novo = numero.reduce((anterior, atual)=>{

    return anterior+ atual;
})


console.log(soma_array_novo);