class Radio{

    volume: number;



    constructor(volume: number){

        this.volume = volume;
    }


}


const R = new Radio(10);  // O erro ocorre por que no constructor foi definido um parêmentro que deve ser preechido.

console.log(R.volume);
