import { Juego } from "./juego";

export class Ruleta extends Juego {

    private primeraDocena: number[];
    private segundaDocena: number[];
    private terceraDocena: number[];
    private primeraColumna: number[];
    private segundaColumna: number[];
    private terceraColumna: number[];
    private primeraMitad: number[];
    private segundaMitad: number[];
    private rojas: number[];
    private negras: number[];
    private resultadoRuleta: number;

    
    constructor(paramID: number, paramCreditos: number) {
        super(paramID, paramCreditos);
        this.primeraDocena = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.segundaDocena = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        this.terceraDocena = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        this.primeraColumna = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
        this.segundaColumna = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
        this.terceraColumna = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
        this.primeraMitad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
        this.segundaMitad = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        this.rojas = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];
        this.negras = [15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33, 20, 31, 22, 29, 28, 35, 26];
        this.resultadoRuleta = 0;
    }

    public apuestaPrimeraDocena(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        for(let i = 0; i < this.primeraDocena.length; i++) {
            if(this.primeraDocena[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaSegundaDocena(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        for(let i = 0; i < this.segundaDocena.length; i++) {
            if(this.segundaDocena[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaTerceraDocena(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        for(let i = 0; i < this.terceraDocena.length; i++) {
            if(this.terceraDocena[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaPrimeraColumna(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        for(let i = 0; i < this.primeraColumna.length; i++) {
            if(this.primeraColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaSegundaColumna(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        for(let i = 0; i < this.segundaColumna.length; i++) {
            if(this.segundaColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaTerceraColumna(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        for(let i = 0; i < this.terceraColumna.length; i++) {
            if(this.terceraColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaPrimeraMitad(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        for(let i = 0; i < this.primeraMitad.length; i++) {
            if(this.primeraMitad[i] === this.resultadoRuleta) {
                multiplicador = 1.2;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaSegundaMitad(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        for(let i = 0; i < this.segundaMitad.length; i++) {
            if(this.segundaMitad[i] === this.resultadoRuleta) {
                multiplicador = 1.2;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaRojas(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        for(let i = 0; i < this.rojas.length; i++) {
            if(this.rojas[i] === this.resultadoRuleta) {
                multiplicador = 1.2;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaNegras(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        for(let i = 0; i < this.negras.length; i++) {
            if(this.negras[i] === this.resultadoRuleta) {
                multiplicador = 1.2;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaPares(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if((this.resultadoRuleta % 2) === 0 ) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaImpares(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if((this.resultadoRuleta % 2) === 1 ) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaNroUnico(paramCreditos: number, numElegido: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if(Number(this.resultadoRuleta) === numElegido) {
            multiplicador = 5;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    //agregar apuesta varios numeros(?)

    private girarRuleta(): void {
        let numeroSalida: number = Math.floor(Math.random() * (36));
        this.resultadoRuleta = numeroSalida;
    }

    public getResultadoRuleta(): number {
        return this.resultadoRuleta;
    }

}