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
    Juego.prototype.jugar = function (paramCreditos, paramJuego) {
        this.cantApuestasTotales++;
        return paramCreditos;
    };
    return Juego;
}());
exports.Juego = Juego;
