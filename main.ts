import * as fs from 'fs';
import { Tragamoneda } from "./casino-poo/tragamoneda";
import { TragamonedaSummer } from "./casino-poo/tragamonedaSummer";
import { Cliente } from "./casino-poo/cliente";
import { Casino } from "./casino-poo/casino";
import { TragamonedaWinter } from "./casino-poo/TragamonedaWinter";
import { Ruleta } from "./casino-poo/ruleta";
import { Crap } from "./casino-poo/crap";
import { Juego } from "./casino-poo/juego";






let summer1: TragamonedaSummer = new TragamonedaSummer(0, "Tragamonedas Summer", 10000, 100);
let winter1: TragamonedaWinter = new TragamonedaWinter(1, "Tragamonedas Winter", 10000);
let ruleta1: Ruleta = new Ruleta(2, "La Ruleta",10000);
let crap1: Crap = new Crap(3, "Craps", 10000, 25);

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
let casino777: Casino = new Casino(100000, 0.5, cliente1, juegosCasino);

casino777.convertirDineroCliente();
casino777.menuCentral();
casino777.devolverDineroCliente();
let datosDeMaquinas: string[] = casino777.impresionTicket();
generarTickets(datosDeMaquinas);
//console.log(datosDeMaquinas);

function generarTickets(paramDatos: string[]): void {
    for (let index = 0; index < paramDatos.length; index++) {
        let nombreArchivo: string =  "id" + juegosCasino[index].getID() + juegosCasino[index].getNombre();
        fs.writeFileSync(nombreArchivo + ".txt", paramDatos[index]);
    }
}