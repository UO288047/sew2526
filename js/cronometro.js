"use strict";
class Cronometro{
    
    constructor(){
        this.tiempo = 0;
    }

    arrancar(){
        try{
            this.inicio = Temporal.Now.instant();
        }catch(err){
            this.inicio = Date.now();
        }

        this.corriendo = actualizar();
    }

    actualizar(){
        let tiempoActual;
        try{
            tiempoActual = Temporal.Now.instant();
        }catch(err){
            tiempoActual = Date.now();
        }
        
        //esto está mal
        //this.tiempo = setInterval(this.actualizar.bind(this).tiempoActual - this.actualizar.bind(this).inicio, 100);
    }
}