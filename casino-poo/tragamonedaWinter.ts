import { Tragamoneda } from "./tragamoneda";

export class TragamonedaWinter extends Tragamoneda {
    
    private rango: number;

    constructor(paramID: number, paramNombre: string, paramCreditos: number, paramCantApuestaMinima?: number){
        super(paramID, paramNombre,paramCreditos, paramCantApuestaMinima);
        //ver como es el tema de probabilidad
        this.rango = 2;
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
    
    private mensajesMenuSummer(): void {
        console.log("Bienvenido al tragamonedas Summer");
        console.log("opciones: ");
        console.log("1 _ Apuesta normal");
        console.log("2 _ Apuesta especial");
        console.log("3 _ Salir");
    }
    
    public jugar(paramCreditos: number): number {
        let readlineSync = require('readline-sync');
        //chequeamos si la persona tiene creditos suficientes para usar la maquina.
        if(paramCreditos >= this.getApuestaMinima()) {
            console.log("Usted posee "+ paramCreditos + " creditos.");
            this.mensajesMenuSummer();
            let opcionDeseada: number = readlineSync.questionInt('Ingrese la opcion deseada ');
            if(opcionDeseada < 1 || opcionDeseada > 3) {
                //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
                console.log("numero erroneo Intente nuevamente");
                console.clear();//para limpiar la pantalla
                return this.jugar(paramCreditos);
            } else if(opcionDeseada === 3) {
                //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
                console.log("Usted se retira con " + paramCreditos + " creditos.");
                console.log("Gracias por jugar, esperamos su regreso.");
                return paramCreditos;
            } else {
                //EJECUTAR LA OPCION Y REGRESAR AL PROGRAMA CON LA NUEVA CANTIDAD DE CREDITOS
                return this.jugar(this.ejecucionApuestas(opcionDeseada, paramCreditos));
            }
        } else {
            console.log("Usted ya no posee creditos suficientes");
            console.log("Gracias por jugar, esperamos su regreso.")
            return paramCreditos;
        }
    }
    
    private ejecucionApuestas(paramOpcion: number, paramCreditos: number): number {
        let resultadoApuesta: number = 0;
        let creditosApostados: number = 0;
        let totalCreditos: number = paramCreditos;
        switch(paramOpcion) {
            case 1:
                creditosApostados = this.cantApostada(paramCreditos);
                totalCreditos -= creditosApostados;
                resultadoApuesta = this.apuesta(creditosApostados);
                this.mostrarResultado();
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
    
            case 2:
                creditosApostados = this.cantApostada(paramCreditos);
                totalCreditos -= creditosApostados;
                resultadoApuesta = this.apuestaEspecial(creditosApostados);
                this.mostrarResultado()
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos+= resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;    
    
            default:
                return paramCreditos;
        }
    
    }
}

