
const array = [1, 2, 3, 4, 5];


let array_nova_dobro = array.map((n)=>{

    return n *2;
})

console.log(array_nova_dobro);



let array_nova_soma = array.reduce((anterior, atual)=>{

    return anterior + atual;
})


