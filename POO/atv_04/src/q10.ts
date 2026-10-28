class Jogador{
    forca: number;
    nivel: number;
    pontos_atuais: number;

    constructor(foca: number, nivel: number, pontos_atual: number){

        this.forca = foca;
        this.nivel = nivel; 
        this.pontos_atuais = pontos_atual;

    }

    get calcularAtaque(){
        return this.forca * this.nivel;

    }

    atacar(j: Jogador){

        if(this.estaVivo(j)){
            j.pontos_atuais -= this.calcularAtaque
            return true;

        }else{
            return false;
        }
    }

    estaVivo(j: Jogador){

        if (j.pontos_atuais > 0){
            return true;
        }else{
            return false;
        }

    }

    consultar_pontos(){
        console.log(`Pontos: ${this.pontos_atuais}\n`);


    }

}



const j1 = new Jogador(2, 2, 10);

const j2 = new Jogador(3, 2, 10);


console.log(j1.atacar(j2));

j2.consultar_pontos();


