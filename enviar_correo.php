<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar los datos del formulario
    $nombre = htmlspecialchars($_POST["nombre"]); // Sanitiza el nombre
    $correo = filter_var($_POST["correo"], FILTER_VALIDATE_EMAIL); // Valida y sanitiza el correo
    $mensaje = htmlspecialchars($_POST["mensaje"]); // Sanitiza el mensaje

    // Verificar que todos los campos estén llenos
    if ($nombre && $correo && $mensaje) {
        // Configurar detalles del correo
        $to = "tu_correo@ejemplo.com"; // Reemplaza con tu dirección de correo
        $subject = "Nuevo mensaje de contacto"; // Asunto del correo
        $body = "Nombre: $nombre\nCorreo: $correo\n\nMensaje:\n$mensaje"; // Cuerpo del mensaje
        $headers = "From: $correo\r\n"; // Cabeceras del correo

        // Enviar el correo
        if (mail($to, $subject, $body, $headers)) {
            echo "Mensaje enviado con éxito.";
        } else {
            echo "Error al enviar el mensaje.";
        }
    } else {
        echo "Por favor, completa todos los campos correctamente.";
    }
} else {
    echo "Método no permitido.";
}
?>