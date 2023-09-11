document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío del formulario

    var tipoRegistro = document.getElementById('tipo_registro').value;
    var datos = {};

    if (tipoRegistro === 'turista') {
        datos = {
            tipo_registro: tipoRegistro,
            username: document.getElementById('username').value,
            email_turista: document.getElementById('email_turista').value,
            contrasena_turista: document.getElementById('contrasena_turista').value,
            nacTurista: document.getElementById('nacTurista').value
        };
    } else if (tipoRegistro === 'restaurante') {
        datos = {
            tipo_registro: tipoRegistro,
            email_restaurante: document.getElementById('email_restaurante').value,
            contrasena_restaurante: document.getElementById('contrasena_restaurante').value,
            nombre_restaurante: document.getElementById('nombre_restaurante').value,
            telefono: document.getElementById('telefono').value,
            tipo_restaurante: document.getElementById('tipo_restaurante').value,
            tipo_comida: document.getElementById('tipo_comida').value
        };
    }

    var jsonDatos = JSON.stringify(datos, null, 2);
    console.log(jsonDatos);
});



var myCarousel = document.getElementById('carouselExample');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // Cambia la duración en milisegundos según tus preferencias
    wrap: true // Permite el desplazamiento infinito
});

function mostrarCampos() {
    var tipoRegistro = document.getElementById("tipo_registro").value;
    var camposTurista = document.getElementById("campos_turista");
    var camposRestaurante = document.getElementById("campos_restaurante");

    if (tipoRegistro === "turista") {
        camposTurista.style.display = "block";
        camposRestaurante.style.display = "none";
    } else if (tipoRegistro === "restaurante") {
        camposTurista.style.display = "none";
        camposRestaurante.style.display = "block";
    }
}

//

// JSON

