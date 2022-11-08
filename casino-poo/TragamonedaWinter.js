"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TragamonedaWinter = void 0;
var tragamoneda_1 = require("./tragamoneda");
var TragamonedaWinter = /** @class */ (function (_super) {
    __extends(TragamonedaWinter, _super);
    function TragamonedaWinter(paramID, paramNombre, paramCreditos, paramCantApuestaMinima) {
        var _this = _super.call(this, paramID, paramNombre, paramCreditos, paramCantApuestaMinima) || this;
        _this.rango = 3;
        return _this;
    }
    TragamonedaWinter.prototype.numRandom = function () {
        return Math.floor(Math.random() * this.rango + 1);
    };
    TragamonedaWinter.prototype.apuestaEspecial = function (paramCreditos) {
        var acumulado = 0;
        var rangoEspecial = this.rango + 3;
        for (var i = 0; i < 5; i++) {
            this.tiroEspecial(rangoEspecial - i);
            //REVISAR ACUMULADO (......)
            acumulado += this.verifica();
        }
        var cantCreditos = paramCreditos * acumulado;
        return cantCreditos;
    };
    //TIRO ESPECIAL POR RACHA....
    TragamonedaWinter.prototype.apuestaLibre = function (paramCreditos) {
        this.tiro();
        var multiplicador = this.verifica();
        if (multiplicador > 0) {
            multiplicador = 2;
        }
        var cantCreditos = paramCreditos * multiplicador;
        return cantCreditos;
    };
    //TIRO NORMAL....
    TragamonedaWinter.prototype.apuesta = function (paramCreditos) {
        this.tiro();
        var multiplicador = this.verifica();
        var cantCreditos = paramCreditos * multiplicador;
        if (cantCreditos > 0) {
            cantCreditos = this.apuestaLibre(cantCreditos);
        }
        return cantCreditos;
    };
    TragamonedaWinter.prototype.tiroEspecial = function (paramRango) {
        this.slot1[0] = this.numRandomEspecial(paramRango);
        this.slot2[0] = this.numRandomEspecial(paramRango);
        this.slot3[0] = this.numRandomEspecial(paramRango);
    };
    TragamonedaWinter.prototype.numRandomEspecial = function (paramRango) {
        return Math.floor(Math.random() * (paramRango) + 1);
    };
    return TragamonedaWinter;
}(tragamoneda_1.Tragamoneda));
exports.TragamonedaWinter = TragamonedaWinter;
