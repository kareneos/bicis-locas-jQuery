function validateForm(){
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var contrasena = document.getElementById("input-password").value;
    var selectBici = document.getElementsByTagName('select')[0].selectedIndex; 
    //crea span
    var span = document.createElement("span");
    //llama divs para juntar nodo hijo
    var padre = document.getElementsByClassName("input-box");
    //para borrar los spans cada vez que se da click en registrar
    var spans = document.getElementsByTagName("span");
    for(var i = 0; i < spans.length; i++){
        spans[i].parentNode.removeChild(spans[i]);
    }
    //campos obligatorios
    //nombre
    if(nombre.length == 0){
        //Span en el primer div
        padre[0].appendChild(span);
        span.innerHTML = "Ingrese un nombre";
        return false;
    }//sólo letras en nombre
    else if (!nombre.match(/[a-zA-Z]/)){
        padre[0].appendChild(span);
        span.innerHTML = "Escriba sólo letras en nombre";
        return false;
    }//primera letra nombre mayúscula
    else if ( /[a-z]/.test( nombre[0])){
        padre[0].appendChild(span);
        span.innerHTML = "Nombre debe comenzar con mayúsucula";
        return false;
    }//apellido
    else if(apellido.length == 0){
        //Span
        padre[1].appendChild(span);
        span.innerHTML = "Ingrese apellido";
        return false;
    }//sólo letras en apellido
     else if (!apellido.match(/[a-zA-Z]/)){
        padre[1].appendChild(span);
        span.innerHTML = "Escriba sólo letras en apellido";
        return false;
    }//primera letra apellido mayúscula
    else if ( /[a-z]/.test( apellido[0])){
        padre[1].appendChild(span);
        span.innerHTML = "Apellido debe comenzar con mayúsucula";
        return false;
    } //correo
    else if(correo.length == 0){
        //Span
        padre[2].appendChild(span);
        span.innerHTML = "Ingrese correo electrónico";
        return false;
    }//email válido
    else if (!correo.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
        padre[2].appendChild(span);
        span.innerHTML = "Email inválido";
        return false;
    }//contraseña
    else if(contrasena == 0){
        //Span
       padre[3].appendChild(span);
        span.innerHTML = "Ingrese su contraseña";
        return false;
    }//contraseña de al menos 6 caracteres
    else if(contrasena.length < 6 ){
        padre[3].appendChild(span);
        span.innerHTML ="La contraseña debe tener al menos 6 caracteres";
        return false;
    }//password no igual a "password" ó "123456" ó "098754"
    else if ((contrasena == "password") || (contrasena == "123456") || (contrasena == "098754")){
        padre[3].appendChild(span);
        span.innerHTML = "Contraseña no válida";
        return false;
    }//opción bicis válida
    else if(0 == selectBici){
        padre[4].appendChild(span);
        span.innerHTML = "Seleccione un tipo de bici";
        return false;
    }
    return true;
}