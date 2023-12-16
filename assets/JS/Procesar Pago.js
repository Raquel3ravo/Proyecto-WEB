window.onload = function() {
    console.log("El documento se ha cargado");
//ejecutar la accion de imprimir
}

var btnImprimir = document.getElementById("Autorizar Pago");

    btnImprimir.onclick = function (e) {
     
        var inputNombre = document.getElementById("Nombre");
        console.log(inputNombre.value);

        var inputApellido = document.getElementById("Apellido");
        console.log(inputApellido.value);

        var inputEdad = document.getElementById("Tipo de Tarjeta");
        console.log(inputEdad.value);

        var inputEdad = document.getElementById("Numero de Tarjeta");
        console.log(inputEdad.value);

        var inputEdad = document.getElementById("CVV");
        console.log(inputEdad.value);

        if(inputEdad.value <18) {
            alert("NO PUEDE INGRESAR AL SITIO");
        } else {
            alert("BIENVENID@!");
        }
    };

    function ObtenerDatosUsuario() {
        var inputNombre = document.getElementById("Nombre");
        console.log(inputNombre.value);

        var inputApellido = document.getElementById("Apellido");
        console.log(inputApellido.value);

        var inputEdad = document.getElementById("Tipo de Tarjeta");
        console.log(inputEdad.value);

        var inputEdad = document.getElementById("Numero de Tarjeta");
        console.log(inputEdad.value);

        var inputEdad = document.getElementById("CVV");
        console.log(inputEdad.value);
    }