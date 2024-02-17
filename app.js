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
        var banderaClaveCorrecta=false;
        var banderaLetrasIncluidas=false;
        var banderaComillasDobles=false;
    
      var espaciosTotales=0;
        var posicionCorcheteAp=5; //inicialización de variable (ignorar que es un 5)
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
        if(banderaCorcheteAp==true){//lo siguiente del corchete de apertura es buscar (")
            for(let i=posicionCorcheteAp+1; i<infoJSON.length;i++){ //bucle for (B) que busca (") despues del {. +1 para buscar adelante de la llave.
                if(infoJSON[i]!=caracterVacio){

                    if(infoJSON[i]==comillasDobles){ //verificar que el siguiente caracter estrictamente sean comillas dobles
                        console.log("Comillas dobles encontradas en la posición: "+i);
                        posicionComillasDobles1=i;
                        formarClave=formarClave+infoJSON[i]; //almacenar las comillas dobles para la CLAVE
                        banderaComillasDobles=true;
                        break; //Detener bucle for por completod
                    }else{
                        console.log("ERROR DE SINTAXIS. No se encontró comillas dobles después de ({). ");
                        break;
                    }
                  
                } 
            }//fin bucle for (B) 
    
    //NOTA: FALTA CONSIDERAR QUE LAS CLAVES NO PUEDEN TENER ESPACIOS ES DECIR: NO ESTA PERMITIDO: arrayColoresee   e
    //ESTO MARCARIA UN ERROR PUESTO QUE NO PUEDE HABER ESPACIOS ENTRE LAS CLAVES. EL PROGRAMA BUSCARIA UN (:) enseguida
    //arrayColoresee.
    //NOTA 2: OTRO DETALLE QUE ENCONTRE ES QUE LOS SALTOS DE LINEA EN EL JSON TAMBIEN SON TOMADOS EN CUENTA COMO
    //CARACTERES, POR LO QUE DEBO SPLITEAR LA INFORMACIÓN DE MANERA QUE NO LOS CONSIDERE CORRECTAMENTE. 
    if(banderaComillasDobles==true){
        for(let i=posicionComillasDobles1+1;i<infoJSON.length;i++){ //bucle for (C) que busca letras del abecedario, +1 para buscar despues del "
            if(ABCDARIO.includes(infoJSON[i])){ //verificar que sean letras para construir la clave
                formarClave=formarClave+infoJSON[i];
            }
            else if(infoJSON[i]==comillasDobles){ //si no encuentra letras, debe encontrar las comillas dobles.
                formarClave=formarClave+infoJSON[i];
                //aqui un condicional que valide que todo esta correcto.
                banderaClaveCorrecta=true;
                break;
            }
            else if(infoJSON[i]==" "){ //si no encontró las comillas, puede haber un espacio todavía
                formarClave=formarClave+infoJSON[i];
            }
            else{ //si no encontró las comillas dobles, es error de sintaxis porque las comillas son parte de la clave.
                console.log("Error de sintaxis. No se construyó correctamente la clave: "+formarClave);
                break;
            }
            
    }//fin bucle for (C) 
}
        
      
        }//♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠FIN DEL CONDICIONAL DEL CORCHETE♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠
    
        //Entra en este condicional si la clave fue escrita con la sintaxis correcta.
        if(banderaClaveCorrecta==true){ //Para que esté en true, tiene que haber entrado en los for anteriores
            console.log("CLAVE: "+formarClave);
    
            //LO SIGUIENE, ES ENCONTRAR UN ":" que es el que indica que se asigna un VALOR a la CLAVE.
    
            
    
    
        }//fin del condicional si la clave fue escrita con la sintaxis correcta.
    
    
    
    });//////////////////////////////////////fin del método readFILE///////////////////////////////////////////////////
    
    