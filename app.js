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
const caracterVacio=" ";
var primeraLetra="";
  var banderaCorcheteAp=false;
  var banderaCorcheteCie=false;
    var posicionCorcheteAp=5; //inicialización de variable (ignorar que es un 5)
    var arrayDeLaData=[];

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

    if(primeraLetra==corcheteApertura){
        banderaCorcheteAp=true;
        posicionCorcheteAp=posicionPrimerCaracter;
        console.log("Se detendra el programa, la posicion del corchete de apertura es: "+posicionCorcheteAp);
    }else{
        console.log("Error de sintaxis. No se encontró '{' al inicio del .JSON");
    }  //fin de condicion encontrar "{""
   

    //Aquí entra si se encontró el corchete de apertura al inicio.
    if(banderaCorcheteAp==true){ //lo siguiente del corchete de apertura es buscar (")
       
    }





});  //fin del método readFILE


