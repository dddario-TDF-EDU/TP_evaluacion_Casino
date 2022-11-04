"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(paramCapitalGeneral, paramValorCredito, paramCliente, pSummer, pWinter, pRuleta, pCrap) {
        this.valorCreditos = paramValorCredito;
        this.capitalGeneral = paramCapitalGeneral;
        this.balance = 0;
        this.cliente = paramCliente;
        this.juegoSummer = pSummer;
        this.juegoWinter = pWinter;
        this.juegoRuleta = pRuleta;
        this.juegoCrap = pCrap;
    }
    Casino.prototype.getBalance = function () {
        return this.balance;
    };
    Casino.prototype.setBalance = function (paramBalance) {
        this.balance = paramBalance;
    };
    Casino.prototype.getCapitalGeneral = function () {
        return this.capitalGeneral;
    };
    Casino.prototype.setCapitalGeneral = function (paramCapitalGeneral) {
        this.capitalGeneral = paramCapitalGeneral;
    };
    Casino.prototype.getValorConvertir = function () {
        return this.valorCreditos;
    };
    Casino.prototype.setValorConvertir = function (paramValorCredito) {
        this.valorCreditos = paramValorCredito;
    };
    Casino.prototype.comprarCreditos = function (paramDinero) {
        var creditosSalida = paramDinero / this.valorCreditos;
        this.capitalGeneral += paramDinero;
        return creditosSalida;
    };
    Casino.prototype.intercambiarCreditos = function (paramCreditos) {
        var dineroSalida = paramCreditos * this.valorCreditos;
        this.capitalGeneral -= dineroSalida;
        return dineroSalida;
    };
    return Casino;
}());
exports.Casino = Casino;
