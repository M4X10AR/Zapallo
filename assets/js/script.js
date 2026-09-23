document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.imageClick');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', () => {
            // Obtenemos las dos rutas guardadas en los atributos "data-" de la imagen
            const imagenOriginal = imagen.getAttribute('data-original');
            const imagenNueva = imagen.getAttribute('data-nueva');
            if (imagen.src.includes(imagenOriginal)) {
                imagen.src = imagenNueva;
            } else {
                imagen.src = imagenOriginal;
            }
        });
    });
});
