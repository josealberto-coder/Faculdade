class Calculadora{
    private numero_1: number;
    private numero_2: number;

    constructor(n1:number, n2:number){
        this.numero_1 = n1;
        this.numero_2 = n2;
    }


    somar(): void{
        console.log(`Soma: ${this.numero_1 + this.numero_2}`);
    }

    subtracao(): void{
        console.log(`Subtração: ${this.numero_1 - this.numero_2}`);
    }

}

class Hora{
    private  hora:number;
    private minutos:number;
    private segundos: number;

    constructor(hora: number, minutos:number, segundos: number){
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    consultar_hora():void{
        console.log(`Hora(s):${this.hora} \n`);
    }

    consultar_minutos():void{
        console.log(`Minutos: ${this.minutos}\n`);
    }

    consultar_segundos(): void{
        console.log(`Segundos: ${this.segundos}\n`);
    }

    consultar_horario(): void{
        console.log(`Horário: ${this.hora}:${this.minutos}:${this.segundos} \n`);
    }
}

