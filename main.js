"use strict";
exports.__esModule = true;
var tragamoneda_1 = require("./casino-poo/tragamoneda");
var tragamonedaSummer_1 = require("./casino-poo/tragamonedaSummer");
var prueba = new tragamoneda_1.Tragamoneda();
//
//let readlineSync = require('readline-sync');
//let cantCreditos: number = readlineSync.questionInt('Ingrese la cantidad de creditos que va a comprar');
//let cantApostada: number = readlineSync.questionInt('Ingrese la cantidad de creditos que va a apostar');
var TragamonedaSummer1 = new tragamonedaSummer_1.TragamonedaSummer();
//
// let clientePrueba: Cliente = new Cliente(1000);
// let resultadoApuesta: number = TragamonedaSummer1.apuesta(cantApostada);
// console.log("apostamos " + cantApostada + " y obtuvimos: " + resultadoApuesta);
// cantCreditos= cantCreditos - cantApostada;
// cantCreditos= cantCreditos + resultadoApuesta;
// console.log("nuestros creditos totales son: " + cantCreditos);
function menuTragamonedas(paramCreditos) {
    var algo = 0;
    for (var i = 0; i < 10; i++) {
        console.log("Usted gano: " + TragamonedaSummer1.apuesta(paramCreditos / 10));
        TragamonedaSummer1.mostrarResultado();
    }
}
menuTragamonedas(100);
//console.log("$ ƒ § # + @ 7")
//ver si se puede cambiar el color de los simbolos
