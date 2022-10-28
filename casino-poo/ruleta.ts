import { Juego } from "./juego";

export class Ruleta extends Juego {

    private resultadoRuleta: number;
    
    constructor(paramID: number, paramCreditos: number) {
        super(paramID, paramCreditos);
        this.resultadoRuleta = 0;
    }

    public apuestaPrimeraDocena(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if(this.resultadoRuleta < 13 && this.resultadoRuleta != 0) {
            multiplicador = 1.3;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaSegundaDocena(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if(this.resultadoRuleta < 25 && this.resultadoRuleta > 12) {
            multiplicador = 1.3;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaTerceraDocena(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if(this.resultadoRuleta > 24) {
            multiplicador = 1.3;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaPrimeraColumna(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        let primeraColumna: number[] = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
        for(let i = 0; i < primeraColumna.length; i++) {
            if(primeraColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaSegundaColumna(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        let segundaColumna: number[] = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
        for(let i = 0; i < segundaColumna.length; i++) {
            if(segundaColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaTerceraColumna(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        let terceraColumna: number[] = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
        for(let i = 0; i < terceraColumna.length; i++) {
            if(terceraColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaPrimeraMitad(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if(this.resultadoRuleta < 19 && this.resultadoRuleta != 0) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaSegundaMitad(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if(this.resultadoRuleta > 18) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaRojas(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        let rojas: number[] = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];
        for(let i = 0; i < rojas.length; i++) {
            if(rojas[i] === this.resultadoRuleta) {
                multiplicador = 1.2;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaNegras(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        let negras: number[] = [15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33, 20, 31, 22, 29, 28, 35, 26];
        for(let i = 0; i < negras.length; i++) {
            if(negras[i] === this.resultadoRuleta) {
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