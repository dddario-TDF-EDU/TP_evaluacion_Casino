"use strict";
exports.__esModule = true;
exports.Juego = void 0;
var Juego = /** @class */ (function () {
    function Juego(paramID, paramCreditos, paramCantApuestaMinima) {
        this.id = paramID;
        this.cantCreditosEnMaquina = paramCreditos;
        this.balance = 0;
        this.cantApuestasTotales = 0;
        this.cantApuestasGanadas = 0;
        this.cantApuestasPerdidas = 0;
        if (paramCantApuestaMinima === undefined) {
            this.cantApuestaMinima = 0;
        }
        else {
            this.cantApuestaMinima = paramCantApuestaMinima;
        }
    }
    Juego.prototype.ticketTotal = function () {
        /*cambio la Logica pero puede quedarse(?), revisar*/
        return [];
    };
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
    return Juego;
}());
exports.Juego = Juego;
