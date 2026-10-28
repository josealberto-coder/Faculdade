"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Equipamento {
    ligado = false;
    ligar() {
        if (this.ligado == false) {
            this.ligado = true;
        }
    }
    desligar() {
        if (this.ligado == true) {
            this.ligado = false;
        }
    }
    inverter() {
        if (this.ligado == true) {
            this.ligado = false;
        }
        else {
            this.ligado = true;
        }
    }
    estado_ligado() {
        console.log(`Estado: ${this.ligado}\n`);
    }
}
const motor = new Equipamento();
motor.estado_ligado();
motor.inverter();
motor.estado_ligado();
//# sourceMappingURL=q7.js.map