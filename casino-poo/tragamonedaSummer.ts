import { Tragamoneda } from "./tragamoneda";

export class TragamonedaSummer extends Tragamoneda {
    private slot1x3: number[];
    private slot2x3: number[];
    private slot3x3: number[];
    private arraySimbolos: string;

    constructor(paramID: number, paramNombre: string, paramCreditos: number, paramCantApuestaMinima?: number){
        super(paramID, paramNombre, paramCreditos, paramCantApuestaMinima);
        this.slot1x3 = new Array (3);
        this.slot2x3 = new Array (3);
        this.slot3x3 = new Array (3);
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
        let totalApuesta: number = 0;
        let totalCreditos: number = paramCreditos;
        switch(paramOpcion) {
            case 1:
                totalApuesta = this.getApuestaMinima();
                totalCreditos -= totalApuesta;
                resultadoApuesta = this.apuesta(totalApuesta);
                this.mostrarResultado();
                console.log(this.mensajeResultado(resultadoApuesta, totalApuesta));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
    
            case 2:
                totalApuesta = this.cantApostada(paramCreditos);
                totalCreditos -= totalApuesta;
                resultadoApuesta = this.apuesta(totalApuesta);
                this.mostrarResultado()
                console.log(this.mensajeResultado(resultadoApuesta, totalApuesta));
                totalCreditos+= resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;    
    
            default:
                return paramCreditos;
        }
    
    }
    

}    