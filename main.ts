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
let crap1: Crap = new Crap(0, "Craps", 10000, 25);
//comentario

let juegosCasino: Juego[] = [summer1, winter1, ruleta1, crap1];

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
//esto quedo re feo
// cliente1.setCreditos(casino777.comprarCreditos(cliente1.getDinero()));
// cliente1.setDinero(0);
// cliente1.setCreditos(menuCentral(cliente1.getCreditos(), summer1, winter1, ruleta1, crap1));
// //UNA VEZ TERMINADO DE JUGAR RECUPERAMOS EL DINERO.
// cliente1.setDinero(casino777.intercambiarCreditos(cliente1.getCreditos()))

//FALTA HACER EL DESCUENTO Y SUMA A LOS JUEGOS.

casino777.convertirDineroCliente();
casino777.menuCentral();
casino777.devolverDineroCliente();

