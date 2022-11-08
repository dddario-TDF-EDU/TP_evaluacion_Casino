import { Ruleta } from "./casino-poo/ruleta";

function mensajesMenuRuleta(): void {
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

export function menuRuleta(paramCreditos: number, pRuleta: Ruleta): number {
    let readlineSync = require('readline-sync');
    if(paramCreditos > pRuleta.getApuestaMinima()) {
        console.log("Usted posee "+ paramCreditos + " creditos.")
        mensajesMenuRuleta();
        let opcionDeseada: number = readlineSync.questionInt('Ingrese la opcion deseada ');
        if(opcionDeseada < 1 || opcionDeseada > 14) {
            //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
            console.log("numero erroneo Intente nuevamente");
            console.clear();//para limpiar la pantalla
            return menuRuleta(paramCreditos, pRuleta);
        } else if(opcionDeseada === 14) {
            //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
            console.log("Usted se retira con " + paramCreditos + " creditos.");
            console.log("Gracias por jugar, esperamos su regreso.");
            return paramCreditos;
        } else {
            //EJECUTAR LA OPCION Y REGRESAR AL PROGRAMA CON LA NUEVA CANTIDAD DE CREDITOS
            return menuRuleta(ejecucionApuestas(opcionDeseada, paramCreditos, pRuleta), pRuleta);
        }
    } else {
        console.log("Usted ya no posee creditos");
        console.log("Gracias por jugar, esperamos su regreso.")
        return paramCreditos;
    }
}


function ejecucionApuestas(paramOpcion: number, paramCreditos: number, pRuleta: Ruleta): number {
    let resultadoApuesta: number = 0;
    let totalApuesta: number = cantApostada(paramCreditos, pRuleta);
    let totalCreditos: number = paramCreditos - totalApuesta;
    switch(paramOpcion) {
        case 1:
            resultadoApuesta = pRuleta.apuestaNroUnico(totalApuesta, numeroDeRuletaElegido());
            console.log("El resultado fue: " + pRuleta.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta));
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;

        case 2:
            resultadoApuesta = pRuleta.apuestaPrimeraDocena(totalApuesta);
            console.log("El resultado fue: " + pRuleta.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta))
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        
        case 3:
            resultadoApuesta = pRuleta.apuestaSegundaDocena(totalApuesta);
            console.log("El resultado fue: " + pRuleta.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta))
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;

        case 4:
            resultadoApuesta = pRuleta.apuestaTerceraDocena(totalApuesta);
            console.log("El resultado fue: " + pRuleta.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta))
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;

        case 5:
            resultadoApuesta = pRuleta.apuestaPrimeraColumna(totalApuesta);
            console.log("El resultado fue: " + pRuleta.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta))
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;

        case 6:
            resultadoApuesta = pRuleta.apuestaSegundaColumna(totalApuesta);
            console.log("El resultado fue: " + pRuleta.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta))
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
            
        case 7:
            resultadoApuesta = pRuleta.apuestaTerceraColumna(totalApuesta);
            console.log("El resultado fue: " + pRuleta.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta))
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        
        case 8:
            resultadoApuesta = pRuleta.apuestaPrimeraMitad(totalApuesta);
            console.log("El resultado fue: " + pRuleta.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta))
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        
        case 9:
            resultadoApuesta = pRuleta.apuestaSegundaMitad(totalApuesta);
            console.log("El resultado fue: " + pRuleta.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta))
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        
        case 10:
            resultadoApuesta = pRuleta.apuestaRojas(totalApuesta);
            console.log("El resultado fue: " + pRuleta.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta))
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        
        case 11:
            resultadoApuesta = pRuleta.apuestaNegras(totalApuesta);
            console.log("El resultado fue: " + pRuleta.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta))
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;

        case 12:
            resultadoApuesta = pRuleta.apuestaPares(totalApuesta);
            console.log("El resultado fue: " + pRuleta.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta))
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
        
        case 13:
            resultadoApuesta = pRuleta.apuestaImpares(totalApuesta);
            console.log("El resultado fue: " + pRuleta.getResultadoRuleta());
            console.log(mensajeResultado(resultadoApuesta))
            totalCreditos += resultadoApuesta;
            pausaParaLeer();
            return totalCreditos;
            


        default:
            return paramCreditos;
    }

}

function numeroDeRuletaElegido(): number {
    let readlineSync = require('readline-sync');
    let numeroDeseado: number = readlineSync.questionInt('Ingrese el numero al que desea apostar ');
    if(numeroDeseado < 0 || numeroDeseado > 36) {
        console.log("Numero incorrecto, intente nuevamente");
        return numeroDeRuletaElegido();
    }

    return numeroDeseado;
}

function cantApostada(paramCreditos: number, pRuleta: Ruleta): number {
    let readlineSync = require('readline-sync');
    let cantApuesta: number = readlineSync.questionInt('Ingrese la cantidad de credito que desea apostar ');
    if((cantApuesta < 0 || cantApuesta > paramCreditos) && cantApuesta < pRuleta.getApuestaMinima()) {
        console.log("Cantidad incorrecta, intente nuevamente");
        return cantApostada(paramCreditos, pRuleta);
    }

    return cantApuesta;
}

function mensajeResultado(paramCreditos: number): string {
    if(paramCreditos > 0) {
        return "Usted gano " + paramCreditos + " creditos."
    } else {
        return "Usted perdio."
    }
}

function pausaParaLeer(): void {
    let readlineSync = require('readline-sync');
    let pausa = readlineSync.question('');
}
