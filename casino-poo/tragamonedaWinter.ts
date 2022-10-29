import { Tragamoneda } from "./tragamoneda";

class TragamonedaWinter extends Tragamoneda {
    
    private rango: number;

    constructor(paramID: number, paramCreditos: number, paramCantApuestaMinima?: number){
        super(paramID, paramCreditos, paramCantApuestaMinima);
        this.slot1 = this.numRandom();
        this.slot2 = this.numRandom();
        this.slot3 = this.numRandom();
        this.rango = 10;
    }

    protected numRandom(): number {
        return Math.floor(Math.random() * (this.rango - 0) + 1);
    }

    public apuestaEspecial(paramCreditos: number): number {
        let acumulado: number = 0;
        for(let i = 0; i < 5; i++) {
            this.tiroEspecial(this.rango - i);
            acumulado += this.verifica();
        }
        let cantCreditos: number = paramCreditos * acumulado;
        return cantCreditos;
    }


    private tiroEspecial(paramRango: number): void {
        this.slot1 = this.numRandomEspecial(paramRango);
        this.slot2 = this.numRandomEspecial(paramRango);
        this.slot3 = this.numRandomEspecial(paramRango);
    }

    private numRandomEspecial(paramRango: number): number {
        return Math.floor(Math.random() * (paramRango - 0) + 1);
    }
}