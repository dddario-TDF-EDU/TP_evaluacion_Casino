import { Tragamoneda } from "./casino-poo/tragamoneda";
import { TragamonedaSummer } from "./casino-poo/tragamonedaSummer";
import { Cliente } from "./casino-poo/cliente";

let prueba: Tragamoneda = new Tragamoneda();
//
//let readlineSync = require('readline-sync');
//let cantCreditos: number = readlineSync.questionInt('Ingrese la cantidad de creditos que va a comprar');
//let cantApostada: number = readlineSync.questionInt('Ingrese la cantidad de creditos que va a apostar');
let TragamonedaSummer1: TragamonedaSummer = new TragamonedaSummer();
//
// let clientePrueba: Cliente = new Cliente(1000);
// let resultadoApuesta: number = TragamonedaSummer1.apuesta(cantApostada);
// console.log("apostamos " + cantApostada + " y obtuvimos: " + resultadoApuesta);
// cantCreditos= cantCreditos - cantApostada;
// cantCreditos= cantCreditos + resultadoApuesta;
// console.log("nuestros creditos totales son: " + cantCreditos);

function menuTragamonedas(paramCreditos: number): void {
    let algo = 0;
    for (let i = 0; i < 10; i++) {
        console.log("Usted gano: " + TragamonedaSummer1.apuesta(paramCreditos/10));
        TragamonedaSummer1.mostrarResultado();
    }
    
}

menuTragamonedas(100);
//console.log("$ ƒ § # + @ 7")
//ver si se puede cambiar el color de los simbolos

