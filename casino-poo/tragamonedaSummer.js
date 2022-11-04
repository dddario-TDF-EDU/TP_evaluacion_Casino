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
exports.TragamonedaSummer = void 0;
var tragamoneda_1 = require("./tragamoneda");
var TragamonedaSummer = /** @class */ (function (_super) {
    __extends(TragamonedaSummer, _super);
    function TragamonedaSummer(paramID, paramCreditos, paramCantApuestaMinima) {
        var _this = _super.call(this, paramID, paramCreditos, paramCantApuestaMinima) || this;
        _this.slot1x3 = new Array(3);
        _this.slot2x3 = new Array(3);
        _this.slot3x3 = new Array(3);
        _this.tiroDeMaquina();
        _this.arraySimbolos = "$ƒ§#+@7";
        return _this;
    }
    //TIRO DE MAQUINA, genera los numeros al azar de los slots.
    TragamonedaSummer.prototype.tiroDeMaquina = function () {
        this.slot1x3[1] = this.numRandom();
        this.slot1x3[0] = this.variantes(this.slot1x3[1], -2);
        this.slot1x3[2] = this.variantes(this.slot1x3[1], 2);
        this.slot2x3[1] = this.numRandom();
        this.slot2x3[0] = this.variantes(this.slot2x3[1], -1);
        this.slot2x3[2] = this.variantes(this.slot2x3[1], 1);
        this.slot3x3[1] = this.numRandom();
        this.slot3x3[0] = this.variantes(this.slot3x3[1], -2);
        this.slot3x3[2] = this.variantes(this.slot3x3[1], 2);
    };
    //variantes corrige el valor 1.1 y 3.1 en caso de ser mayores o menores al limite
    TragamonedaSummer.prototype.variantes = function (paramSlot, paramSuma) {
        var resultado = paramSlot + paramSuma;
        var diferencia;
        if (resultado < 1) {
            if (resultado === 0) {
                resultado += 1;
            }
            diferencia = 7 - Math.abs(resultado);
            return diferencia;
        }
        if (resultado > 7) {
            diferencia = resultado - 7;
            return diferencia;
        }
        return resultado;
    };
    //entra la cantidad apuesta, verifica si gano y devuelde el resultado. 
    TragamonedaSummer.prototype.apuesta = function (paramCreditos) {
        this.tiroDeMaquina();
        var multiplicador = this.verifica() + this.verificaEscalera();
        var cantCreditos = paramCreditos * multiplicador;
        return cantCreditos;
    };
    //Muestra el resultado, (cambiado para ver simbolos)
    TragamonedaSummer.prototype.mostrarResultado = function () {
        for (var i = 0; i < this.slot1x3.length; i++) {
            console.log(this.arraySimbolos[this.slot1x3[i] - 1] + " " + this.arraySimbolos[this.slot2x3[i] - 1] + " " + this.arraySimbolos[this.slot3x3[i] - 1] + " ");
        }
    };
    //Verifica lineas horizontales
    TragamonedaSummer.prototype.verifica = function () {
        var multiplicador = 0;
        for (var i = 0; i < this.slot1x3.length; i++) {
            if (this.slot1x3[i] === this.slot2x3[i] && this.slot3x3[i] === this.slot1x3[i]) {
                multiplicador = this.slot3x3[i] + 3;
                return multiplicador;
            }
        }
        return multiplicador;
    };
    //Verifica lineas diagonales
    TragamonedaSummer.prototype.verificaEscalera = function () {
        var multiplicador = 0;
        if (this.slot1x3[0] === this.slot2x3[1] && this.slot3x3[2] === this.slot1x3[0]) {
            multiplicador = this.slot3x3[2] + 3;
            return multiplicador;
        }
        if (this.slot1x3[2] === this.slot2x3[1] && this.slot3x3[0] === this.slot1x3[2]) {
            multiplicador = this.slot3x3[0] + 3;
            return multiplicador;
        }
        return multiplicador;
    };
    //genera el valor Random de 1 a 7
    TragamonedaSummer.prototype.numRandom = function () {
        return Math.floor(Math.random() * (6 - 0) + 1);
    };
    return TragamonedaSummer;
}(tragamoneda_1.Tragamoneda));
exports.TragamonedaSummer = TragamonedaSummer;