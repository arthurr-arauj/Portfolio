import './style.css';
import {
  personal,
  heroHighlights,
  about,
  experiences,
  projects,
  skills,
  education,
  navLinks,
} from './data/content.js';

function renderNavLinks() {
  return navLinks
    .map(
      (link) =>
        `<a href="${link.href}" class="site-nav__link" data-section="${link.href.slice(1)}">${link.label}</a>`
    )
    .join('');
}

function renderHeroChips() {
  return heroHighlights
    .map(
      (chip) => `
      <li class="hero-chip reveal">
        <span class="text-sm font-semibold text-accent">${chip.label}</span>
        <span class="text-xs text-muted">${chip.detail}</span>
      </li>`
    )
    .join('');
}

function renderQuickFacts() {
  return about.quickFacts
    .map(
      (fact) => `
      <div class="flex justify-between gap-4 border-b border-dark-border py-3 last:border-0">
        <span class="text-sm text-muted">${fact.label}</span>
        <span class="text-right text-sm font-medium text-white">${fact.value}</span>
      </div>`
    )
    .join('');
}

function renderExperiences() {
  return experiences
    .map(
      (exp) => `
      <article class="interactive-card experience-card reveal p-6 md:p-8 ${exp.highlight ? 'border-accent/20 bg-gradient-to-br from-accent-soft to-dark-card' : ''}" id="${exp.id}">
        <div class="relative z-10">
          <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-accent">${exp.company}</p>
              <h3 class="mt-1 text-xl font-bold text-white">${exp.role}</h3>
            </div>
            <span class="rounded-full border border-dark-border bg-dark px-3 py-1 text-xs text-muted">${exp.period}</span>
          </div>
          <ul class="space-y-2">
            ${exp.bullets.map((b) => `<li class="flex gap-2 text-sm text-muted"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span><span>${b}</span></li>`).join('')}
          </ul>
        </div>
      </article>`
    )
    .join('');
}

function renderProjects() {
  return projects
    .map(
      (project) => `
      <article class="interactive-card project-card reveal flex flex-col overflow-hidden" data-project="${project.id}">
        <div class="relative z-10 flex flex-1 flex-col p-5 md:p-6">
          <div class="mb-4">
            ${
              project.image
                ? `<img src="${project.image}" alt="${project.title}" class="project-preview" loading="lazy" />`
                : `<div class="project-preview flex items-center justify-center bg-gradient-to-br from-dark-border to-dark-card text-4xl">🐾</div>`
            }
          </div>
          <span class="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">${project.category}</span>
          <h3 class="text-lg font-bold text-white">${project.title}</h3>
          <p class="mt-2 flex-1 text-sm text-muted">${project.description}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${project.tags.map((tag) => `<span class="tech-pill">${tag}</span>`).join('')}
          </div>
          <div class="mt-5 flex flex-wrap gap-3">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-ghost text-xs">GitHub</a>
            ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs">Ver ao vivo</a>` : ''}
          </div>
        </div>
      </article>`
    )
    .join('');
}

function renderSkills() {
  return skills
    .map(
      (skill, index) => `
      <article class="interactive-card skill-card reveal p-6" data-skill="${skill.id}">
        <div class="relative z-10">
          <span class="text-xs font-semibold text-accent/70">0${index + 1}</span>
          <h3 class="mt-2 text-lg font-bold text-white">${skill.title}</h3>
          <p class="mt-2 text-sm text-muted">${skill.description}</p>
          <ul class="mt-4 flex flex-wrap gap-2">
            ${skill.items.map((item) => `<li class="rounded-lg border border-dark-border bg-dark px-3 py-1.5 text-xs text-[#f5f5f5] transition-colors hover:border-accent hover:text-accent">${item}</li>`).join('')}
          </ul>
        </div>
      </article>`
    )
    .join('');
}

function renderEducation() {
  return education
    .map(
      (edu) => `
      <article class="interactive-card surface-card reveal p-6">
        <div class="relative z-10">
          <h3 class="text-lg font-bold text-white">${edu.degree}</h3>
          <p class="mt-1 text-sm text-accent">${edu.institution}</p>
          <p class="mt-2 text-sm text-muted">${edu.period}</p>
          <p class="mt-1 text-xs text-footer">${edu.detail}</p>
        </div>
      </article>`
    )
    .join('');
}

document.querySelector('#app').innerHTML = `
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-dark">
    Pular para o conteúdo
  </a>

  <div id="nav-backdrop" class="nav-backdrop" aria-hidden="true"></div>

  <header class="site-header" role="banner">
    <div class="mx-auto flex h-full max-w-container items-center justify-between px-4 md:px-6">
      <a href="#" class="flex items-center gap-3" aria-label="Início">
        <div id="header-avatar" class="header-avatar" aria-hidden="true">
          <span class="header-avatar__initials">${personal.initials}</span>
          <img src="${personal.photo}" alt="${personal.shortName}" class="header-avatar__photo" />
        </div>
        <span class="hidden font-semibold text-white sm:inline">${personal.shortName}</span>
      </a>

      <nav class="site-nav hidden items-center gap-1 md:flex" aria-label="Navegação principal">
        ${renderNavLinks()}
      </nav>

      <button type="button" class="nav-toggle flex h-10 w-10 items-center justify-center rounded-lg border border-dark-border text-white md:hidden" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-nav">
        <svg class="h-5 w-5 nav-icon-open" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg class="hidden h-5 w-5 nav-icon-close" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <nav id="mobile-nav" class="site-nav-mobile absolute left-0 right-0 top-full hidden flex-col gap-1 border-b border-dark-border bg-dark-header/95 p-4 backdrop-blur-md md:hidden" aria-label="Menu mobile">
      ${renderNavLinks()}
    </nav>
  </header>

  <main id="main-content">
    <!-- Hero -->
    <section id="hero" class="relative px-4 pb-20 pt-[calc(var(--header-height)+3rem)] md:px-6 md:pb-28">
      <div class="mx-auto max-w-container">
        <div class="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div class="reveal">
            <p class="section-label">Portfólio</p>
            <h1 class="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              ${personal.name}
            </h1>
            <p class="mt-4 max-w-xl text-lg text-muted md:text-xl">${personal.headline}</p>
            <p class="mt-4 text-sm text-footer">${personal.location} • ${personal.email}</p>

            <div class="mt-8 flex flex-wrap gap-3">
              <a href="#experiencia" class="btn-primary">Ver experiência</a>
              <a href="${personal.resume}" target="_blank" rel="noopener noreferrer" class="btn-outline">Baixar currículo</a>
              <a href="#contato" class="btn-ghost">Entrar em contato</a>
            </div>
          </div>

          <div class="reveal mx-auto lg:mx-0">
            <div id="hero-photo-stage" class="hero__photo-frame relative">
              <div class="absolute -inset-4 rounded-full bg-accent/10 blur-2xl"></div>
              <img
                src="${personal.photo}"
                alt="${personal.name}"
                class="relative h-48 w-48 rounded-full border-4 border-accent object-cover shadow-[0_0_30px_rgba(0,188,212,0.4)] md:h-56 md:w-56"
                width="224"
                height="224"
              />
            </div>
          </div>
        </div>

        <ul class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          ${renderHeroChips()}
        </ul>
      </div>
    </section>

    <!-- Sobre -->
    <section id="sobre" class="px-4 py-20 md:px-6 md:py-28">
      <div class="mx-auto max-w-container">
        <div class="reveal mb-12">
          <p class="section-label">Sobre</p>
          <h2 class="section-title">Quem sou e o que faço</h2>
          <p class="section-subtitle">Entre suporte técnico, desenvolvimento e integrações.</p>
        </div>

        <div class="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <article class="interactive-card surface-card reveal p-6 md:p-8">
            <div class="relative z-10 space-y-4">
              <p class="text-muted">${about.summary}</p>
              <p class="text-muted">${about.traits}</p>
            </div>
          </article>

          <aside class="interactive-card surface-card reveal p-6">
            <div class="relative z-10">
              <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Dados rápidos</h3>
              ${renderQuickFacts()}
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Experiência -->
    <section id="experiencia" class="px-4 py-20 md:px-6 md:py-28">
      <div class="mx-auto max-w-container">
        <div class="reveal mb-12">
          <p class="section-label">Experiência</p>
          <h2 class="section-title">Trajetória profissional</h2>
          <p class="section-subtitle">Suporte técnico, desenvolvimento e projetos.</p>
        </div>

        <div class="grid gap-6 lg:grid-cols-2">
          ${renderExperiences()}
        </div>
      </div>
    </section>

    <!-- Projetos -->
    <section id="projetos" class="px-4 py-20 md:px-6 md:py-28">
      <div class="mx-auto max-w-container">
        <div class="reveal mb-12">
          <p class="section-label">Projetos</p>
          <h2 class="section-title">O que construí</h2>
          <p class="section-subtitle">Automação, front-end, projetos sociais e sistemas em C.</p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          ${renderProjects()}
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="px-4 py-20 md:px-6 md:py-28">
      <div class="mx-auto max-w-container">
        <div class="reveal mb-12">
          <p class="section-label">Skills</p>
          <h2 class="section-title">Stack técnico</h2>
          <p class="section-subtitle">Competências alinhadas ao mercado e à minha experiência atual.</p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          ${renderSkills()}
        </div>
      </div>
    </section>

    <!-- Formação -->
    <section id="formacao" class="px-4 py-20 md:px-6 md:py-28">
      <div class="mx-auto max-w-container">
        <div class="reveal mb-12">
          <p class="section-label">Formação</p>
          <h2 class="section-title">Educação</h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          ${renderEducation()}
        </div>
      </div>
    </section>

    <!-- Contato -->
    <section id="contato" class="px-4 py-20 md:px-6 md:py-28">
      <div class="mx-auto max-w-container">
        <div class="reveal mb-12">
          <p class="section-label">Contato</p>
          <h2 class="section-title">Vamos conversar</h2>
          <p class="section-subtitle">Aberto a oportunidades, parcerias e conversas sobre tecnologia.</p>
        </div>

        <div class="grid gap-6 lg:grid-cols-2">
          <article class="interactive-card contact-card reveal p-6 md:p-8">
            <div class="relative z-10 space-y-6">
              <p class="text-muted">
                Se você trabalha com desenvolvimento, suporte técnico ou integrações e quer trocar uma ideia, estou disponível.
              </p>

              <div class="space-y-4">
                <a href="mailto:${personal.email}" class="flex items-center gap-3 text-white transition-colors hover:text-accent">
                  <span class="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-border bg-dark text-accent">✉</span>
                  <span>${personal.email}</span>
                </a>
                <a href="tel:${personal.phone.replace(/\s/g, '')}" class="flex items-center gap-3 text-white transition-colors hover:text-accent">
                  <span class="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-border bg-dark text-accent">📱</span>
                  <span>${personal.phone}</span>
                </a>
                <a href="${personal.linkedin}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-white transition-colors hover:text-accent">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" class="h-10 w-10" width="40" height="40" />
                  <span>LinkedIn</span>
                </a>
                <a href="${personal.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-white transition-colors hover:text-accent">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" class="h-10 w-10" width="40" height="40" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </article>

          <article class="interactive-card contact-card reveal flex flex-col justify-center p-6 md:p-8">
            <div class="relative z-10 text-center">
              <h3 class="text-xl font-bold text-white">Currículo completo</h3>
              <p class="mt-2 text-sm text-muted">Baixe o PDF atualizado com toda a minha experiência e competências.</p>
              <a href="${personal.resume}" target="_blank" rel="noopener noreferrer" class="btn-primary mt-6">Baixar Currículo</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>

  <footer class="border-t border-dark-border bg-dark-card px-4 py-8 md:px-6">
    <div class="mx-auto flex max-w-container flex-col items-center justify-between gap-4 sm:flex-row">
      <p class="text-sm text-footer">&copy; <span id="current-year"></span> ${personal.shortName}</p>
      <button type="button" id="footer-back-to-top" class="text-sm text-accent transition-colors hover:text-accent-hover">
        Voltar ao topo ↑
      </button>
    </div>
  </footer>

  <button type="button" id="back-to-top" aria-label="Voltar ao topo">
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
  </button>
`;

initCurrentYear();
initSmoothScroll();
initMobileNav();
initHeaderState();
initAvatarScrollMorph();
initBackToTop();
initRevealAnimations();
initSectionTracking();
initCardInteractions();

function initCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const headerHeight =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;

      window.scrollTo({ top: targetPosition, behavior: 'smooth' });

      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    });
  });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  const footerBtn = document.getElementById('footer-back-to-top');
  if (!btn) return;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const updateVisibility = () => {
    btn.classList.toggle('is-visible', window.scrollY > 600);
  };

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();

  btn.addEventListener('click', scrollToTop);
  footerBtn?.addEventListener('click', scrollToTop);
}

function initMobileNav() {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.site-nav__link');
  const mobileNav = document.getElementById('mobile-nav');
  const backdrop = document.getElementById('nav-backdrop');
  const iconOpen = document.querySelector('.nav-icon-open');
  const iconClose = document.querySelector('.nav-icon-close');

  if (!header || !navToggle || !mobileNav) return;

  const setNavState = (isOpen) => {
    header.classList.toggle('is-nav-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');

    mobileNav.classList.toggle('hidden', !isOpen);
    mobileNav.classList.toggle('flex', isOpen);
    iconOpen?.classList.toggle('hidden', isOpen);
    iconClose?.classList.toggle('hidden', !isOpen);

    backdrop?.classList.toggle('is-visible', isOpen);
  };

  navToggle.addEventListener('click', () => {
    setNavState(!header.classList.contains('is-nav-open'));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 860) setNavState(false);
    });
  });

  backdrop?.addEventListener('click', () => setNavState(false));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setNavState(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) setNavState(false);
  });
}

function initHeaderState() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const updateHeaderState = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
}

function initAvatarScrollMorph() {
  const heroPhoto = document.getElementById('hero-photo-stage');
  const headerAvatar = document.getElementById('header-avatar');
  if (!heroPhoto || !headerAvatar) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  let heroRect = null;
  let animationFrame = null;

  const measureHero = () => {
    const previousTransform = heroPhoto.style.transform;
    heroPhoto.style.transform = '';
    const rect = heroPhoto.getBoundingClientRect();
    heroRect = {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      width: rect.width,
      height: rect.height,
    };
    heroPhoto.style.transform = previousTransform;
  };

  const render = () => {
    animationFrame = null;

    if (reducedMotion.matches) {
      const isScrolled = window.scrollY > 120;
      headerAvatar.classList.toggle('has-photo', isScrolled);
      heroPhoto.classList.toggle('is-docked', isScrolled);
      heroPhoto.style.transform = '';
      return;
    }

    if (!heroRect) measureHero();

    const headerRect = headerAvatar.getBoundingClientRect();
    const start = 32;
    const end = Math.max(420, heroRect.top - headerRect.top + 260);
    const progress = clamp((window.scrollY - start) / (end - start), 0, 1);
    const easedProgress = progress * progress * progress * (progress * (progress * 6 - 15) + 10);

    const heroCenterX = heroRect.left + heroRect.width / 2 - window.scrollX;
    const heroCenterY = heroRect.top + heroRect.height / 2 - window.scrollY;
    const avatarCenterX = headerRect.left + headerRect.width / 2;
    const avatarCenterY = headerRect.top + headerRect.height / 2;
    const translateX = (avatarCenterX - heroCenterX) * easedProgress;
    const translateY = (avatarCenterY - heroCenterY) * easedProgress;
    const scale = 1 + ((headerRect.width / heroRect.width) - 1) * easedProgress;

    heroPhoto.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
    heroPhoto.classList.toggle('is-morphing', progress > 0 && progress < 1);
    heroPhoto.classList.toggle('is-docked', progress > 0.985);
    headerAvatar.classList.toggle('has-photo', progress > 0.86);
  };

  const requestRender = () => {
    if (animationFrame) return;
    animationFrame = requestAnimationFrame(render);
  };

  measureHero();
  render();

  window.addEventListener('scroll', requestRender, { passive: true });
  window.addEventListener('resize', () => {
    heroRect = null;
    requestRender();
  });
  reducedMotion.addEventListener?.('change', requestRender);
}

function initRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function initSectionTracking() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav__link[data-section]');
  if (!sections.length || !navLinks.length) return;

  const setActiveLink = (sectionId) => {
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.dataset.section === sectionId);
    });
  };

  let scrollTicking = false;

  const updateActiveSection = () => {
    const headerHeight =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;
    const scrollPos = window.scrollY + headerHeight + 100;

    let activeSection = null;

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos) {
        activeSection = section;
      }
    });

    if (activeSection) setActiveLink(activeSection.id);
    scrollTicking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!scrollTicking) {
        requestAnimationFrame(updateActiveSection);
        scrollTicking = true;
      }
    },
    { passive: true }
  );

  updateActiveSection();
}

function initCardInteractions() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const interactiveCards = document.querySelectorAll(
    '.interactive-card:not(.hero-chip), .surface-card, .project-card, .skill-card, .experience-card, .contact-card'
  );

  interactiveCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      if (window.innerWidth > 860) {
        const rotateX = ((y - centerY) / centerY) * -2.5;
        const rotateY = ((x - centerX) / centerX) * 2.5;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.008)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.42s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.4s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = '';
    });
  });
}
