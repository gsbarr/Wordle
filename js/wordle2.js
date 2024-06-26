var charfield = document.querySelector("#wordle"); // 
var map = {};
var i = 0;
var palabra = "CAUSA";  // Palabra que hay que adivinar
var palabraIntento = "";
var contLinea = 0;          // Contador de línea
var contLetra = 0;          // contador de letra
var victoria = 0;

letrasUsadas = document.querySelector(".letrasUsadas"); //Guardamos el div de las letras usadas

// Obtenemos todas las líneas
var lineas = [];
lineas.push(document.querySelectorAll(".linea1"));  // Me guardo la linea 1
lineas.push(document.querySelectorAll(".linea2"));  // Me guardo la linea 2
lineas.push(document.querySelectorAll(".linea3"));  // Me guardo la linea 3
lineas.push(document.querySelectorAll(".linea4"));  // Me guardo la linea 4
lineas.push(document.querySelectorAll(".linea5"));  // Me guardo la linea 5
// lineas[0] tiene la linea 1; lineas[1] tiene la línea 2, etc.

// Obtenemos todos los  div líneas
var divLineas = [];
divLineas.push(document.querySelectorAll(".divLinea1"));  // Me guardo la linea 1
divLineas.push(document.querySelectorAll(".divLinea2"));  // Me guardo la linea 2
divLineas.push(document.querySelectorAll(".divLinea3"));  // Me guardo la linea 3
divLineas.push(document.querySelectorAll(".divLinea4"));  // Me guardo la linea 4
divLineas.push(document.querySelectorAll(".divLinea5"));  // Me guardo la linea 5

// Cuando presionamos una tecla
charfield.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    
    if (charCode > 0) {
        if(charCode == 13 && palabraIntento.length == 5){ // Si presionamos el ENTER y la palabraIntento está completa
            
            // Verificamos la palabra
            verificar_palabra(palabraIntento);

            // Avanzamos de línea y reiniciamos las letras
            contLetra = 0;
            palabraIntento = "";

            // Si no estamos en la última línea, avanzamos de línea
            // Si estamos en la última línea, termina el juego
            if(contLinea < 4){
                contLinea++;
            }
            else{
                // ACá verificamos si se ganó
                alert("FIN DEL JUEGO");
            }

        } else{ // Sino, se trata de una letra
            if(contLetra < 5){ // Verificación de que no estén escritas ya todas las letras
                letra = String.fromCharCode(charCode); //Transformo el codigo en una letra
        
                // Agrego una letra a la palabra
                lineas[contLinea][contLetra].innerHTML += letra.toUpperCase();
                // Completamos la palabraIntento
                palabraIntento += letra.toUpperCase();
                // Sumamos uno al contador de letra
                contLetra++;
            }
            
        }

        
    }
};

function verificar_palabra(pal){
    console.log("verificando palabra")
    console.log("Palabra intento: "+ pal);
        console.log("Palabra a adivinar: "+ palabra);
        console.log("contador linea: "+contLinea);


    for (let contLetr = 0; contLetr < pal.length; contLetr++) {
        

        if (pal[contLetr] == palabra[contLetr]){ // Si es un acierto, lo pintamos de verde
            console.log("encontró match");
            divLineas[contLinea][contLetr].style.background = "green";
        }
        else{ // SINO, verificamos si la letra se encuentra en la palabra
            if(palabra.includes(pal[contLetr])){
                divLineas[contLinea][contLetr].style.background = "grey";
            }

        }
        
        
    }
}