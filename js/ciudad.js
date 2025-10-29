"use strict;"
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
        // const gentilicio = document.createAttribute("li");
        // const poblacion = document.createAttribute("li");
        // gentilicio.textContent = this.gentilicio;
        // poblacion.textContent = this.poblacion;

        // const listaNoOrdenada = document.createAttribute("ul");
        // listaNoOrdenada.appendChild(gentilicio);
        // listaNoOrdenada.appendChild(poblacion);

        // return listaNoOrdenada;


        const infoExtra = "<ul>" +
         "<li>" + this.gentilicio + "</li>" +
         "<li>" + this.poblacion + "</li>" +
         "</ul>";

        return infoExtra;
    }

    escribirCoordenadas(){
        // Modificar sin el write
        document.write("<p>" + this.coordenadas + "</p>");
    }


}
