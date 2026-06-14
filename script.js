// ===== SCROLL FADE-IN =====
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

fadeEls.forEach(el => observer.observe(el));

// ===== TABS =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    tabContents.forEach(tc => {
      if (tc.id === target) {
        tc.classList.remove('hidden');
      } else {
        tc.classList.add('hidden');
      }
    });
  });
});

// ===== ACCORDION =====
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Close all
    accordionItems.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.accordion-header').setAttribute('aria-expanded', false);
    });

    // Toggle clicked
    if (!isOpen) {
      item.classList.add('open');
      header.setAttribute('aria-expanded', true);
    }
  });
});

// ===== SMOOTH SCROLL for same-page nav links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href.length <= 1) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});
