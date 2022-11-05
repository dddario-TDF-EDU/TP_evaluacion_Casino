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
        _this.slot1 = _this.numRandom();
        _this.slot2 = _this.numRandom();
        _this.slot3 = _this.numRandom();
        _this.rango = 10;
        return _this;
    }
    TragamonedaWinter.prototype.numRandom = function () {
        return Math.floor(Math.random() * (this.rango - 0) + 1);
    };
    TragamonedaWinter.prototype.apuestaEspecial = function (paramCreditos) {
        var acumulado = 0;
        for (var i = 0; i < 5; i++) {
            this.tiroEspecial(this.rango - i);
            acumulado += this.verifica();
        }
        var cantCreditos = paramCreditos * acumulado;
        return cantCreditos;
    };
    TragamonedaWinter.prototype.tiroEspecial = function (paramRango) {
        this.slot1 = this.numRandomEspecial(paramRango);
        this.slot2 = this.numRandomEspecial(paramRango);
        this.slot3 = this.numRandomEspecial(paramRango);
    };
    TragamonedaWinter.prototype.numRandomEspecial = function (paramRango) {
        return Math.floor(Math.random() * (paramRango - 0) + 1);
    };
    return TragamonedaWinter;
}(tragamoneda_1.Tragamoneda));
exports.TragamonedaWinter = TragamonedaWinter;
