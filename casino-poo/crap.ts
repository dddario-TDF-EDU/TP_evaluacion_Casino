import { Juego } from "./juego";

export class Crap extends Juego {
     private dados: number;

     constructor(paramID: number, paramNombre: string,paramCreditos: number, paramCantApuestaMinima: number) {
        super(paramID, paramNombre, paramCreditos, paramCantApuestaMinima);
        this.tirarDados();
    }
    public getDados() : number {
        return this.dados;
    }

    private tirarDados(): void {
        let numeroSalida: number = Math.floor(Math.random() * 12) + 1;
        this.dados = numeroSalida;
    }
    //POSIBLEMENTE SE ELIMINE
    // public apuesta(paramCreditos: number): number {
    //     this.tirarDados();
    //     let multiplicador: number = 0;
    //     let cantCreditos: number = paramCreditos * multiplicador;
    //     return cantCreditos;
    // }

    //VER REFORMULAR
    public mostrarResultado(): void {
        console.log(this.dados);
    }

    public apostarSalida(paramCreditos: number): number {
        this.tirarDados();     
        if(this.dados == 7 || this.dados == 11) {
            console.log(`el numero es ${this.dados}, avanza a la proxima ronda`);
            return this.elegirApuesta(paramCreditos);
        } else if (this.dados == 2 ||this.dados == 3 || this.dados == 12){
            console.log(`el numero es ${this.dados}, crapping out`);
            return 0;
        } else {
             console.log(`el numero es ${this.dados}, tirar nuevamente los dados, y repetir el numero ${this.dados} para continuar`);
            return this.apostarSalidaSegundoIntento(paramCreditos,this.dados);
        }
    }

    public apostarSalidaSegundoIntento(paramCreditos: number,resultadoAnterior:number): number {
        this.tirarDados();
        if(this.dados == resultadoAnterior) {
            console.log(`el numero es ${this.dados}, avanza a la proxima ronda`);
            return this.elegirApuesta(paramCreditos);
        } else if(this.dados == 7) {
             console.log(`el numero es ${this.dados}, crapping out`);
             return 0;
        } else {
            console.log(`el numero es ${this.dados}, vuelve a tirar`);
            return this.apostarSalidaSegundoIntento(paramCreditos,this.dados);
        }
    }
     public apostarPassLine(paramCreditos: number): number {
        this.tirarDados();
        let multiplicador: number = 0;       
        if(this.dados == 7 || this.dados == 11) {
            console.log(`el numero es ${this.dados}, la apuesta gana`);
            console.log(`el premio se devuelve al ganador`);
            //retorna x 2???
            multiplicador = 2;
            return paramCreditos * multiplicador;
        } else if(this.dados == 2 ||this.dados == 3 || this.dados == 12) {
            console.log(`el numero es ${this.dados}, crapping out, la apuesta pierde`);
            multiplicador = 0;
            return paramCreditos * multiplicador;
        } else {
            console.log(`el numero es ${this.dados}, tirar nuevamente los dados, y repetir el numero ${this.dados} para continuar`);
            return this.apostarSegundoIntento(paramCreditos,this.dados);
        }
    }
    public apostardontPassBar(paramCreditos:number): number {
        this.tirarDados();
        let multiplicador: number = 0;
        if(this.dados == 7 || this.dados == 11) {
            console.log(`el numero es ${this.dados}, la apuesta pierde`);
            //retorna x0
            multiplicador = 0;
            return paramCreditos * multiplicador;
        } else if(this.dados == 2 ||this.dados == 3) {
            console.log(`el numero es ${this.dados}, la apuesta gana`);
            console.log(`el premio se devuelve al ganador`);
            //retorna x2
            multiplicador = 2;
            return paramCreditos * multiplicador;
        } else if(this.dados == 12) {
            console.log(`el numero es ${this.dados}, es un empate`);
            //retorna paramCreditos
            multiplicador = 1;
            return paramCreditos * multiplicador;
        } else {
            console.log(`el numero es ${this.dados}, tirar nuevamente los dados, y repetir el numero ${this.dados} para continuar`);
            return this.apostarSegundoIntento(paramCreditos,this.dados);
        }

    }
    private apostarSegundoIntento(paramCreditos:number,paramDados:number): number {
        this.tirarDados();
        let multiplicador: number = 0;
        if(this.dados == paramDados){
            console.log("el numero es igual");
            console.log("la apuesta gana");
            //retorna x2
            multiplicador = 2;
            return paramCreditos * multiplicador;
        }else{
            console.log("la apuesta pierde");
            //retorna x0
            multiplicador = 0;
            return paramCreditos * multiplicador;
        }
    }

    public apostarEnField(paramCreditos: number): number {
        this.tirarDados();
        let multiplicador: number = 0;
        if(this.dados == 3 ||this.dados == 4 ||this.dados == 9 ||this.dados == 10 ||this.dados == 11){
            console.log(`el numero es ${this.dados}, la apuesta gana`);
            console.log(`la apuesta se devuelve al ganador`);
            multiplicador = 2;
            return paramCreditos * multiplicador;
        }else if(this.dados == 2 ||this.dados == 12){
            console.log(`el numero es ${this.dados}, la apuesta gana`);
            console.log(`el premio se duplica para el ganador`);
            multiplicador = 3;
            return paramCreditos * multiplicador;
        }else{
            console.log(`el numero es ${this.dados}, la apuesta pierde`);
            multiplicador = 0;
            return paramCreditos * multiplicador;
        }
    }

    private mensajeApuesta(): void {
        console.log("Elija que tipo de Apuesta prefiere:");
        console.log("1. Apuesta en Field");
        console.log("2. Apuesta Don't Pass Bar");
        console.log("3. Apuesta Pass Line");
    }

    private elegirApuesta(paramCreditos: number): number {
        this.mensajeApuesta();
        let readlineSync = require("readline-sync");
        let opcionApuesta:number = readlineSync.questionInt("Ingrese la opcion deseada: ");
        if(opcionApuesta < 1  || opcionApuesta > 3){
            console.log("error, intente nuevamente");        
            return this.elegirApuesta(paramCreditos);
        }else{
            return this.ejecucionApuesta(paramCreditos,opcionApuesta);
        }
    
    }
    private ejecucionApuesta(paramCreditos: number, paramOpcion: number): number {
        //plata a elegir
        switch(paramOpcion){
            case 1:
                return this.apostarEnField(paramCreditos);
            case 2:
                return this.apostardontPassBar(paramCreditos);
            case 3: 
                return this.apostarPassLine(paramCreditos);
                
            default: 
                return paramCreditos;
        }
    }
    
    public jugar(paramCreditos: number): number {
        let readlineSync = require('readline-sync');
        //chequeamos si la persona tiene creditos suficientes para apostar.
        if(paramCreditos > this.getApuestaMinima()) {
            console.log("Usted posee "+ paramCreditos + " creditos.");
            this.mensajesMenuCrap();
            let opcionDeseada: number = readlineSync.questionInt('Ingrese la opcion deseada ');
            if(opcionDeseada < 1 || opcionDeseada > 4) {
                //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
                console.log("numero erroneo Intente nuevamente");
                console.clear();//para limpiar la pantalla
                return this.jugar(paramCreditos);
            } if(opcionDeseada === 3) {
                //ESTO ES AHORA LA BARRERA DE ENTRADA.
               console.log("Tiro inicial para ingresar a sala.");
               return this.apostarSalida(paramCreditos);
            }
             else if(opcionDeseada === 4) {
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

    private mensajesMenuCrap(): void {
        console.log("Bienvenido a Craps");
        console.log("opciones: ");
        console.log("1 _ Apuesta minima" + " (" + this.getApuestaMinima() + ")");
        console.log("2 _ Apuesta un valor a elegir");
        console.log("3 _ Ingresar a sala");
        console.log("4 _ Salir");
    }

    protected ejecucionApuestas(paramOpcion: number, paramCreditos: number): number {
        let resultadoApuesta: number = 0;
        let creditosApostados: number = 0;
        let totalCreditos: number = paramCreditos;
        switch(paramOpcion) {
            case 1:
                creditosApostados = this.getApuestaMinima();
                totalCreditos -= creditosApostados;
               // resultadoApuesta = crap.apostarSalida(creditosApostados);
                this.apostarSalida(creditosApostados)
                this.mostrarResultado();
                console.log(this.mensajeResultado(resultadoApuesta));
                //totalCreditos+= resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
    
            case 2:
                creditosApostados = this.cantApostada(paramCreditos);
                totalCreditos -= creditosApostados;
                //resultadoApuesta = crap.apostarSalida(creditosApostados);
                this.apostarSalida(creditosApostados)
                this.mostrarResultado()
                console.log(this.mensajeResultado(resultadoApuesta));
                totalCreditos+= resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;    
            
            default:
                return paramCreditos;
        }
    
    }

    protected cantApostada(paramCreditos: number): number {
        let readlineSync = require('readline-sync');
        let cantApuesta: number = readlineSync.questionInt('Ingrese la cantidad de credito que desea apostar ');
        if(cantApuesta < 0 || cantApuesta > paramCreditos) {
            console.log("Cantidad incorrecta, intente nuevamente");
            return this.cantApostada(paramCreditos);
        }
        return cantApuesta;
    }
    
    protected mensajeResultado(paramCreditos: number): string {
        if(paramCreditos > 0) {
            return "Usted gano " + paramCreditos + " creditos."
        } else {
            return "Usted perdio."
        }
    }
    
}