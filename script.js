document.addEventListener("DOMContentLoaded", function() {
    // Cria o observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, { threshold: 0.5 }); // O elemento será considerado "visível" quando 50% dele estiver visível na tela

    // Seleciona todos os elementos com a classe 'fade-in-element'
    const elements = document.querySelectorAll('.fade-in-element');
    
    // Inicia o processo de observação
    elements.forEach(element => observer.observe(element));
});