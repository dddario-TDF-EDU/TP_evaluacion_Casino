import { Tragamoneda } from "./tragamoneda";

export class TragamonedaSummer extends Tragamoneda {
    private slot1x3: number[] = new Array (3);
    private slot2x3: number[] = new Array (3);
    private slot3x3: number[] = new Array (3);
    private arraySimbolos: string;

    constructor(){
       super();
       this.tiroDeMaquina();
       this.arraySimbolos = "$ƒ§#+@7";
    }

    //TIRO DE MAQUINA Y VARIANTES SIGUEN FALLANDDOOOOOOO(?)
    private tiroDeMaquina(): void {
        this.slot1x3[1] = this.numRandom();
        this.slot1x3[0] = this.variantes(this.slot1x3[1], -2);
        this.slot1x3[2] = this.variantes(this.slot1x3[1], 2);
        this.slot2x3[1] = this.numRandom();
        this.slot2x3[0] = this.variantes(this.slot2x3[1], -1);
        this.slot2x3[2] = this.variantes(this.slot2x3[1], 1);
        this.slot3x3[1] = this.numRandom();
        this.slot3x3[0] = this.variantes(this.slot3x3[1], -2);
        this.slot3x3[2] = this.variantes(this.slot3x3[1], 2);
    }

    private variantes(paramSlot: number, paramSuma: number): number {
        let resultado: number = paramSlot + paramSuma;
        let diferencia: number;
        if(resultado < 1) {
            if(resultado === 0) {
                resultado+= 1;
            }
            diferencia = 7 - Math.abs(resultado);
            return diferencia;
        }
        
        if(resultado > 7) {
            diferencia = resultado - 7;
            return diferencia;
        }

        return resultado;
    }

    // private numCorrecto(numEntrada: number): number {
    //     if(numEntrada > 8) {
    //         return 1
    //     }
    //     if(numEntrada < 1) {
    //         return 8;
    //     }
    //     return numEntrada;
    // }

    public apuesta(paramCreditos: number): number {
        this.tiroDeMaquina();
        let multiplicador: number = this.verifica() + this.verificaEscalera();
        let cantCreditos: number = paramCreditos * multiplicador;
        return cantCreditos;
    }

    //cambiado para ver simbolos
    public mostrarResultado(): void {
        for(let i=0; i < this.slot1x3.length; i++) {
            console.log(this.arraySimbolos[this.slot1x3[i]-1]  + " " + this.arraySimbolos[this.slot2x3[i]-1] + " " + this.arraySimbolos[this.slot3x3[i]-1]+ " ");
        }
    }

    protected verifica(): number {
        let multiplicador: number = 0;
        for(let i = 0; i < this.slot1x3.length; i++) {
            if(this.slot1x3[i] === this.slot2x3[i] && this.slot3x3[i] === this.slot1x3[i]) {            
                multiplicador = this.slot3x3[i] + 3;
                return multiplicador;
            }
        }
        return multiplicador;
    }

    protected verificaEscalera(): number {
        let multiplicador: number = 0;
        if(this.slot1x3[0] === this.slot2x3[1] && this.slot3x3[2] === this.slot1x3[0]) {
            multiplicador = this.slot3x3[2] + 3;
            return multiplicador;
        }
        
        if (this.slot1x3[2] === this.slot2x3[1] && this.slot3x3[0] === this.slot1x3[2]) {
            multiplicador = this.slot3x3[0] + 3;
            return multiplicador;
        } 
        
        return multiplicador;    
    }

    protected numRandom(): number {
        return Math.floor(Math.random() * (6 - 0) + 1);
    }
    
}    