import { Tragamoneda } from "./casino-poo/tragamoneda";
import { Cliente } from "./casino-poo/cliente";

let prueba: Tragamoneda = new Tragamoneda();
//
let readlineSync = require('readline-sync');
let cantCreditos: number = readlineSync.questionInt('Ingrese la cantidad de creditos que va a comprar');
let cantApostada: number = readlineSync.questionInt('Ingrese la cantidad de creditos que va a apostar');
//
let clientePrueba: Cliente = new Cliente(1000);
let resultadoApuesta: number = prueba.apuesta(cantApostada);
console.log("apostamos " + cantApostada + " y obtuvimos: " + resultadoApuesta);
cantCreditos= cantCreditos - cantApostada;
cantCreditos= cantCreditos + resultadoApuesta;
console.log("nuestros creditos totales son: " + cantCreditos);
