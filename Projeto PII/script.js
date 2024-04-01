document.addEventListener('DOMContentLoaded', function () {
    var currentIndex = 0;
    var images = document.querySelectorAll('.carousel-item');
    var totalImages = images.length;

    function showImage(index) {
        // Oculta todas as imagens
        images.forEach(function (image) {
            image.classList.remove('active');
        });
        // Exibe a imagem no índice especificado
        images[index].classList.add('active');
        currentIndex = index;
    }

    function nextImage() {
        var nextIndex = (currentIndex + 1) % totalImages;
        showImage(nextIndex);
    }

    // Troca de imagem em segundos
    setInterval(nextImage, 2600);
});
