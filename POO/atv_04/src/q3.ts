class Hotel{

    qtd_reserva: number;

    constructor(reservas: number){

        this.qtd_reserva = reservas;

    }


}


const hotel: Hotel = new Hotel(2);

console.log(hotel.qtd_reserva);


