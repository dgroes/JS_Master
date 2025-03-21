document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el modal y el botón de cierre
    const modal = document.getElementById('editModal');
    const closeButton = modal.querySelector('.close');
    const modalBody = document.getElementById('modal-body');

    // Selecciona todos los enlaces de edición
    const editButtons = document.querySelectorAll('.btn-edit');

    // Función para abrir el modal y cargar la vista de edición
    function openModal(productId) {
        // Hace una solicitud fetch para obtener la vista de edición
        fetch(`/products/${productId}/edit`)
            .then(response => response.text()) // Convierte la respuesta a texto (HTML)
            .then(html => {
                // Carga el contenido en el modal
                modalBody.innerHTML = html;

                // Muestra el modal
                modal.style.display = 'block';
            })
            .catch(error => console.error('Error al cargar la vista de edición:', error));
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Asigna el evento de clic a los enlaces de edición
    editButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace redirija
            const productId = this.getAttribute('data-id'); // Obtiene el ID del producto
            openModal(productId); // Abre el modal con la vista de edición
        });
    });

    // Asigna el evento de clic al botón de cierre
    closeButton.addEventListener('click', closeModal);

    // Cierra el modal si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});