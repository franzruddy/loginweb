function init(){
    $("#usuario_form").on("submit",function(e){
        guardaryeditar(e);	
    });
}

function guardaryeditar(e){
    e.preventDefault();
    var formData = new FormData($("#usuario_form")[0]);

    $.ajax({
        url: "../controller/usuario.php?op=guardar",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function(datos){
            if (datos=="pass"){
                Swal.fire(
                    '',
                    'Error Contraseñas no Coinciden',
                    'error'
                );
            }else if (datos=="correo"){
                Swal.fire(
                    '...........',
                    'La cuenta de correo electronico ya existe, intente recuperar su contraseña',
                    'error'
                );
            }else{
                Swal.fire(
                    ' .............',
                    'Se registro Correctamente',
                    'success'
                );
    
                var usu_correo = $('#usu_correo').val();
                $.post("../controller/email.php?op=send_nuevo", { usu_correo : usu_correo}, function(data){
                
                });

            }
            $('#usuario_form')[0].reset();
        }
    }); 
    
}

init();