"use strict";
class Memoria{


    constructor(){

    }


    voltearCarta(carta){
        carta.dataset.estado = "volteada";
    }

}

let memoria = new Memoria();