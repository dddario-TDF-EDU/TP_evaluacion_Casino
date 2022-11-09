import { Tragamoneda } from "./tragamoneda";

export class TragamonedaSummer extends Tragamoneda {
    private arraySimbolos: string;
    //rango heredable?

    constructor(paramID: number, paramNombre: string, paramCreditos: number, paramCantApuestaMinima?: number){
        super(paramID, paramNombre, paramCreditos, paramCantApuestaMinima);
        this.slot1 = new Array (3);
        this.slot2 = new Array (3);
        this.slot3 = new Array (3);
        this.tiroDeMaquina();
        this.arraySimbolos = "$ƒ§#+@7";
    }

    //TIRO DE MAQUINA, genera los numeros al azar de los slots.
    private tiroDeMaquina(): void {
        this.slot1[1] = this.numRandom();
        this.slot1[0] = this.variantes(this.slot1[1], -2);
        this.slot1[2] = this.variantes(this.slot1[1], 2);
        this.slot2[1] = this.numRandom();
        this.slot2[0] = this.variantes(this.slot2[1], -1);
        this.slot2[2] = this.variantes(this.slot2[1], 1);
        this.slot3[1] = this.numRandom();
        this.slot3[0] = this.variantes(this.slot3[1], -2);
        this.slot3[2] = this.variantes(this.slot3[1], 2);
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
        for(let i=0; i < this.slot1.length; i++) {
            console.log(this.arraySimbolos[this.slot1[i]-1]  + " " + this.arraySimbolos[this.slot2[i]-1] + " " + this.arraySimbolos[this.slot3[i]-1]+ " ");
        }
    }

    //Verifica lineas horizontales
    protected verifica(): number {
        let multiplicador: number = 0;
        for(let i = 0; i < this.slot1.length; i++) {
            if(this.slot1[i] === this.slot2[i] && this.slot3[i] === this.slot1[i]) {            
                multiplicador = this.slot3[i] + 3;
                return multiplicador;
            }
        }
        return multiplicador;
    }

    //Verifica lineas diagonales
    protected verificaEscalera(): number {
        let multiplicador: number = 0;
        if(this.slot1[0] === this.slot2[1] && this.slot3[2] === this.slot1[0]) {
            multiplicador = this.slot3[2] + 3;
            return multiplicador;
        }
        
        if (this.slot1[2] === this.slot2[1] && this.slot3[0] === this.slot1[2]) {
            multiplicador = this.slot3[0] + 3;
            return multiplicador;
        } 
        
        return multiplicador;    
    }

    //genera el valor Random de 1 a 7
    protected numRandom(): number {
        return Math.floor(Math.random() * (6 - 0) + 1);
    }
    
    private mensajesMenuSummer(): void {
        console.log("Bienvenido al tragamonedas Summer");
        console.log("opciones: ");
        console.log("1 _ Apuesta minima" + " (" + this.getApuestaMinima() + ")");
        console.log("2 _ Apuesta un valor a elegir");
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
                creditosApostados = this.getApuestaMinima();
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
                resultadoApuesta = this.apuesta(creditosApostados);
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