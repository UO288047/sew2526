"use strict";
class Ciudad{
    constructor(nombre, pais, gentilicio){
        this.nombre = "Termas de Río Hondo";
        this.pais = "Argentina";
        this.gentilicio = "termeño/termeña";
    }
    completarCamposRestantes(){
        this.poblacion = 41711;
        this.coordenadas = "27.498503°S 64.860708°W"
    }

    obtenerNombre(){
        return this.nombre;
    }

    obtenerPais(){
        return this.pais;
    }

    obtenerInfoExtra(){
        const infoExtra = "<ul>" +
         "<li> Gentilicio: " + this.gentilicio + "</li>" +
         "<li> Población: " + this.poblacion + "</li>" +
         "</ul>";

        return infoExtra;
    }

    escribirCoordenadas(){
        
        const mensaje = document.createElement("p");
        mensaje.textContent = this.coordenadas;
        document.body.appendChild(mensaje);
        
    }

}

let ciudad = new Ciudad("Termas de Río Hondo", "Argentina", "termeño/termeña");
ciudad.completarCamposRestantes();
