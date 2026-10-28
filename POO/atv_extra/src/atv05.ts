class RegistraTemperatura {
    temperatura: number[];
    limite: number;

    constructor(){
        this.temperatura = [];
        this.limite = 30;
    }

    adicionar(valor: number):void{
        this.temperatura.push(valor);

    }

    alterarLimite(valor: number): void{
        this.limite = valor;
    }

    Listar(): void{
        let dia = 0;
       this.temperatura.forEach((i)=>{
        dia += 1;
        console.log(`Dia-${dia} -- ${i}°C\n`)
        console.log("----------------------")
       })

    }

    ConverterParaFahrenheit(): void{
        let dia = 0;
        let Fahrenheit = this.temperatura.map((c)=>{
            dia += 1;
            console.log(`Dia-${dia} -- ${c * 1.80 + 32}°F\n`);
        })

    }

    CalcularMedia(){

        let quantidade = 0;
        let media = this.temperatura.reduce((total, atual)=>{
            quantidade += 1;
            total += atual
            return total/quantidade;
        })
        return media;
    }

    acimaDoLimite(){
        let acimaDolimite = this.temperatura.filter((i)=>{
            if(i > this.limite){
                return i;
            }
        })

        return acimaDolimite;;
    }



}  

const t1 = new RegistraTemperatura();




t1.adicionar(28);
t1.adicionar(31);
t1.adicionar(29);
t1.adicionar(35);
t1.adicionar(32);
t1.adicionar(27);
t1.adicionar(30);


t1.alterarLimite(32);

t1.Listar();

console.log(t1.acimaDoLimite());