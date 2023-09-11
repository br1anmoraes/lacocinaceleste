<?php
$servername = "localhost";
$username = "root";
$password = "arias";
$dbname = "cocinaceleste";


$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener los datos del formulario
$email = $_POST["email_restaurante"];
$contrasena = $_POST["contrasena_restaurante"];
$nombre = $_POST["nombre_restaurante"];
$telefono = $_POST["telefono"];
$tipo_restaurante = $_POST["tipo_restaurante"];
$tipo_comida = $_POST["tipo_comida"];

// Verificar si el usuario ya existe
$check_query = "SELECT * FROM restaurantes WHERE email='$email'";
$result = $conn->query($check_query);

if ($result->num_rows > 0) {
    echo "El restaurante ya está registrado.";
} else {
    // Insertar el restaurante en la base de datos
    $insert_query = "INSERT INTO restaurantes (email, contrasena, nombre, telefono, tipo_restaurante, tipo_comida) 
                     VALUES ('$email', '$contrasena', '$nombre', '$telefono', '$tipo_restaurante', '$tipo_comida')";

    if ($conn->query($insert_query) === TRUE) {
        echo "Restaurante registrado con éxito.";
    } else {
        echo "Error al registrar el restaurante: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>