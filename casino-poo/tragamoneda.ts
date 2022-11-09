import { Juego } from "./juego"

export class Tragamoneda extends Juego {
    protected slot1: number[] = new Array(0);
    protected slot2: number[] = new Array(0);
    protected slot3: number[] = new Array(0);
    //rango heredable?

    constructor(paramID: number, paramNombre: string, paramCreditos: number, paramCantApuestaMinima?: number){
        super(paramID, paramNombre ,paramCreditos, paramCantApuestaMinima);
        this.slot1[0] = this.numRandom();
        this.slot2[0] = this.numRandom();
        this.slot3[0] = this.numRandom();
    }
    
    protected numRandom(): number {
        console.log("pasooo...");
        return Math.floor(Math.random() * (8 - 0) + 1);
    }

    public apuesta(paramCreditos: number): number {
        this.tiro();
        //metodo anterior
        //let multiplicador: number = this.verifica() + this.verificaEscalera();
        let multiplicador: number = this.verifica();
        let cantCreditos: number = paramCreditos * multiplicador;
        return cantCreditos;
    }

    protected tiro(): void {
        this.slot1[0] = this.numRandom();
        this.slot2[0] = this.numRandom();
        this.slot3[0] = this.numRandom();
    }

    protected verifica(): number {
        let multiplicador: number = 0;
        if(this.slot1[0] === this.slot2[0]) {
            if(this.slot3[0] === this.slot2[0]) {
                multiplicador = this.slot3[0] + 1;
            }
        }
        return multiplicador;
    }

    public mostrarResultado(): void {
        console.log(this.slot1[0] + " " + this.slot2[0] + " " + this.slot3[0]);
    }

}