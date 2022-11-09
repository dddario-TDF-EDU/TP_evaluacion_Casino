"use strict";
exports.__esModule = true;
var tragamonedaSummer_1 = require("./casino-poo/tragamonedaSummer");
var cliente_1 = require("./casino-poo/cliente");
var casino_1 = require("./casino-poo/casino");
var TragamonedaWinter_1 = require("./casino-poo/TragamonedaWinter");
var ruleta_1 = require("./casino-poo/ruleta");
var crap_1 = require("./casino-poo/crap");
//falta resolver la clase Cliente-Tesorersia-Casino para poder probar esto.
var summer1 = new tragamonedaSummer_1.TragamonedaSummer(0, "Tragamonedas Summer", 10000, 100);
var winter1 = new TragamonedaWinter_1.TragamonedaWinter(1, "Tragamonedas Winter", 10000);
var ruleta1 = new ruleta_1.Ruleta(2, "La Ruleta", 10000);
var crap1 = new crap_1.Crap(3, "Craps", 10000, 25);
//comentario
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
//instanciamos la clase Casino.
var casino777 = new casino_1.Casino(100000, 0.5, cliente1, juegosCasino);
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
var datosDeMaquinas = casino777.impresionTicket();
console.log(datosDeMaquinas);
