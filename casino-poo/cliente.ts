export class Cliente {
    private dinero: number;
    private creditos: number;

    constructor(paramDinero: number) {
        this.dinero = paramDinero;
        this.creditos = 0;
    }

    public getDinero(): number {
        return this.dinero;
    }

    public setDinero(paramDinero: number) {
        this.dinero = paramDinero;
    }

    public getCreditos(): number {
        return this.creditos;
    }

    public setCreditos(paramCreditos: number): void {
        this.creditos = paramCreditos;
    }
} 