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
exports.Ruleta = void 0;
var juego_1 = require("./juego");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(paramID, paramCreditos) {
        var _this = _super.call(this, paramID, paramCreditos) || this;
        _this.resultadoRuleta = 0;
        return _this;
    }
    Ruleta.prototype.apuestaPrimeraDocena = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if (this.resultadoRuleta < 13 && this.resultadoRuleta != 0) {
            multiplicador = 1.3;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaSegundaDocena = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if (this.resultadoRuleta < 25 && this.resultadoRuleta > 12) {
            multiplicador = 1.3;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaTerceraDocena = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if (this.resultadoRuleta > 24) {
            multiplicador = 1.3;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaPrimeraColumna = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        var primeraColumna = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
        for (var i = 0; i < primeraColumna.length; i++) {
            if (primeraColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaSegundaColumna = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        var segundaColumna = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
        for (var i = 0; i < segundaColumna.length; i++) {
            if (segundaColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaTerceraColumna = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        var terceraColumna = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
        for (var i = 0; i < terceraColumna.length; i++) {
            if (terceraColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaPrimeraMitad = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if (this.resultadoRuleta < 19 && this.resultadoRuleta != 0) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaSegundaMitad = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if (this.resultadoRuleta > 18) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaRojas = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        var rojas = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];
        for (var i = 0; i < rojas.length; i++) {
            if (rojas[i] === this.resultadoRuleta) {
                multiplicador = 1.2;
                return multiplicador * paramCreditos;
            }
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaNegras = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        var negras = [15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33, 20, 31, 22, 29, 28, 35, 26];
        for (var i = 0; i < negras.length; i++) {
            if (negras[i] === this.resultadoRuleta) {
                multiplicador = 1.2;
                return multiplicador * paramCreditos;
            }
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaPares = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if ((this.resultadoRuleta % 2) === 0) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaImpares = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if ((this.resultadoRuleta % 2) === 1) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaNroUnico = function (paramCreditos, numElegido) {
        this.girarRuleta();
        var multiplicador = 0;
        if (Number(this.resultadoRuleta) == Number(numElegido)) {
            multiplicador = 5;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    //agregar apuesta varios numeros(?)
    Ruleta.prototype.girarRuleta = function () {
        var numeroSalida = Math.floor(Math.random() * (36));
        this.resultadoRuleta = numeroSalida;
    };
    Ruleta.prototype.getResultadoRuleta = function () {
        return this.resultadoRuleta;
    };
    return Ruleta;
}(juego_1.Juego));
exports.Ruleta = Ruleta;
