
let currentLang = 'en';

const switchLanguage = (lang) => {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en][data-th]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  const sw = document.getElementById('langSwitch');
  sw.textContent = lang === 'en' ? 'TH' : 'EN';
};

document.getElementById('langSwitch').addEventListener('click', () => {
  switchLanguage(currentLang === 'en' ? 'th' : 'en');
});

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
