"use strict";
exports.__esModule = true;
exports.menuSummer = void 0;
function mensajesMenuSummer(pSummer) {
    console.log("Bienvenido al tragamonedas Summer");
    console.log("opciones: ");
    console.log("1 _ Apuesta minima" + " (" + pSummer.getApuestaMinima() + ")");
    console.log("2 _ Apuesta un valor a elegir");
    console.log("3 _ Salir");
}
function menuSummer(paramCreditos, pSummer) {
    var readlineSync = require('readline-sync');
    //chequeamos si la persona tiene creditos suficientes para usar la maquina.
    if (paramCreditos >= pSummer.getApuestaMinima()) {
        console.log("Usted posee " + paramCreditos + " creditos.");
        mensajesMenuSummer(pSummer);
        var opcionDeseada = readlineSync.questionInt('Ingrese la opcion deseada ');
        if (opcionDeseada < 1 || opcionDeseada > 3) {
            //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
            console.log("numero erroneo Intente nuevamente");
            console.clear(); //para limpiar la pantalla
            return menuSummer(paramCreditos, pSummer);
        }
        else if (opcionDeseada === 3) {
            //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
            console.log("Usted se retira con " + paramCreditos + " creditos.");
            console.log("Gracias por jugar, esperamos su regreso.");
            return paramCreditos;
        }
        else {
            //EJECUTAR LA OPCION Y REGRESAR AL PROGRAMA CON LA NUEVA CANTIDAD DE CREDITOS
            return menuSummer(ejecucionApuestas(opcionDeseada, paramCreditos, pSummer), pSummer);
        }
    }
    else {
        console.log("Usted ya no posee creditos suficientes");
        console.log("Gracias por jugar, esperamos su regreso.");
        return paramCreditos;
    }
}
exports.menuSummer = menuSummer;
function ejecucionApuestas(paramOpcion, paramCreditos, pSummer) {
    var resultadoApuesta = 0;
    var creditosApostados = 0;
    var totalCreditos = paramCreditos;
    switch (paramOpcion) {
        case 1:
            creditosApostados = pSummer.getApuestaMinima();
            totalCreditos -= creditosApostados;
            resultadoApuesta = pSummer.apuesta(creditosApostados);
            pSummer.mostrarResultado();
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        case 2:
            creditosApostados = cantApostada(paramCreditos, pSummer);
            totalCreditos -= creditosApostados;
            resultadoApuesta = pSummer.apuesta(creditosApostados);
            pSummer.mostrarResultado();
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        default:
            return paramCreditos;
    }
}
function cantApostada(paramCreditos, pSummer) {
    var readlineSync = require('readline-sync');
    var cantApuesta = readlineSync.questionInt('Ingrese la cantidad de credito que desea apostar ');
    //comprobar apuesta minima, no cero
    if (cantApuesta < pSummer.getApuestaMinima() || cantApuesta > paramCreditos) {
        console.log("Cantidad incorrecta, intente nuevamente");
        return cantApostada(paramCreditos, pSummer);
    }
    return cantApuesta;
}
function mensajeResultado(paramCreditos) {
    if (paramCreditos > 0) {
        return "Usted gano " + paramCreditos + " creditos.";
    }
    else {
        return "Usted perdio.";
    }
}
function pausaParaLeer() {
    var readlineSync = require('readline-sync');
    var pausa = readlineSync.question('');
}
