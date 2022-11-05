import { Juego } from "./juego";

export class Ruleta extends Juego {

    private resultadoRuleta: number;
    
    constructor(paramID: number, paramNombre: string, paramCreditos: number, paramCantApuestaMinima?: number) {
        super(paramID, paramNombre, paramCreditos, paramCantApuestaMinima);
        this.resultadoRuleta = 0;
    }

    public apuestaPrimeraDocena(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if(this.resultadoRuleta < 13 && this.resultadoRuleta != 0) {
            multiplicador = 1.3;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaSegundaDocena(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if(this.resultadoRuleta < 25 && this.resultadoRuleta > 12) {
            multiplicador = 1.3;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaTerceraDocena(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if(this.resultadoRuleta > 24) {
            multiplicador = 1.3;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaPrimeraColumna(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        let primeraColumna: number[] = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
        for(let i = 0; i < primeraColumna.length; i++) {
            if(primeraColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaSegundaColumna(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        let segundaColumna: number[] = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
        for(let i = 0; i < segundaColumna.length; i++) {
            if(segundaColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaTerceraColumna(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        let terceraColumna: number[] = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
        for(let i = 0; i < terceraColumna.length; i++) {
            if(terceraColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaPrimeraMitad(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if(this.resultadoRuleta < 19 && this.resultadoRuleta != 0) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaSegundaMitad(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if(this.resultadoRuleta > 18) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaRojas(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        let rojas: number[] = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];
        for(let i = 0; i < rojas.length; i++) {
            if(rojas[i] === this.resultadoRuleta) {
                multiplicador = 1.2;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaNegras(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        let negras: number[] = [15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33, 20, 31, 22, 29, 28, 35, 26];
        for(let i = 0; i < negras.length; i++) {
            if(negras[i] === this.resultadoRuleta) {
                multiplicador = 1.2;
                return multiplicador * paramCreditos;
            }
        }

        return multiplicador;
    }

    public apuestaPares(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if((this.resultadoRuleta % 2) === 0 ) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaImpares(paramCreditos: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if((this.resultadoRuleta % 2) === 1 ) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    public apuestaNroUnico(paramCreditos: number, numElegido: number): number {
        this.girarRuleta();
        let multiplicador: number = 0;
        if(Number(this.resultadoRuleta) == Number(numElegido)) {
            multiplicador = 5;
            return multiplicador * paramCreditos;
        }

        return multiplicador;
    }

    private girarRuleta(): void {
        let numeroSalida: number = Math.floor(Math.random() * (36));
        this.resultadoRuleta = numeroSalida;
    }

    public getResultadoRuleta(): number {
        return this.resultadoRuleta;
    }

    private mensajesMenuRuleta(): void {
        console.log("Bienvenido a la ruleta");
        console.log("opciones: ");
        console.log("1 _ Apuesta a Un numero");
        console.log("2 _ Apuesta a Primera Docena");
        console.log("3 _ Apuesta a Segunda Docena");
        console.log("4 _ Apuesta a Tercera Docena");
        console.log("5 _ Apuesta a Primer Columna");
        console.log("6 _ Apuesta a Segunda Columna");
        console.log("7 _ Apuesta a Tercer Columna");
        console.log("8 _ Apuesta a Primera Mitad");
        console.log("9 _ Apuesta a Segunda Mitad");
        console.log("10 _ Apuesta a Rojas");
        console.log("11 _ Apuesta a Negras");
        console.log("12 _ Apuesta a Numeros Pares");
        console.log("13 _ Apuesta a Numeros Impares");
        console.log("14 _ Salir");
    }
    
    public jugar(paramCreditos: number): number {
        let readlineSync = require('readline-sync');
        if(paramCreditos > this.getApuestaMinima()) {
            console.log("Usted posee "+ paramCreditos + " creditos.")
            this.mensajesMenuRuleta();
            let opcionDeseada: number = readlineSync.questionInt('Ingrese la opcion deseada ');
            if(opcionDeseada < 1 || opcionDeseada > 14) {
                //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
                console.log("numero erroneo Intente nuevamente");
                console.clear();//para limpiar la pantalla
                return this.jugar(paramCreditos);
            } else if(opcionDeseada === 14) {
                //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
                console.log("Usted se retira con " + paramCreditos + " creditos.");
                console.log("Gracias por jugar, esperamos su regreso.");
                return paramCreditos;
            } else {
                //EJECUTAR LA OPCION Y REGRESAR AL PROGRAMA CON LA NUEVA CANTIDAD DE CREDITOS
                return this.jugar(this.ejecucionApuestas(opcionDeseada, paramCreditos));
            }
        } else {
            console.log("Usted ya no posee creditos");
            console.log("Gracias por jugar, esperamos su regreso.")
            return paramCreditos;
        }
    }
    
    
    private ejecucionApuestas(paramOpcion: number, paramCreditos: number): number {
        //sumamos una jugada a los atributos de la maquina.
        let resultadoApuesta: number = 0;
        let totalApuesta: number = this.cantApostada(paramCreditos);
        let totalCreditos: number = paramCreditos - totalApuesta;
        switch(paramOpcion) {
            case 1:
                resultadoApuesta = this.apuestaNroUnico(totalApuesta, this.numeroDeRuletaElegido());
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
    
            case 2:
                resultadoApuesta = this.apuestaPrimeraDocena(totalApuesta);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta))
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            
            case 3:
                resultadoApuesta = this.apuestaSegundaDocena(totalApuesta);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta))
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
    
            case 4:
                resultadoApuesta = this.apuestaTerceraDocena(totalApuesta);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta))
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
    
            case 5:
                resultadoApuesta = this.apuestaPrimeraColumna(totalApuesta);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta))
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
    
            case 6:
                resultadoApuesta = this.apuestaSegundaColumna(totalApuesta);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta))
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
                
            case 7:
                resultadoApuesta = this.apuestaTerceraColumna(totalApuesta);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta))
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            
            case 8:
                resultadoApuesta = this.apuestaPrimeraMitad(totalApuesta);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta))
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            
            case 9:
                resultadoApuesta = this.apuestaSegundaMitad(totalApuesta);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta))
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            
            case 10:
                resultadoApuesta = this.apuestaRojas(totalApuesta);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta))
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            
            case 11:
                resultadoApuesta = this.apuestaNegras(totalApuesta);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta))
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
    
            case 12:
                resultadoApuesta = this.apuestaPares(totalApuesta);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta))
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            
            case 13:
                resultadoApuesta = this.apuestaImpares(totalApuesta);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta))
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
                
    
    
            default:
                return paramCreditos;
        }
    
    }
    
    private numeroDeRuletaElegido(): number {
        let readlineSync = require('readline-sync');
        let numeroDeseado: number = readlineSync.questionInt('Ingrese el numero al que desea apostar ');
        if(numeroDeseado < 0 || numeroDeseado > 36) {
            console.log("Numero incorrecto, intente nuevamente");
            return this.numeroDeRuletaElegido();
        }
    
        return numeroDeseado;
    }
    
    private cantApostada(paramCreditos: number): number {
        let readlineSync = require('readline-sync');
        let cantApuesta: number = readlineSync.questionInt('Ingrese la cantidad de credito que desea apostar ');
        if((cantApuesta < 0 || cantApuesta > paramCreditos) && cantApuesta < this.getApuestaMinima()) {
            console.log("Cantidad incorrecta, intente nuevamente");
            return this.cantApostada(paramCreditos);
        }
    
        return cantApuesta;
    }
    
    private mensajeResultado(paramCreditos: number): string {
        this.conteoEstadisticas(paramCreditos);
        if(paramCreditos > 0) {
            return "Usted gano " + paramCreditos + " creditos."
        } else {
            return "Usted perdio."
        }
    }
    
    private pausaParaLeer(): void {
        let readlineSync = require('readline-sync');
        let pausa = readlineSync.question('');
    }
}