export class Tragamoneda {
    private slot1: number;
    private slot2: number;
    private slot3: number;

    constructor(){
        this.slot1 = this.numRandom();
        this.slot2 = this.numRandom();
        this.slot3 = this.numRandom();
    }
    
    protected numRandom(): number {
        return Math.floor(Math.random() * (8 - 0) + 1);
    }

    public apuesta(paramCreditos: number): number {
        this.tiro();
        let multiplicador: number = this.verifica() + this.verificaEscalera();
        let cantCreditos: number = paramCreditos * multiplicador;
        return cantCreditos;
    }

    protected tiro(): void {
        this.slot1 = this.numRandom();
        this.slot2 = this.numRandom();
        this.slot3 = this.numRandom();
        console.log(this.slot1);
        console.log(this.slot2);
        console.log(this.slot3);
    }

    protected verifica(): number {
        let multiplicador: number = 0;
        if(this.slot1 === this.slot2) {
            if(this.slot3 === this.slot2) {
                multiplicador = this.slot3 + 1;
            }
        }
        return multiplicador;
    }

    protected verificaEscalera(): number {
        let mayor: number = this.buscarMayor();
        let menor: number = this.buscarMenor();
        if(mayor === 0 || menor === 0) {
            return 0;
        } else if ( mayor === 3 && menor === 1) {
            return 5;
        } else {
            return 5;
        }     
    }

    private buscarMayor(): number {
        if(this.slot1 > this.slot2 && this.slot1 > this.slot3) {
            return 1;
        }
        
        if (this.slot2 > this.slot1 && this.slot2 > this.slot3) {
            return 0;
        }

        if (this.slot3 > this.slot1 && this.slot3 > this.slot2) {
            return 3;
        }

        return 0;
    }

    private buscarMenor(): number {
        if(this.slot1 < this.slot2 && this.slot1 < this.slot3) {
            return 1;
        }
        if (this.slot2 < this.slot1 && this.slot2 < this.slot3) {
            return 0;
        }

        if (this.slot3 < this.slot1 && this.slot3 < this.slot2) {
            return 3;
        }

        return 0;
    }

}