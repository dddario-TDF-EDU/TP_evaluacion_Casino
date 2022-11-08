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
    function Tragamoneda(paramID, paramNombre, paramCreditos, paramCantApuestaMinima) {
        var _this = _super.call(this, paramID, paramNombre, paramCreditos, paramCantApuestaMinima) || this;
        _this.slot1 = new Array(0);
        _this.slot2 = new Array(0);
        _this.slot3 = new Array(0);
        _this.slot1[0] = _this.numRandom();
        _this.slot2[0] = _this.numRandom();
        _this.slot3[0] = _this.numRandom();
        return _this;
    }
    Tragamoneda.prototype.numRandom = function () {
        console.log("pasooo...");
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
        this.slot1[0] = this.numRandom();
        this.slot2[0] = this.numRandom();
        this.slot3[0] = this.numRandom();
    };
    Tragamoneda.prototype.verifica = function () {
        var multiplicador = 0;
        if (this.slot1[0] === this.slot2[0]) {
            if (this.slot3[0] === this.slot2[0]) {
                multiplicador = this.slot3[0] + 1;
            }
        }
        return multiplicador;
    };
    Tragamoneda.prototype.mostrarResultado = function () {
        console.log(this.slot1[0] + " " + this.slot2[0] + " " + this.slot3[0]);
    };
    return Tragamoneda;
}(juego_1.Juego));
exports.Tragamoneda = Tragamoneda;
