// ritual.js

// Optional: pause on hover
const rows = document.querySelectorAll('.ritual-row img');

rows.forEach((img) => {
  img.addEventListener('mouseenter', () => {
    img.style.animationPlayState = 'paused';
  });

  img.addEventListener('mouseleave', () => {
    img.style.animationPlayState = 'running';
  });
});
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
const scrollText = document.getElementById('scrollText');
const scrollMessages = [
  "Stillness in every sip.",
  "Whisk. Pause. Sip.",
  "Matcha is meditation.",
  "Every ritual tells a story."
];

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const index = Math.min(scrollMessages.length - 1, Math.floor(scrollY / 300));
  scrollText.textContent = scrollMessages[index];
});
