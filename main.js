"use strict";
exports.__esModule = true;
var tragamoneda_1 = require("./casino-poo/tragamoneda");
var prueba = new tragamoneda_1.Tragamoneda();
var cantCreditos = 100;
var cantApostada = 50;
var resultadoApuesta = prueba.apuesta(cantApostada);
console.log("apostamos 50 y obtuvismos: " + resultadoApuesta);
cantCreditos = cantCreditos - cantApostada;
cantCreditos = cantCreditos + resultadoApuesta;
console.log("nuestros creditos totales son: " + cantCreditos);
