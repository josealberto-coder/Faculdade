const ola = (): void =>{

    console.log("Olá.\n");
}


const dobro = (numero: number): number =>{

    return numero * 2;

}


const saudacao = (nome: string): string => {

    return `Olá, ${nome}!!`
}




ola();

console.log(dobro(10), "\n");



console.log(saudacao("jose"));
