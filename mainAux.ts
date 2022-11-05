import { Tragamoneda } from "./casino-poo/tragamoneda";
import { TragamonedaSummer } from "./casino-poo/tragamonedaSummer";
import { Cliente } from "./casino-poo/cliente";
import { Casino } from "./casino-poo/casino";
import { TragamonedaWinter } from "./casino-poo/TragamonedaWinter";
import { Ruleta } from "./casino-poo/ruleta";
import { Crap } from "./casino-poo/crap";
import { Juego } from "./casino-poo/juego";



//falta resolver la clase Cliente-Tesorersia-Casino para poder probar esto.


let summer1: TragamonedaSummer = new TragamonedaSummer(0, "Tragamonedas Summer", 10000, 100);
let winter1: TragamonedaWinter = new TragamonedaWinter(1, "Tragamonedas Winter", 10000);
let ruleta1: Ruleta = new Ruleta(2, "La Ruleta",10000);
//los dados no necesitan parametro, y alteran el orden.
//let crap1: Crap = new Crap(0, 3, 10000);

let juegosCasino: Juego[] = [summer1, winter1, ruleta1];

//preguntamos la cantidad de plata que posee el cliente.
function cantDineroCliente(): number {
    let readlineSync = require('readline-sync');
    let cantDineroIngresado: number = readlineSync.questionInt('Ingrese la cantidad de dinero que va a convertir a credito: ');
    if(cantDineroIngresado < 1 ) {
        console.log("Por favor ingrese un numero valido.");
        cantDineroCliente();
    } 
    
    return cantDineroIngresado;
}

let cliente1: Cliente = new Cliente(cantDineroCliente());

//instanciamos la clase Casino.

let casino777: Casino = new Casino(100000, 0.5, cliente1, juegosCasino);

//convertimos todos el dinero del cliente en credito. 
casino777.convertirDineroCliente();
//parametros inutiles, son datos que ya se poseen.
casino777.menuCentral();
console.log(cliente1.getDinero());
// //UNA VEZ TERMINADO DE JUGAR RECUPERAMOS EL DINERO.
// cliente1.setDinero(casino777.intercambiarCreditos(cliente1.getCreditos()))

//FALTA HACER EL DESCUENTO Y SUMA A LOS JUEGOS.

