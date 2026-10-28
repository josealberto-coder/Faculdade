class cronometro{
    segundos:number;
    constructor(){
        this.segundos = 0;
    }

    avanca(valor: number): void{
        if (this.num_positivo(valor)){
            this.segundos += valor;
        }
    }

    num_positivo(valor: number): boolean{
        return valor > 0;

    }

    zerar(){
        this.segundos = 0;
    }

    emminutos(){
        console.log(`Tempo: ${(this.segundos) / 60} minutos`);
    }

    exibir_segundo(){
        console.log(this.segundos);
    }


}

const t1 = new cronometro();

const t2 = new cronometro();


t1.avanca(90);
t1.avanca(30);

t1.emminutos();

t1.zerar();
t1.exibir_segundo();



t2.avanca(180);
t2.avanca(-60);

t2.emminutos();