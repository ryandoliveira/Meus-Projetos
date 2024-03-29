// Função para rolar suavemente até a seção "Sobre"
function scrollToSobreSection() {
    const sobreSection = document.getElementById('sobre');
    const offset = 50; // Defina aqui a quantidade de pixels que deseja deslocar a mais ou a menos

    if (sobreSection) {
        window.scrollTo({
            top: sobreSection.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

// Event listener para o clique no link "Sobre"
document.addEventListener('DOMContentLoaded', function() {
    const linkSobre = document.getElementById('link-sobre');
    if (linkSobre) {
        linkSobre.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            scrollToSobreSection();
        });
    }
});
