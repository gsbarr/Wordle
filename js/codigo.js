var charfield = document.querySelector("#wordle"); // 
var map = {};
var i = 0;
var palabra = "causa";  // Palabra que hay que adivinar
var victoria = 0;

charfield.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    console.log("evento");
    if (charCode > 0) {
        letra = String.fromCharCode(charCode); //Transformo el codigo en una letra
        prompter = document.querySelectorAll(".letras");  // Me guardo los div de las letras
        letrasUsadas = document.querySelector(".letrasUsadas"); //Guardamos el div en una variable

        i = 0;   
        prompter.forEach(divLetra => {
            if (palabra[i] == letra ){ // Si la letra de la palabra coincide con la que presioné
                divLetra.innerHTML = letra.toUpperCase(); // Escribo la letra
                victoria++; // Sumamos uno / cuando llegue a 5, ganamos
            }
            else{
                usadas = letrasUsadas.innerHTML;
                if (!usadas.includes(letra) && !palabra.includes(letra)){
                    letrasUsadas.innerHTML += "<b>" + letra + "</b>"; // LE agrego una letra al div
                }
            }

            i++;
        });
        //prompter[i].innerHTML = String.fromCharCode(charCode);
        

        if (victoria == 5){
            alert("ganaste");
            // Hacemos el botón visible
            boton_reiniciar = document.querySelector(".boton_reiniciar");
            boton_reiniciar.style.display = "block";
        }
    }
};


/*
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    
    if (map[67] && map[16]) {
        alert("SHIFT - C");
        map = {};
    }
}
*/


