"use strict";
exports.__esModule = true;
var tragamonedaSummer_1 = require("./casino-poo/tragamonedaSummer");
var cliente_1 = require("./casino-poo/cliente");
var mainSummer_1 = require("./mainSummer");
var mainRuleta_1 = require("./mainRuleta");
var casino_1 = require("./casino-poo/casino");
var TragamonedaWinter_1 = require("./casino-poo/TragamonedaWinter");
var ruleta_1 = require("./casino-poo/ruleta");
var crap_1 = require("./casino-poo/crap");
function menuCentral(paramCreditos, pSummer, pWinter, pRuleta, pCrap) {
    console.log("Bienvenido al casino RXXXX");
    console.log("Usted posee " + paramCreditos + " creditos.");
    if (paramCreditos > 0) {
        mensajesMenuCentral();
        var readlineSync = require('readline-sync');
        var opcionDeseada = readlineSync.questionInt('Ingrese la opcion deseada: ');
        if (opcionDeseada < 1 || opcionDeseada > 5) {
            //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
            console.log("numero erroneo Intente nuevamente");
            console.clear(); //para limpiar la pantalla
            //debe ser un return??
            return menuCentral(paramCreditos, pSummer, pWinter, pRuleta, pCrap);
        }
        else if (opcionDeseada === 5) {
            //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
            console.log("Usted se retira con " + paramCreditos + " creditos.");
            console.log("Gracias por jugar, esperamos su regreso.");
            return paramCreditos;
        }
        else {
            //EJECUTAR LA OPCION Y REGRESAR AL PROGRAMA CON LA NUEVA CANTIDAD DE CREDITOS
            //debe ser un return??
            return menuCentral(ejecucionMaquinas(opcionDeseada, paramCreditos, pSummer, pWinter, pRuleta, pCrap), pSummer, pWinter, pRuleta, pCrap);
        }
    }
    else {
        console.log("Usted ya no posee creditos suficientes, gracias por jugar vuelva pronto.");
        return paramCreditos;
    }
}
function mensajesMenuCentral() {
    console.log("Menu principal");
    console.log("1 _ Jugar con maquina tragamonedas Summer.");
    console.log("2 _ Jugar con maquina tragamonedas Winter.");
    console.log("3 _ Jugar ruleta.");
    console.log("4 _ Jugar crap.");
    console.log("5 _ Salir.");
    console.log("");
}
function ejecucionMaquinas(paramOpcion, paramCreditos, pSummer, pWinter, pRuleta, pCrap) {
    switch (paramOpcion) {
        case 1:
            return (0, mainSummer_1.menuSummer)(paramCreditos, pSummer);
        case 3:
            return (0, mainRuleta_1.menuRuleta)(paramCreditos, pRuleta);
        default:
            return paramCreditos;
    }
}
//falta resolver la clase Cliente-Tesorersia-Casino para poder probar esto.
var summer1 = new tragamonedaSummer_1.TragamonedaSummer(0, 10000, 100);
var winter1 = new TragamonedaWinter_1.TragamonedaWinter(1, 10000);
var ruleta1 = new ruleta_1.Ruleta(2, 10000);
//los dados no necesitan parametro, y alteran el orden.
var crap1 = new crap_1.Crap(0, 3, 10000);
//preguntamos la cantidad de plata que posee el cliente.
function cantDineroCliente() {
    var readlineSync = require('readline-sync');
    var cantDineroIngresado = readlineSync.questionInt('Ingrese la cantidad de dinero que va a convertir a credito: ');
    if (cantDineroIngresado < 1) {
        console.log("Por favor ingrese un numero valido.");
        cantDineroCliente();
    }
    return cantDineroIngresado;
}
var cliente1 = new cliente_1.Cliente(cantDineroCliente());
//instanciamos la clase Casino.
var casino777 = new casino_1.Casino(100000, 0.5, cliente1, summer1, winter1, ruleta1, crap1);
//convertimos todos el dinero del cliente en credito. 
//esto quedo re feo
cliente1.setCreditos(casino777.comprarCreditos(cliente1.getDinero()));
cliente1.setDinero(0);
cliente1.setCreditos(menuCentral(cliente1.getCreditos(), summer1, winter1, ruleta1, crap1));
//UNA VEZ TERMINADO DE JUGAR RECUPERAMOS EL DINERO.
cliente1.setDinero(casino777.intercambiarCreditos(cliente1.getCreditos()));
//FALTA HACER EL DESCUENTO Y SUMA A LOS JUEGOS.
