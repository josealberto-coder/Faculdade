class Equipamento{

    ligado: boolean = false;

    ligar(){
        if (this.ligado == false){
            this.ligado = true;
        }
        

    }

    desligar(){

        if (this.ligado == true){

            this.ligado = false;
        }
        

    }

    inverter(){
        if (this.ligado == true){
            this.ligado = false;

        }else{
            this.ligado = true;
        }
    }

    estado_ligado(){

        console.log(`Estado: ${this.ligado}\n`);
    }
}

const motor = new Equipamento();

motor.estado_ligado();

motor.inverter();

motor.estado_ligado();