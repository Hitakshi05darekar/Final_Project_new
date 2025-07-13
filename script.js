// Midori title scroll zoom + fade
const title = document.querySelector('.midori-title');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  let scale = 1 + scrollY / 800;
  let opacity = Math.max(1 - scrollY / 500, 0);
  title.style.transform = `scale(${scale})`;
  title.style.opacity = opacity;
});

// Product image fade-in on scroll
const productImages = document.querySelectorAll('.fade-image');

function handleProductFade() {
  productImages.forEach(img => {
    const rect = img.getBoundingClientRect();
    const visible = rect.top < window.innerHeight * 0.9 && rect.bottom > 100;
    if (visible) {
      img.classList.add('visible');
    } else {
      img.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', handleProductFade);
window.addEventListener('load', handleProductFade);

// About section background parallax
const aboutBg = document.querySelector('.about-bg');

window.addEventListener('scroll', () => {
  if (aboutBg) {
    const sectionTop = aboutBg.parentElement.offsetTop;
    const scroll = window.scrollY;
    const move = Math.max(0, scroll - sectionTop);
    aboutBg.style.transform = `translateY(${move * 0.3}px)`;
  }
});
