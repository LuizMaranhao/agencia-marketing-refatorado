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
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.grid__card, .about > div, .hero > *');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: .15 });

  items.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });
});

