/* Lógica Dark Premium: Feedback de Formulário e Scroll */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada! Dark Creative entrará em contato.');
            form.reset();
        });
    }
    console.log("Sistema Dark Creative Ativo!");
});