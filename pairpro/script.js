// Obtén referencias a los elementos del DOM
const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Configura el índice inicial y el ancho de desplazamiento
let currentIndex = 0;
const slideWidth = slider.clientWidth;

// Función para mostrar la imagen en el índice dado
function showImage(index) {
    // Calcula el desplazamiento
    const displacement = -index * slideWidth;
    slider.style.transform = `translateX(${displacement}px)`;
}

// Función para mostrar la siguiente imagen
function nextImage() {
    currentIndex++;
    if (currentIndex >= slider.children.length) {
        currentIndex = 0; // Vuelve al primer slide si llega al final
    }
    showImage(currentIndex);
}

// Función para mostrar la imagen anterior
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slider.children.length - 1; // Vuelve al último slide si está en el primero
    }
    showImage(currentIndex);
}

// Agrega manejadores de eventos a los botones
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Muestra la primera imagen al cargar la página
showImage(currentIndex);
