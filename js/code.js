document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita la recarga de la página

        if (form.checkValidity()) {
            // Muestra el mensaje de éxito
            successMessage.classList.remove("d-none");
            successMessage.textContent = "¡Formulario enviado exitosamente!";

            // Reinicia el formulario
            form.reset();
            form.classList.remove("was-validated");

            // Opcional: Ocultar el modal automáticamente después de unos segundos
            const modal = bootstrap.Modal.getInstance(document.getElementById("contactModal"));
            setTimeout(() => modal.hide(), 2000);
        } else {
            form.classList.add("was-validated"); // Agrega clases para mostrar errores
        }
    });
});
