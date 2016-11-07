$(document).ready(function(){
    $('.submit-btn').click(function(){
        var nombre = $('#name').val();
        var apellido = $('#lastname').val();
        var correo = $('#input-email').val();
        var contrasena = $('#input-password').val();
        var selectBici = $('select')[0].selectedIndex;        
        //para borrar los spans cada vez que se da click en registrar
        var spans = $('span');
        for(var i = 0; i < spans.length; i++){
            spans[i].remove(spans[i]);
        }
        //campos obligatorios
        //nombre
        if(nombre.length == 0){
            $('.name-container').append('<span>Ingrese un nombre</span>');
            return false;
        }//sólo letras en nombe
        else if (!nombre.match(/[a-zA-Z]/)){
            $('.name-container').append('<span>Escriba sólo letras en nombre</span>');
            return false;
        }//primera letra nombre mayúscula
        else if ( /[a-z]/.test( nombre[0])){
            $('.name-container').append('<span>Nombre debe comenzar con mayúsucula</span>');
            return false;
        }//apellido
        else if(apellido.length == 0){
            $('.lastname-container').append('<span>Ingrese un apellido</span>');
            return false;
        }//sólo letras en apellido
         else if (!apellido.match(/[a-zA-Z]/)){
             $('.lastname-container').append('<span>Escriba sólo letras en apellido</span>');
            return false;
        }//primera letra apellido mayúscula
        else if ( /[a-z]/.test( apellido[0])){
            $('.lastname-container').append('<span>Apellido debe comenzar con mayúsucula</span>');
            return false;
        }//correo
        else if(correo.length == 0){
             $('.email-container').append('<span>Ingrese correo electrónico</span>');
            return false;
        }//email válido
        else if (!correo.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
            $('.email-container').append('<span>Email inválido</span>');
            return false;
        }//contraseña
        else if(contrasena == 0){
           $('.password-container').append('<span>Ingrese su contraseña</span>');
            return false;
        }//contraseña de al menos 6 caracteres
        else if(contrasena.length < 6 ){
           $('.password-container').append('<span>La contraseña debe tener al menos 6 caracteres</span>');
            return false;
        }//password no igual a "password" ó "123456" ó "098754"
        else if ((contrasena == "password") || (contrasena == "123456") || (contrasena == "098754")){
            $('.password-container').append('<span>Contraseña no válida</span>');
            return false;
        }//opción bicis válida
        else if(0 == selectBici){
            $('.type-container').append('<span>Seleccione un tipo de bici</span>');
            return false;
        }
        return true;
    });
});