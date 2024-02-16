/*PROGRAMA QUE INTERACTUARÁ CON UN ARCHIVO JSON

Programa probado con Node JS 20.11.0
Elaborado por Buzo Zamora Elian
14 de Febrero de 2024, Ensenada B.C
*/ 

/* //Sintaxis de objeto en JS
var objeto = {      
    1: "uno",
    2: "dos",
    3: "tres",
    4: "cuatro"
}
*/

/*  Usamos el modulo fs de Node.js
    con require ('fs) se esta importando el modulo 
    para acceder a todas las funciones y metodos de fs. */
const { info } = require('console');
const fs = require ('fs'); 
    /*readFile es un método de fs.
    UTF-8 el parámetro que indica que se desea leer el archivo en formato UTF-8. 
    (err, data) son las variables que usamos como parámetro de nuestro callBack.
    err: se utiliza para almacenar cualquier error que ocurra durante la operacion.
    data: se utiliza para almacenar los datos o el resultado de la operacion
    */ 

//Declaración de variables
const corcheteApertura="{";
const corcheteCierre="}";
const comillasDobles='"';
var posicionComillasDobles1=0;
const caracterVacio=" ";
var primeraLetra="";
  var banderaCorcheteAp=false;
  var banderaCorcheteCie=false;
    var posicionCorcheteAp=5; //inicialización de variable (ignorar que es un 5)
    var arrayDeLaData=[];
    var formarClave="";
    const ABCDARIO="abcdefghijklmnopqrstuvwxyzABCDEFGHIZJKLMNOPQRSTUVWXYZ";

fs.readFile('colores1.json','utf8', (err, data) => { //todo el código aqui.
    console.log("\n\n\n♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠\n♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠\n♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠\n♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠");
    console.log("Bienvenido usuario: Este es un algoritmo para leer JSON.");
    var infoJSON = data; //variable que almacena toda la información del archivo .JSON

    for(let i=0; i<infoJSON.length;i++){ //bucle for (A) que busca el primer caracter en la DATA.
        if(infoJSON[i]!=caracterVacio){
            console.log("Caracter encontrado en la posicion: "+i+". Es el caracter: "+infoJSON[i]);
            primeraLetra=infoJSON[i];
            posicionPrimerCaracter=i;
            break; //detener el bucle for en la posición donde se cumplió la condición
        }
    }//fin bucle for (A)


    //BLOQUE PARA ACTIVAR BANDERA DE CORCHETE APERTURA
    if(primeraLetra==corcheteApertura){
        banderaCorcheteAp=true;
        posicionCorcheteAp=posicionPrimerCaracter;
        console.log("La posicion del corchete de apertura es: "+posicionCorcheteAp);
    }else{
        console.log("Error de sintaxis. No se encontró '{' al inicio del .JSON");
    }  //fin de condicion encontrar "{""
   
//------------BUSCAR QUE DESPUES DEL "{" exista un (")-----------------------------------------------------------
//♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠CONDICIONAL DEL CORCHETE♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠
    if(banderaCorcheteAp==true){ //lo siguiente del corchete de apertura es buscar (")
        for(let i=posicionCorcheteAp; i<infoJSON.length;i++){ //bucle for (B) que busca (") despues del {
            if(infoJSON[i]!=caracterVacio){
                if(infoJSON[i]==comillasDobles){ //verificar que el siguiente caracter estrictamente sean comillas dobles
                    console.log("Comillas dobles encontradas en la posición: "+i);
                    posicionComillasDobles1=i;
                    formarClave=formarClave+infoJSON[i]; //almacenar las comillas dobles para la CLAVE
                    break; //Detener bucle for por completod
                }
            } 
        }//fin bucle for (B) 


    for(let i=posicionComillasDobles1+1;i<infoJSON.length;i++){ //bucle for (C) que busca letras del abecedario, +1 para buscar despues del "
        if(ABCDARIO.includes(infoJSON[i])){
            formarClave=formarClave+infoJSON[i];
        }
        else if(infoJSON[i]==comillasDobles){
            formarClave=formarClave+infoJSON[i];
            break;
        }
        else{
            console.log("Error de sintaxis. No se construyó correctamente la clave: "+formarClave);
            break;
        }
        
    }//fin bucle for (C) 
    console.log("CLAVE ENCONTRADA: "+formarClave);




    }//♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠FIN DEL CONDICIONAL DEL CORCHETE♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠





});//////////////////////////////////////fin del método readFILE///////////////////////////////////////////////////


