import { Tragamoneda } from "./tragamoneda";

export class TragamonedaSummer extends Tragamoneda {
    private slot1x3: number[] = new Array (3);
    private slot2x3: number[] = new Array (3);
    private slot3x3: number[] = new Array (3);
    private arraySimbolos: string;

    constructor(paramID: number, paramCreditos: number, paramCantApuestaMinima?: number){
        super(paramID, paramCreditos, paramCantApuestaMinima);
       this.tiroDeMaquina();
       this.arraySimbolos = "$ƒ§#+@7";
    }

    //TIRO DE MAQUINA, genera los numeros al azar de los slots.
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

    //variantes corrige el valor 1.1 y 3.1 en caso de ser mayores o menores al limite
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

    //entra la cantidad apuesta, verifica si gano y devuelde el resultado. 
    public apuesta(paramCreditos: number): number {
        this.tiroDeMaquina();
        let multiplicador: number = this.verifica() + this.verificaEscalera();
        let cantCreditos: number = paramCreditos * multiplicador;
        return cantCreditos;
    }

    //Muestra el resultado, (cambiado para ver simbolos)
    public mostrarResultado(): void {
        for(let i=0; i < this.slot1x3.length; i++) {
            console.log(this.arraySimbolos[this.slot1x3[i]-1]  + " " + this.arraySimbolos[this.slot2x3[i]-1] + " " + this.arraySimbolos[this.slot3x3[i]-1]+ " ");
        }
    }

    //Verifica lineas horizontales
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

    //Verifica lineas diagonales
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

    //genera el valor Random de 1 a 7
    protected numRandom(): number {
        return Math.floor(Math.random() * (6 - 0) + 1);
    }
    
}    