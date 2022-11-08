import { Tragamoneda } from "./tragamoneda";

export class TragamonedaWinter extends Tragamoneda {
    
    private rango: number;

    constructor(paramID: number, paramNombre: string, paramCreditos: number, paramCantApuestaMinima?: number){
        super(paramID, paramNombre,paramCreditos, paramCantApuestaMinima);
        this.rango = 3;
    }

    protected numRandom(): number {
        return Math.floor(Math.random() * this.rango + 1);
    }

    public apuestaEspecial(paramCreditos: number): number {
        let acumulado: number = 0;
        let rangoEspecial: number = this.rango + 3;
        for(let i = 0; i < 5; i++) {
            this.tiroEspecial(rangoEspecial - i);
            //REVISAR ACUMULADO (......)
            acumulado += this.verifica();
        }
        let cantCreditos: number = paramCreditos * acumulado;
        return cantCreditos;
    }


    //TIRO ESPECIAL POR RACHA....
    private apuestaLibre(paramCreditos: number): number {
        this.tiro();
        let multiplicador: number = this.verifica();
            if (multiplicador > 0) {
                    multiplicador = 2;
            }
            let cantCreditos: number = paramCreditos * multiplicador;
            return cantCreditos;
    }


    //TIRO NORMAL....
    public apuesta(paramCreditos: number): number {
        this.tiro();
        let multiplicador: number = this.verifica();
        let cantCreditos: number = paramCreditos * multiplicador;
            if (cantCreditos > 0) {
               cantCreditos = this.apuestaLibre(cantCreditos);
            }
            return cantCreditos;
    }


    private tiroEspecial(paramRango: number): void {
        this.slot1[0] = this.numRandomEspecial(paramRango);
        this.slot2[0] = this.numRandomEspecial(paramRango);
        this.slot3[0] = this.numRandomEspecial(paramRango);
    }

    private numRandomEspecial(paramRango: number): number {
        return Math.floor(Math.random() * (paramRango) + 1);
    }
}

let cWinter = new TragamonedaWinter(0, "panchita",1000);

console.log("normal: " + cWinter.apuesta(100));

console.log("especial: " + cWinter.apuestaEspecial(100));
