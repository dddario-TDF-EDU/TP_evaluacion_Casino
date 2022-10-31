import { Juego } from "./juego";

export class Crap extends Juego{
     private dados: number;

    constructor(paramDados:number,paramID: number, paramCreditos: number) {
        super(paramID, paramCreditos);
        this.dados = paramDados;
        
    }
    getDados() : number {
        return this.dados;
    }
    private tirarDados(): void {
        let numeroSalida: number = Math.floor(Math.random() * 12) + 2;
        this.dados = numeroSalida;
    }
// 
    public apuestaSalida(paramCreditos: number): void {
        this.tirarDados();
        if(this.dados == 7 || this.dados == 11) {
            console.log(`el numero es ${this.dados}, avanza a la proxima ronda`);
        }else if(this.dados == 2 ||this.dados == 3 || this.dados == 12){
            console.log(`el numero es ${this.dados}, crapping out`);
        }else{
             console.log(`el numero es ${this.dados}, tirar nuevamente los dados, y repetir el numero ${this.dados} para continuar`);
        }
    }
    
}