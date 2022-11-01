import { Tragamoneda } from "./casino-poo/tragamoneda";
import { TragamonedaSummer } from "./casino-poo/tragamonedaSummer";
import { Cliente } from "./casino-poo/cliente";
import { menuSummer } from "./mainSummer";
import { menuRuleta } from "./mainRuleta";

function menuCentral(paramCreditos: number): void {
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
            menuCentral(paramCreditos);
        } else if(opcionDeseada === 5) {
            //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
            console.log("Usted se retira con " + paramCreditos + " creditos.");
            console.log("Gracias por jugar, esperamos su regreso.");
        } else {
            //EJECUTAR LA OPCION Y REGRESAR AL PROGRAMA CON LA NUEVA CANTIDAD DE CREDITOS
            menuRuleta(ejecucionMaquinas(opcionDeseada, paramCreditos));
        }
    } else {
        console.log("Usted ya no posee creditos suficientes, gracias por jugar vuelva pronto.")
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

function ejecucionMaquinas(paramOpcion: number, paramCreditos: number): number {
    switch(paramOpcion){
        case 1:
            return menuSummer(paramCreditos);
        case 3:
            return menuRuleta(paramCreditos);
        default:
            return paramCreditos;
    }
}

//falta resolver la clase Cliente-Tesorersia-Casino para poder probar esto.