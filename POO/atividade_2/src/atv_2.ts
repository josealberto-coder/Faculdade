let dados: Array<number> = [12, 10, 50, 12]


function array_to_string(lista: Array<number>): string{

    let converter: string;

    let resultado: string = "";

    lista.forEach((i)=>{

        converter = i.toString()

        resultado += converter + "-"

    })

    return resultado;

}

console.log(array_to_string(dados));


