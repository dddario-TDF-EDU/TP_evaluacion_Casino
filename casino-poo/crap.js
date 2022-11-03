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
exports.Crap = void 0;
var juego_1 = require("./juego");
var Crap = /** @class */ (function (_super) {
    __extends(Crap, _super);
    function Crap(paramDados, paramID, paramCreditos) {
        var _this = _super.call(this, paramID, paramCreditos) || this;
        _this.dados = paramDados;
        return _this;
    }
    Crap.prototype.getDados = function () {
        return this.dados;
    };
    Crap.prototype.tirarDados = function () {
        var numeroSalida = Math.floor(Math.random() * 12) + 2;
        this.dados = numeroSalida;
    };
    Crap.prototype.apostarSalida = function (paramCreditos) {
        this.tirarDados();
        if (this.dados == 7 || this.dados == 11) {
            console.log("el numero es ".concat(this.dados, ", avanza a la proxima ronda"));
        }
        else if (this.dados == 2 || this.dados == 3 || this.dados == 12) {
            console.log("el numero es ".concat(this.dados, ", crapping out"));
        }
        else {
            console.log("el numero es ".concat(this.dados, ", tirar nuevamente los dados, y repetir el numero ").concat(this.dados, " para continuar"));
            this.apostarSalidaSegundoIntento(paramCreditos, this.dados);
        }
    };
    Crap.prototype.apostarSalidaSegundoIntento = function (paramCreditos, resultadoAnterior) {
        this.tirarDados();
        if (this.dados == resultadoAnterior) {
            console.log("el numero es ".concat(this.dados, ", avanza a la proxima ronda"));
        }
        else if (this.dados == 7) {
            console.log("el numero es ".concat(this.dados, ", crapping out"));
        }
    };
    Crap.prototype.apostarPassLine = function (paramCreditos) {
        this.tirarDados();
        if (this.dados == 7 || this.dados == 11) {
            console.log("el numero es ".concat(this.dados, ", la apuesta gana"));
            console.log("la apuesta se devuelve al ganador");
        }
        else if (this.dados == 2 || this.dados == 3 || this.dados == 12) {
            console.log("el numero es ".concat(this.dados, ", crapping out, la apuesta pierde"));
        }
        else {
            console.log("el numero es ".concat(this.dados, ", tirar nuevamente los dados, y repetir el numero ").concat(this.dados, " para continuar"));
        }
    };
    Crap.prototype.apostardontPassBar = function (paramCreditos) {
        this.tirarDados();
        if (this.dados == 7 || this.dados == 11) {
            console.log("el numero es ".concat(this.dados, ", la apuesta pierde"));
        }
        if (this.dados == 2 || this.dados == 3) {
            console.log("el numero es ".concat(this.dados, ", la apuesta gana"));
            console.log("la apuesta se devuelve al ganador");
        }
        else if (this.dados == 12) {
            console.log("el numero es ".concat(this.dados, ", es un empate"));
        }
        else {
            console.log("el numero es ".concat(this.dados, ", tirar nuevamente los dados, y repetir el numero ").concat(this.dados, " para continuar"));
        }
    };
    Crap.prototype.apostarEnField = function (paramCreditos) {
        this.tirarDados();
        if (this.dados == 3 || this.dados == 4 || this.dados == 9 || this.dados == 10 || this.dados == 11) {
            console.log("el numero es ".concat(this.dados, ", la apuesta gana"));
            console.log("la apuesta se devuelve al ganador");
        }
        if (this.dados == 2 || this.dados == 12) {
            console.log("el numero es ".concat(this.dados, ", la apuesta gana"));
            console.log("la apuesta se duplica para el ganador");
        }
        else {
            console.log("el numero es ".concat(this.dados, ", la apuesta pierde"));
        }
    };
    return Crap;
}(juego_1.Juego));
exports.Crap = Crap;
