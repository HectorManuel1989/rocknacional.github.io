
//Declaracion de variables

var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var celu = document.getElementById("celu");

var error = document.getElementById("error");
error.style.color = "red";                      //mensaje de error que aparece debajo del formulario con estilo

expresion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; //Para validar el correo tipo ejemplo123@ejemplo.com

function enviarFormulario() {
    console.log("enviando formulario");

    var mensajesError = [];

    

    if(nombre.value === null || nombre.value === "") {   //Chequeo de que no ingrese blanco
        mensajesError.push("Tu Nombre es necesario")
    } else if(nombre.value.length>20){                  //Chequeo de que no se pase de 20 caracteres        
        alert("nombre largo");
        return false;
    }


    
    if(apellido.value === null || apellido.value === "") {  //Igual a nombre
        mensajesError.push("Tu Apellido es necesario")
    } else if(apellido.value.length>20){
        alert("apellido muy largo");
        return false;
    } 



    if(correo.value === null || correo.value === "") {
        mensajesError.push("Tu Email es necesario")
    } else if(!expresion.test(correo.value)){                         //Que contenga al menos 10 numeros
        alert("El correo debe ser del tipo  ejemplo123@ejemplo.com");
        return false;
    }

    if(celu.value === null || celu.value === "") {          //Chequeo de que no ingrese blanco
        mensajesError.push("Tu Telefono es necesario")
    } else if(celu.value.length<7){                         //Que contenga al menos 10 numeros
        alert("El numero telefonico debe ser numerico y tener al menos 7 digitos");
        return false;
    } else if(isNaN(celu.value)){     //Y que sea unicamente numerico
        alert("el telefono no es un numero");
        return false;
    }
    error.innerHTML = mensajesError.join(". ")

    formulario.reset();
    return false;
}

