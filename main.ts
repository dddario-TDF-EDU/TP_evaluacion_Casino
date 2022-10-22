import { Tragamoneda } from "./casino-poo/tragamoneda";

let prueba: Tragamoneda = new Tragamoneda();

let cantCreditos: number = 100;
let cantApostada: number = 50
let resultadoApuesta: number = prueba.apuesta(cantApostada);
console.log("apostamos 50 y obtuvismos: " + resultadoApuesta);
cantCreditos= cantCreditos - cantApostada;
cantCreditos= cantCreditos + resultadoApuesta;
console.log("nuestros creditos totales son: " + cantCreditos);
