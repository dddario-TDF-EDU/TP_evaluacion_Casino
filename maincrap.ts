import { Crap } from "./casino-poo/crap";

let crap: Crap = new Crap(123,200,100);

let juego1: Crap = new Crap(124,100);
let juego2: Crap = new Crap(125,300);
let juego3: Crap = new Crap(123,400);
let juego4: Crap = new Crap(126,500);


//juego1.apostarSalida(200);
//juego2.apostarEnField(100);
//juego3.apostardontPassBar(100);
//juego4.apostarPassLine(100);

function mensajesMenuCrap(): void {
    console.log("Bienvenido a Craps");
    console.log("opciones: ");
    console.log("1 _ Apuesta minima" + " (" + crap.getApuestaMinima() + ")");
    console.log("2 _ Apuesta un valor a elegir");
    console.log("3 _ Ingresar a sala");
    console.log("4 _ Salir");
}
export function menuCrap(paramCreditos: number): number {
    let readlineSync = require('readline-sync');
    //chequeamos si la persona tiene creditos suficientes para apostar.
    if(paramCreditos > crap.getApuestaMinima()) {
        console.log("Usted posee "+ paramCreditos + " creditos.");
        mensajesMenuCrap();
        let opcionDeseada: number = readlineSync.questionInt('Ingrese la opcion deseada ');
        if(opcionDeseada < 1 || opcionDeseada > 4) {
            //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
            console.log("numero erroneo Intente nuevamente");
            console.clear();//para limpiar la pantalla
            menuCrap(paramCreditos);
        } if(opcionDeseada === 3){
           console.log("Tiro inicial para ingresar a sala.");
           crap.apostarSalida(paramCreditos);
        }
         else if(opcionDeseada === 4) {
            //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
            console.log("Usted se retira con " + paramCreditos + " creditos.");
            console.log("Gracias por jugar, esperamos su regreso.");
            return paramCreditos;
        } else {
            //EJECUTAR LA OPCION Y REGRESAR AL PROGRAMA CON LA NUEVA CANTIDAD DE CREDITOS
            menuCrap(ejecucionApuestas(opcionDeseada, paramCreditos));
        }
    } else {
        console.log("Usted ya no posee creditos suficientes");
        console.log("Gracias por jugar, esperamos su regreso.")
        return paramCreditos;
    }
}
function ejecucionApuestas(paramOpcion: number, paramCreditos: number): number {
    let resultadoApuesta: number = 0;
    let creditosApostados: number = 0;
    let totalCreditos: number = paramCreditos;
    switch(paramOpcion) {
        case 1:
            creditosApostados = crap.getApuestaMinima();
            totalCreditos -= creditosApostados;
           // resultadoApuesta = crap.apostarSalida(creditosApostados);
            crap.apostarSalida(creditosApostados)
            crap.mostrarResultado();
            console.log(mensajeResultado(resultadoApuesta));
            //totalCreditos+= resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;

        case 2:
            creditosApostados = cantApostada(paramCreditos);
            totalCreditos -= creditosApostados;
            //resultadoApuesta = crap.apostarSalida(creditosApostados);
            crap.apostarSalida(creditosApostados)
            crap.mostrarResultado()
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos+= resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;    
        
        default:
            return paramCreditos;
    }

}

function cantApostada(paramCreditos: number): number {
    let readlineSync = require('readline-sync');
    let cantApuesta: number = readlineSync.questionInt('Ingrese la cantidad de credito que desea apostar ');
    if(cantApuesta < 0 || cantApuesta > paramCreditos) {
        console.log("Cantidad incorrecta, intente nuevamente");
        cantApostada(paramCreditos);
    }
    return cantApuesta;
}

function mensajeResultado(paramCreditos: number): string {
    if(paramCreditos > 0) {
        return "Usted gano " + paramCreditos + " creditos."
    } else {
        return "Usted perdio."
    }
}
function pausaParaLeer(): void {
    let readlineSync = require('readline-sync');
    let pausa = readlineSync.question('');
}

menuCrap(1000);