"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Radio {
    volume;
    constructor(volume) {
        this.volume = volume;
    }
}
const R = new Radio(10); // O erro ocorre por que no constructor foi definido um parêmentro que deve ser preechido.
console.log(R.volume);
//# sourceMappingURL=q4.js.map