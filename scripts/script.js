var myCarousel = document.getElementById('carouselExample');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // Cambia la duración en milisegundos según tus preferencias
    wrap: true // Permite el desplazamiento infinito
});