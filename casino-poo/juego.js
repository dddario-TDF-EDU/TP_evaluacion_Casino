"use strict";
exports.__esModule = true;
exports.Juego = void 0;
var Juego = /** @class */ (function () {
    function Juego(paramID, paramNombre, paramCreditos, paramCantApuestaMinima) {
        this.id = paramID;
        this.nombre = paramNombre;
        this.cantCreditosEnMaquina = paramCreditos;
        this.balance = 0;
        this.cantApuestasTotales = 0;
        this.cantApuestasGanadas = 0;
        this.cantApuestasPerdidas = 0;
        if (paramCantApuestaMinima === undefined) {
            this.cantApuestaMinima = 1;
        }
        else {
            this.cantApuestaMinima = paramCantApuestaMinima;
        }
    }
    Juego.prototype.getCreditos = function () {
        return this.cantCreditosEnMaquina;
    };
    //reemplaza a Perdida y ganancia
    Juego.prototype.getBalance = function () {
        return this.balance;
    };
    Juego.prototype.getCantidadApuestasTotales = function () {
        return this.cantApuestasTotales;
    };
    Juego.prototype.getCantidadApuestasGanadas = function () {
        return this.cantApuestasGanadas;
    };
    Juego.prototype.getCantidadApuestasPerdidas = function () {
        return this.cantApuestasPerdidas;
    };
    Juego.prototype.getApuestaMinima = function () {
        return this.cantApuestaMinima;
    };
    Juego.prototype.getNombre = function () {
        return this.nombre;
    };
    Juego.prototype.getID = function () {
        return this.id;
    };
    Juego.prototype.jugar = function (paramCreditos) {
        return paramCreditos;
    };
    Juego.prototype.cantApostada = function (paramCreditos) {
        var readlineSync = require('readline-sync');
        var cantApuesta = readlineSync.questionInt('Ingrese la cantidad de credito que desea apostar ');
        if (cantApuesta < this.getApuestaMinima() || cantApuesta > paramCreditos) {
            console.log("Cantidad incorrecta, intente nuevamente");
            return this.cantApostada(paramCreditos);
        }
        return cantApuesta;
    };
    //POSIBLES NUEVOS METODOS.
    Juego.prototype.conteoEstadisticas = function (paramResultado, paramCantApostada) {
        this.cantApuestasTotales++;
        if (paramResultado > 0) {
            this.cantApuestasGanadas++;
            this.balance -= paramResultado;
        }
        else {
            this.cantApuestasPerdidas++;
            this.balance += paramCantApostada;
        }
    };
    Juego.prototype.ajusteCreditoEnMaquina = function () {
        //se corrigen los creditos que posee la maquina en cada jugada.
        this.cantCreditosEnMaquina += this.balance;
    };
    Juego.prototype.mensajeResultado = function (paramResultado, paramCantApostada) {
        this.conteoEstadisticas(paramResultado, paramCantApostada);
        this.ajusteCreditoEnMaquina();
        if (paramResultado > 0) {
            return "Usted gano " + paramResultado + " creditos.";
        }
        else {
            return "Usted perdio.";
        }
    };
    Juego.prototype.pausaParaLeer = function () {
        var readlineSync = require('readline-sync');
        var pausa = readlineSync.question('');
    };
    return Juego;
}());
exports.Juego = Juego;
