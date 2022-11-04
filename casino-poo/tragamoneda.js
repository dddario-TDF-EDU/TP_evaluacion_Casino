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
exports.Tragamoneda = void 0;
var juego_1 = require("./juego");
var Tragamoneda = /** @class */ (function (_super) {
    __extends(Tragamoneda, _super);
    function Tragamoneda(paramID, paramCreditos, paramCantApuestaMinima) {
        var _this = _super.call(this, paramID, paramCreditos, paramCantApuestaMinima) || this;
        _this.slot1 = _this.numRandom();
        _this.slot2 = _this.numRandom();
        _this.slot3 = _this.numRandom();
        return _this;
    }
    Tragamoneda.prototype.numRandom = function () {
        return Math.floor(Math.random() * (8 - 0) + 1);
    };
    Tragamoneda.prototype.apuesta = function (paramCreditos) {
        this.tiro();
        //metodo anterior
        //let multiplicador: number = this.verifica() + this.verificaEscalera();
        var multiplicador = this.verifica();
        var cantCreditos = paramCreditos * multiplicador;
        return cantCreditos;
    };
    Tragamoneda.prototype.tiro = function () {
        this.slot1 = this.numRandom();
        this.slot2 = this.numRandom();
        this.slot3 = this.numRandom();
    };
    Tragamoneda.prototype.verifica = function () {
        var multiplicador = 0;
        if (this.slot1 === this.slot2) {
            if (this.slot3 === this.slot2) {
                multiplicador = this.slot3 + 1;
            }
        }
        return multiplicador;
    };
    Tragamoneda.prototype.getResultado = function () {
        console.log(this.slot1);
        console.log(this.slot2);
        console.log(this.slot3);
    };
    return Tragamoneda;
}(juego_1.Juego));
exports.Tragamoneda = Tragamoneda;
