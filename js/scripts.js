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

