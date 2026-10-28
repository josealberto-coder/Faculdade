class ParImpar{

    private numero_jogador: number;

    private numero_maquina: number;

    constructor(numero: number){
        this.numero_jogador = numero;

        this.numero_maquina = this.gerar_numero_maquina();

    }


    private gerar_numero_maquina(){

        return Math.floor(Math.random() * 10) + 1;

    }

    public resultado(){

        if ((this.numero_jogador + this.numero_maquina) % 2 == 0){

            return "Par";
        }else{
            return "Ímpar";
        }
    }
    
    public vencedor(){

        if ((this.numero_jogador + this.numero_maquina) % 2 ==0){

            console.log("Vencedor: Jogador\n");

        }else{

            console.log("Vencedor: Máquina\n");
        }
    }

}

const jogo = new ParImpar(10);


console.log(jogo.resultado(), "\n");

jogo.vencedor();


