"use strict";
// function variantes(paramSlot: number, paramSuma: number): number {
//     let resultado: number = paramSlot + paramSuma;
//     let diferencia: number;
//     if(resultado < 1) {
//         diferencia = 8 - Math.abs(resultado);
//         return diferencia;
//     }
exports.__esModule = true;
//     if(resultado > 8) {
//         diferencia = 1 + (resultado - 8);
//         return diferencia;
//     }
//     return resultado;
// }
// let readlineSync = require('readline-sync');
// let cantCreditos: number = readlineSync.questionInt('Ingrese ');
// console.log(variantes(cantCreditos,-2));
var ruleta_1 = require("./casino-poo/ruleta");
var ruletaLoca = new ruleta_1.Ruleta(0, 100000);
function mensajesMenuRuleta() {
    console.log("Bienvenido a la ruleta");
    console.log("opciones: ");
    console.log("1 _ Apuesta a Un numero");
    console.log("2 _ Apuesta a Primera Docena");
    console.log("3 _ Apuesta a Segunda Docena");
    console.log("4 _ Apuesta a Tercera Docena");
    console.log("5 _ Apuesta a Primer Columna");
    console.log("6 _ Apuesta a Segunda Columna");
    console.log("7 _ Apuesta a Tercer Columna");
    console.log("8 _ Apuesta a Primera Mitad");
    console.log("9 _ Apuesta a Segunda Mitad");
    console.log("10 _ Apuesta a Rojas");
    console.log("11 _ Apuesta a Negras");
    console.log("12 _ Apuesta a Numeros Pares");
    console.log("13 _ Apuesta a Numeros Impares");
    console.log("14 _ Salir");
}
function menuRuleta(paramCreditos) {
    var readlineSync = require('readline-sync');
    if (paramCreditos > 0) {
        console.log("Usted posee " + paramCreditos + " creditos.");
        mensajesMenuRuleta();
        var opcionDeseada = readlineSync.questionInt('Ingrese la opcion deseada ');
        if (opcionDeseada < 1 || opcionDeseada > 14) {
            //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
            console.log("numero erroneo Intente nuevamente");
            console.clear(); //para limpiar la pantalla
            menuRuleta(paramCreditos);
        }
        else if (opcionDeseada === 14) {
            //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
            console.log("Usted se retira con " + paramCreditos + " creditos.");
            console.log("Gracias por jugar, esperamos su regreso.");
            return paramCreditos;
        }
        else {
            //EJECUTAR LA OPCION Y REGRESAR AL PROGRAMA CON LA NUEVA CANTIDAD DE CREDITOS
            menuRuleta(ejecucionApuestas(opcionDeseada, paramCreditos));
        }
    }
    else {
        console.log("Usted ya no posee creditos");
        console.log("Gracias por jugar, esperamos su regreso.");
        return 0;
    }
}
function ejecucionApuestas(paramOpcion, paramCreditos) {
    var resultadoApuesta = 0;
    var totalApuesta = cantApostada(paramCreditos);
    var totalCreditos = paramCreditos - totalApuesta;
    switch (paramOpcion) {
        case 1:
            resultadoApuesta = ruletaLoca.apuestaNroUnico(totalApuesta, numeroDeRuletaElegido());
            console.log("El resultado fue: " + ruletaLoca.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        case 2:
            resultadoApuesta = ruletaLoca.apuestaPrimeraDocena(totalApuesta);
            console.log("El resultado fue: " + ruletaLoca.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        case 3:
            resultadoApuesta = ruletaLoca.apuestaSegundaDocena(totalApuesta);
            console.log("El resultado fue: " + ruletaLoca.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        case 4:
            resultadoApuesta = ruletaLoca.apuestaTerceraDocena(totalApuesta);
            console.log("El resultado fue: " + ruletaLoca.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        case 5:
            resultadoApuesta = ruletaLoca.apuestaPrimeraColumna(totalApuesta);
            console.log("El resultado fue: " + ruletaLoca.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        case 6:
            resultadoApuesta = ruletaLoca.apuestaSegundaColumna(totalApuesta);
            console.log("El resultado fue: " + ruletaLoca.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        case 7:
            resultadoApuesta = ruletaLoca.apuestaTerceraColumna(totalApuesta);
            console.log("El resultado fue: " + ruletaLoca.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        case 8:
            resultadoApuesta = ruletaLoca.apuestaPrimeraMitad(totalApuesta);
            console.log("El resultado fue: " + ruletaLoca.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        case 9:
            resultadoApuesta = ruletaLoca.apuestaSegundaMitad(totalApuesta);
            console.log("El resultado fue: " + ruletaLoca.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        case 10:
            resultadoApuesta = ruletaLoca.apuestaRojas(totalApuesta);
            console.log("El resultado fue: " + ruletaLoca.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        case 11:
            resultadoApuesta = ruletaLoca.apuestaNegras(totalApuesta);
            console.log("El resultado fue: " + ruletaLoca.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        case 12:
            resultadoApuesta = ruletaLoca.apuestaPares(totalApuesta);
            console.log("El resultado fue: " + ruletaLoca.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        case 13:
            resultadoApuesta = ruletaLoca.apuestaImpares(totalApuesta);
            console.log("El resultado fue: " + ruletaLoca.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        default:
            return paramCreditos;
    }
}
function numeroDeRuletaElegido() {
    var readlineSync = require('readline-sync');
    var numeroDeseado = readlineSync.questionInt('Ingrese el numero al que desea apostar ');
    if (numeroDeseado < 0 || numeroDeseado > 36) {
        console.log("Numero incorrecto, intente nuevamente");
        numeroDeRuletaElegido();
    }
    return numeroDeseado;
}
function cantApostada(paramCreditos) {
    var readlineSync = require('readline-sync');
    var cantApuesta = readlineSync.questionInt('Ingrese la cantidad de credito que desea apostar ');
    if (cantApuesta < 0 || cantApuesta > paramCreditos) {
        console.log("Cantidad incorrecta, intente nuevamente");
        cantApostada(paramCreditos);
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
menuRuleta(1000);
