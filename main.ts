import { Tragamoneda } from "./casino-poo/tragamoneda";
import { TragamonedaSummer } from "./casino-poo/tragamonedaSummer";
import { Cliente } from "./casino-poo/cliente";
import { menuSummer } from "./mainSummer";
import { menuRuleta } from "./mainRuleta";
import { Casino } from "./casino-poo/casino";
import { TragamonedaWinter } from "./casino-poo/TragamonedaWinter";
import { Ruleta } from "./casino-poo/ruleta";
import { Crap } from "./casino-poo/crap";

function menuCentral(paramCreditos: number, pSummer: TragamonedaSummer, pWinter: TragamonedaWinter, pRuleta: Ruleta, pCrap: Crap): number {
    console.log("Bienvenido al casino RXXXX");
    console.log("Usted posee " + paramCreditos + " creditos.");
    if(paramCreditos > 0) {
        mensajesMenuCentral();
        let readlineSync = require('readline-sync');
        let opcionDeseada: number = readlineSync.questionInt('Ingrese la opcion deseada: ');
        if(opcionDeseada < 1 || opcionDeseada > 5) {
            //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
            console.log("numero erroneo Intente nuevamente");
            console.clear();//para limpiar la pantalla
            //debe ser un return??
            return menuCentral(paramCreditos, pSummer, pWinter, pRuleta, pCrap);
        } else if(opcionDeseada === 5) {
            //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
            console.log("Usted se retira con " + paramCreditos + " creditos.");
            console.log("Gracias por jugar, esperamos su regreso.");
            return paramCreditos;
        } else {
            //EJECUTAR LA OPCION Y REGRESAR AL PROGRAMA CON LA NUEVA CANTIDAD DE CREDITOS
            //debe ser un return??
            return menuCentral(ejecucionMaquinas(opcionDeseada, paramCreditos, pSummer, pWinter, pRuleta, pCrap), pSummer, pWinter, pRuleta, pCrap);
        }
    } else {
        console.log("Usted ya no posee creditos suficientes, gracias por jugar vuelva pronto.");
        return paramCreditos;
    }
    
}

function mensajesMenuCentral(): void {
    console.log("Menu principal");
    console.log("1 _ Jugar con maquina tragamonedas Summer.");
    console.log("2 _ Jugar con maquina tragamonedas Winter.");
    console.log("3 _ Jugar ruleta.");
    console.log("4 _ Jugar crap.");
    console.log("5 _ Salir.");
    console.log("");
}

function ejecucionMaquinas(paramOpcion: number, paramCreditos: number, pSummer: TragamonedaSummer, pWinter: TragamonedaWinter, pRuleta: Ruleta, pCrap: Crap): number {
    switch(paramOpcion){
        case 1:
            return menuSummer(paramCreditos, pSummer);
        case 3:
            return menuRuleta(paramCreditos, pRuleta);
        default:
            return paramCreditos;
    }
}

//falta resolver la clase Cliente-Tesorersia-Casino para poder probar esto.


let summer1: TragamonedaSummer = new TragamonedaSummer(0, 10000, 100);
let winter1: TragamonedaWinter = new TragamonedaWinter(1, 10000);
let ruleta1: Ruleta = new Ruleta(2, 10000);
//los dados no necesitan parametro, y alteran el orden.
let crap1: Crap = new Crap(0, 3, 10000);


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

let casino777: Casino = new Casino(100000, 0.5, cliente1, summer1, winter1, ruleta1, crap1);

//convertimos todos el dinero del cliente en credito. 
//esto quedo re feo
cliente1.setCreditos(casino777.comprarCreditos(cliente1.getDinero()));
cliente1.setDinero(0);
cliente1.setCreditos(menuCentral(cliente1.getCreditos(), summer1, winter1, ruleta1, crap1));
//UNA VEZ TERMINADO DE JUGAR RECUPERAMOS EL DINERO.
cliente1.setDinero(casino777.intercambiarCreditos(cliente1.getCreditos()))

//FALTA HACER EL DESCUENTO Y SUMA A LOS JUEGOS.

console.log("hola")