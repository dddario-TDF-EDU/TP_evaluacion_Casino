"use strict";
exports.__esModule = true;
var fs = require("fs");
var tragamonedaSummer_1 = require("./casino-poo/tragamonedaSummer");
var cliente_1 = require("./casino-poo/cliente");
var casino_1 = require("./casino-poo/casino");
var TragamonedaWinter_1 = require("./casino-poo/TragamonedaWinter");
var ruleta_1 = require("./casino-poo/ruleta");
var crap_1 = require("./casino-poo/crap");
var summer1 = new tragamonedaSummer_1.TragamonedaSummer(0, "Tragamonedas Summer", 10000, 100);
var winter1 = new TragamonedaWinter_1.TragamonedaWinter(1, "Tragamonedas Winter", 10000);
var ruleta1 = new ruleta_1.Ruleta(2, "La Ruleta", 10000);
var crap1 = new crap_1.Crap(3, "Craps", 10000, 25);
var juegosCasino = [summer1, winter1, ruleta1, crap1];
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
var casino777 = new casino_1.Casino(100000, 0.5, cliente1, juegosCasino);
casino777.convertirDineroCliente();
casino777.menuCentral();
casino777.devolverDineroCliente();
var datosDeMaquinas = casino777.impresionTicket();
generarTickets(datosDeMaquinas);
//console.log(datosDeMaquinas);
function generarTickets(paramDatos) {
    for (var index = 0; index < paramDatos.length; index++) {
        var nombreArchivo = juegosCasino[index].getID() + juegosCasino[index].getNombre();
        fs.writeFileSync(nombreArchivo + ".txt", paramDatos[index]);
    }
}
