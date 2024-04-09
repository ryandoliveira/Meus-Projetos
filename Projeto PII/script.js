document.addEventListener('DOMContentLoaded', function () {
    var currentIndex = 0;
    var images = document.querySelectorAll('.carousel-item');
    var totalImages = images.length;

    function showImage(index) {
       
        images.forEach(function (image) {
            image.classList.remove('active');
        });
      
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

function enviarCodigo() {
    // Simulação do envio do código de verificação por e-mail
    alert("Um código de verificação foi enviado para o seu e-mail.");
    // Exibe o formulário para inserir o código
    document.getElementById("codigo-container").style.display = "block";
}

function verificarCodigo() {
    // Lógica para verificar se o código inserido pelo usuário está correto
    var codigoInserido = document.getElementById("codigo").value;
    var codigoCorreto = "123456"; // Código de verificação simulado
    if (codigoInserido === codigoCorreto) {
        alert("Código de verificação correto. Agora você pode redefinir sua senha.");
        // Redireciona o usuário para a página de redefinição de senha
        window.location.href = "redefinirsenha.html";
    } else {
        alert("Código de verificação incorreto. Por favor, tente novamente.");
    }
}