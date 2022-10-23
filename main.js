"use strict";
exports.__esModule = true;
var tragamoneda_1 = require("./casino-poo/tragamoneda");
var tragamonedaSummer_1 = require("./casino-poo/tragamonedaSummer");
var cliente_1 = require("./casino-poo/cliente");
var prueba = new tragamoneda_1.Tragamoneda();
//
var readlineSync = require('readline-sync');
var cantCreditos = readlineSync.questionInt('Ingrese la cantidad de creditos que va a comprar');
var cantApostada = readlineSync.questionInt('Ingrese la cantidad de creditos que va a apostar');
var TragamonedaSummer1 = new tragamonedaSummer_1.TragamonedaSummer();
//
var clientePrueba = new cliente_1.Cliente(1000);
var resultadoApuesta = TragamonedaSummer1.apuesta(cantApostada);
console.log("apostamos " + cantApostada + " y obtuvimos: " + resultadoApuesta);
cantCreditos = cantCreditos - cantApostada;
cantCreditos = cantCreditos + resultadoApuesta;
console.log("nuestros creditos totales son: " + cantCreditos);
