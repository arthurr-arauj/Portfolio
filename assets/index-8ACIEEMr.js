(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const n={name:"Arthur Flávio Gonçalves Araújo",shortName:"Arthur Flávio",initials:"AF",headline:"Estagiário de Suporte Técnico (N1/N3) • Desenvolvedor • Sistemas de Informação — UFU",location:"Uberlândia, MG",email:"arthurflavio06@gmail.com",phone:"+55 34 99228-4560",linkedin:"https://www.linkedin.com/in/arthur-fl%C3%A1vio/",github:"https://github.com/arthurr-arauj",resume:"./imagens/Currículo.pdf",photo:"./imagens/arthur.jpeg"},A=[{label:"Hyperflow",detail:"Suporte N1/N3"},{label:"ASCII Empresa Júnior",detail:"Diretoria de Projetos"},{label:"Node.js",detail:"APIs REST"},{label:"UFU",detail:"Sistemas de Informação"}],g={summary:"Profissional em formação em Sistemas de Informação, com atuação como Estagiário de Suporte Técnico (N1/N3) e Desenvolvedor na ASCII Empresa Júnior. Experiência com diagnóstico de incidentes complexos, integrações via APIs REST, fluxos de automação e gerenciamento de chamados. Domínio em lógica de programação, metodologias ágeis de alta performance e construção de soluções para processos corporativos.",traits:"Perfil analítico, resiliente e focado em resultados, com atuação em projetos envolvendo arquitetura backend, processamento de dados e evolução contínua em ecossistemas de atendimento.",quickFacts:[{label:"Localização",value:"Uberlândia, MG"},{label:"Formação",value:"Sistemas de Informação — UFU"},{label:"Inglês",value:"Avançado (trabalho e leitura técnica)"},{label:"Português",value:"Nativo"}]},L=[{id:"hyperflow",role:"Estagiário de Suporte Técnico (N1/N3)",company:"Hyperflow",period:"2026 — atual",highlight:!0,bullets:["Atuação na linha de frente da operação, com foco em conversação, integrações e automações.","Organização do fluxo de chamados, documentação de evidências técnicas e investigação de causa-raiz.","Testes e validação de soluções, incluindo consumo de APIs REST via Postman.","Priorização com Kanbanize baseada em SLA, direcionando demandas entre equipes técnicas.","Gestão de chamados críticos com parceiros (Meta/WhatsApp Business) e manutenção de ambientes."]},{id:"ascii",role:"Membro Efetivo (Diretoria de Projetos)",company:"ASCII Empresa Júnior (UFU)",period:"2025 — atual",highlight:!1,bullets:["Ciclo de vida de desenvolvimento de soluções tecnológicas, transformando necessidades em software.","Arquitetura e desenvolvimento de API para leitura, extração e processamento em lote de planilhas Excel.","Rotinas computacionais no backend para catalogação de colunas e recálculo de fórmulas financeiras.","Trabalho colaborativo em equipes multidisciplinares com foco em escopo, prazos e requisitos."]}],I=[{id:"chatbot",title:"Chatbot WhatsApp — Automação e APIs",description:"Assistente virtual interativo com Node.js e Twilio para roteamento de respostas e menus automatizados no WhatsApp.",longDescription:"Chatbot interativo para WhatsApp desenvolvido com Node.js, Express e API da Twilio. Ao receber mensagens, o bot responde com menu numérico interativo para consulta de produtos, promoções e horários.",image:"./imagens/demonstracao-chatbot.gif",tags:["Node.js","Express.js","Twilio API","Dotenv","Ngrok"],github:"https://github.com/arthurr-arauj/chatbot-whatsapp-node",demo:null,category:"Automação + APIs"},{id:"focusflow",title:"FocusFlow — Landing Page",description:"Landing page responsiva e performática para processo seletivo da ASCII, com foco em UI/UX e animações suaves.",longDescription:"Desenvolvido como desafio técnico Front-End para o processo seletivo da ASCII (Empresa Júnior de Computação da UFU). Interface com foco total em UI/UX, animações suaves e design responsivo.",image:"./imagens/print-site.jpg",tags:["React.js","Tailwind CSS","Vite","React Icons","Vercel"],github:"https://github.com/arthurr-arauj/focusflow-landing-ascii",demo:"https://focusflow-ascii.vercel.app/",category:"Front-end / UI-UX"},{id:"revitalize",title:"Revitalize — Portal Institucional",description:"Portal institucional responsivo para casa de acolhimento de idosos, desenvolvido como projeto de extensão na UFU.",longDescription:"Projeto de extensão da UFU para ajudar uma casa de acolhimento de idosos a divulgar seu trabalho. Desenvolvimento completo com HTML e CSS, aplicando responsividade e personalização visual.",image:"./imagens/logo.png",tags:["HTML","CSS","Git","Responsividade"],github:"https://github.com/centro-revitalize/Revitalize",demo:"https://centro-revitalize.github.io/Revitalize/",category:"Projeto social"},{id:"clinica",title:"Clínica Veterinária — Sistema em C",description:"Sistema de gerenciamento para clínica veterinária com structs, CRUDs, ponteiros e persistência em arquivos.",longDescription:"Sistema acadêmico de gerenciamento para clínica veterinária em C. Aplica conceitos de manipulação de arquivos, structs, CRUDs e ponteiros para gerenciamento eficiente de memória.",image:null,tags:["Linguagem C","Estruturas de Dados","Ponteiros","Algoritmos"],github:"https://github.com/arthurr-arauj/sistema-clinica-veterinaria",demo:null,category:"Backend / C"}],C=[{id:"apis",title:"APIs e Integrações",description:"Consumo, testes e automação de fluxos entre sistemas.",items:["APIs REST","Postman","HTTP REST","Automação de fluxos","Integração de sistemas"]},{id:"backend",title:"Backend e Programação",description:"Lógica de negócios e rotinas computacionais.",items:["Node.js","JavaScript","Python","C","C++"]},{id:"frontend",title:"Front-end e UI/UX",description:"Interfaces responsivas e componentizadas.",items:["React","Tailwind CSS","HTML/CSS","Design responsivo"]},{id:"support",title:"Suporte e Processos",description:"Operação técnica e gestão ágil de demandas.",items:["Troubleshooting N1/N3","SLA","Kanbanize","Git/GitHub","Gestão de BD"]}],j=[{degree:"Bacharelado em Sistemas de Informação",institution:"Universidade Federal de Uberlândia",period:"2024 — atualmente",detail:"Previsão de conclusão: Julho/2028"},{degree:"Engenharia de IA, LLMs e Automações",institution:"Alura",period:"2025 — atualmente",detail:"Cursos complementares em inteligência artificial e automações."}],P=[{href:"#sobre",label:"Sobre"},{href:"#experiencia",label:"Experiência"},{href:"#projetos",label:"Projetos"},{href:"#skills",label:"Skills"},{href:"#contato",label:"Contato"}];function b(){return P.map(e=>`<a href="${e.href}" class="site-nav__link" data-section="${e.href.slice(1)}">${e.label}</a>`).join("")}function T(){return A.map(e=>`
      <li class="hero-chip reveal">
        <span class="text-sm font-semibold text-accent">${e.label}</span>
        <span class="text-xs text-muted">${e.detail}</span>
      </li>`).join("")}function z(){return g.quickFacts.map(e=>`
      <div class="flex justify-between gap-4 border-b border-dark-border py-3 last:border-0">
        <span class="text-sm text-muted">${e.label}</span>
        <span class="text-right text-sm font-medium text-white">${e.value}</span>
      </div>`).join("")}function q(){return L.map(e=>`
      <article class="interactive-card experience-card reveal p-6 md:p-8 ${e.highlight?"border-accent/20 bg-gradient-to-br from-accent-soft to-dark-card":""}" id="${e.id}">
        <div class="relative z-10">
          <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-accent">${e.company}</p>
              <h3 class="mt-1 text-xl font-bold text-white">${e.role}</h3>
            </div>
            <span class="rounded-full border border-dark-border bg-dark px-3 py-1 text-xs text-muted">${e.period}</span>
          </div>
          <ul class="space-y-2">
            ${e.bullets.map(t=>`<li class="flex gap-2 text-sm text-muted"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span><span>${t}</span></li>`).join("")}
          </ul>
        </div>
      </article>`).join("")}function F(){return I.map(e=>`
      <article class="interactive-card project-card reveal flex flex-col overflow-hidden" data-project="${e.id}">
        <div class="relative z-10 flex flex-1 flex-col p-5 md:p-6">
          <div class="mb-4">
            ${e.image?`<img src="${e.image}" alt="${e.title}" class="project-preview" loading="lazy" />`:'<div class="project-preview flex items-center justify-center bg-gradient-to-br from-dark-border to-dark-card text-4xl">🐾</div>'}
          </div>
          <span class="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">${e.category}</span>
          <h3 class="text-lg font-bold text-white">${e.title}</h3>
          <p class="mt-2 flex-1 text-sm text-muted">${e.description}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${e.tags.map(t=>`<span class="tech-pill">${t}</span>`).join("")}
          </div>
          <div class="mt-5 flex flex-wrap gap-3">
            <a href="${e.github}" target="_blank" rel="noopener noreferrer" class="btn-ghost text-xs">GitHub</a>
            ${e.demo?`<a href="${e.demo}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs">Ver ao vivo</a>`:""}
          </div>
        </div>
      </article>`).join("")}function N(){return C.map((e,t)=>`
      <article class="interactive-card skill-card reveal p-6" data-skill="${e.id}">
        <div class="relative z-10">
          <span class="text-xs font-semibold text-accent/70">0${t+1}</span>
          <h3 class="mt-2 text-lg font-bold text-white">${e.title}</h3>
          <p class="mt-2 text-sm text-muted">${e.description}</p>
          <ul class="mt-4 flex flex-wrap gap-2">
            ${e.items.map(s=>`<li class="rounded-lg border border-dark-border bg-dark px-3 py-1.5 text-xs text-[#f5f5f5] transition-colors hover:border-accent hover:text-accent">${s}</li>`).join("")}
          </ul>
        </div>
      </article>`).join("")}function U(){return j.map(e=>`
      <article class="interactive-card surface-card reveal p-6">
        <div class="relative z-10">
          <h3 class="text-lg font-bold text-white">${e.degree}</h3>
          <p class="mt-1 text-sm text-accent">${e.institution}</p>
          <p class="mt-2 text-sm text-muted">${e.period}</p>
          <p class="mt-1 text-xs text-footer">${e.detail}</p>
        </div>
      </article>`).join("")}document.querySelector("#app").innerHTML=`
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-dark">
    Pular para o conteúdo
  </a>

  <div id="nav-backdrop" class="nav-backdrop" aria-hidden="true"></div>

  <header class="site-header" role="banner">
    <div class="mx-auto flex h-full max-w-container items-center justify-between px-4 md:px-6">
      <a href="#" class="flex items-center gap-3" aria-label="Início">
        <div id="header-avatar" class="header-avatar" aria-hidden="true">
          <span class="header-avatar__initials">${n.initials}</span>
          <img src="${n.photo}" alt="${n.shortName}" class="header-avatar__photo" />
        </div>
        <span class="hidden font-semibold text-white sm:inline">${n.shortName}</span>
      </a>

      <nav class="site-nav hidden items-center gap-1 md:flex" aria-label="Navegação principal">
        ${b()}
      </nav>

      <button type="button" class="nav-toggle flex h-10 w-10 items-center justify-center rounded-lg border border-dark-border text-white md:hidden" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-nav">
        <svg class="h-5 w-5 nav-icon-open" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg class="hidden h-5 w-5 nav-icon-close" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <nav id="mobile-nav" class="site-nav-mobile absolute left-0 right-0 top-full hidden flex-col gap-1 border-b border-dark-border bg-dark-header/95 p-4 backdrop-blur-md md:hidden" aria-label="Menu mobile">
      ${b()}
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
              ${n.name}
            </h1>
            <p class="mt-4 max-w-xl text-lg text-muted md:text-xl">${n.headline}</p>
            <p class="mt-4 text-sm text-footer">${n.location} • ${n.email}</p>

            <div class="mt-8 flex flex-wrap gap-3">
              <a href="#experiencia" class="btn-primary">Ver experiência</a>
              <a href="${n.resume}" target="_blank" rel="noopener noreferrer" class="btn-outline">Baixar currículo</a>
              <a href="#contato" class="btn-ghost">Entrar em contato</a>
            </div>
          </div>

          <div class="reveal mx-auto lg:mx-0">
            <div id="hero-photo-stage" class="hero__photo-frame relative">
              <div class="absolute -inset-4 rounded-full bg-accent/10 blur-2xl"></div>
              <img
                src="${n.photo}"
                alt="${n.name}"
                class="relative h-48 w-48 rounded-full border-4 border-accent object-cover shadow-[0_0_30px_rgba(0,188,212,0.4)] md:h-56 md:w-56"
                width="224"
                height="224"
              />
            </div>
          </div>
        </div>

        <ul class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          ${T()}
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
              <p class="text-muted">${g.summary}</p>
              <p class="text-muted">${g.traits}</p>
            </div>
          </article>

          <aside class="interactive-card surface-card reveal p-6">
            <div class="relative z-10">
              <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Dados rápidos</h3>
              ${z()}
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
          ${q()}
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
          ${F()}
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
          ${N()}
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
          ${U()}
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
                <a href="mailto:${n.email}" class="flex items-center gap-3 text-white transition-colors hover:text-accent">
                  <span class="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-border bg-dark text-accent">✉</span>
                  <span>${n.email}</span>
                </a>
                <a href="tel:${n.phone.replace(/\s/g,"")}" class="flex items-center gap-3 text-white transition-colors hover:text-accent">
                  <span class="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-border bg-dark text-accent">📱</span>
                  <span>${n.phone}</span>
                </a>
                <a href="${n.linkedin}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-white transition-colors hover:text-accent">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" class="h-10 w-10" width="40" height="40" />
                  <span>LinkedIn</span>
                </a>
                <a href="${n.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-white transition-colors hover:text-accent">
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
              <a href="${n.resume}" target="_blank" rel="noopener noreferrer" class="btn-primary mt-6">Baixar Currículo</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>

  <footer class="border-t border-dark-border bg-dark-card px-4 py-8 md:px-6">
    <div class="mx-auto flex max-w-container flex-col items-center justify-between gap-4 sm:flex-row">
      <p class="text-sm text-footer">&copy; <span id="current-year"></span> ${n.shortName}</p>
      <button type="button" id="footer-back-to-top" class="text-sm text-accent transition-colors hover:text-accent-hover">
        Voltar ao topo ↑
      </button>
    </div>
  </footer>

  <button type="button" id="back-to-top" aria-label="Voltar ao topo">
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
  </button>
`;M();R();B();D();H();_();Y();X();V();function M(){const e=document.getElementById("current-year");e&&(e.textContent=String(new Date().getFullYear()))}function R(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{const s=e.getAttribute("href");if(!s||s==="#")return;const o=document.querySelector(s);if(!o)return;t.preventDefault();const a=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))||72,i=o.getBoundingClientRect().top+window.scrollY-a-8;window.scrollTo({top:i,behavior:"smooth"}),o.setAttribute("tabindex","-1"),o.focus({preventScroll:!0}),o.addEventListener("blur",()=>o.removeAttribute("tabindex"),{once:!0})})})}function _(){const e=document.getElementById("back-to-top"),t=document.getElementById("footer-back-to-top");if(!e)return;const s=()=>window.scrollTo({top:0,behavior:"smooth"}),o=()=>{e.classList.toggle("is-visible",window.scrollY>600)};window.addEventListener("scroll",o,{passive:!0}),o(),e.addEventListener("click",s),t==null||t.addEventListener("click",s)}function B(){const e=document.querySelector(".site-header"),t=document.querySelector(".nav-toggle"),s=document.querySelectorAll(".site-nav__link"),o=document.getElementById("mobile-nav"),a=document.getElementById("nav-backdrop"),i=document.querySelector(".nav-icon-open"),c=document.querySelector(".nav-icon-close");if(!e||!t||!o)return;const l=r=>{e.classList.toggle("is-nav-open",r),document.body.classList.toggle("menu-open",r),t.setAttribute("aria-expanded",String(r)),t.setAttribute("aria-label",r?"Fechar menu":"Abrir menu"),o.classList.toggle("hidden",!r),o.classList.toggle("flex",r),i==null||i.classList.toggle("hidden",r),c==null||c.classList.toggle("hidden",!r),a==null||a.classList.toggle("is-visible",r)};t.addEventListener("click",()=>{l(!e.classList.contains("is-nav-open"))}),s.forEach(r=>{r.addEventListener("click",()=>{window.innerWidth<=860&&l(!1)})}),a==null||a.addEventListener("click",()=>l(!1)),document.addEventListener("keydown",r=>{r.key==="Escape"&&l(!1)}),window.addEventListener("resize",()=>{window.innerWidth>860&&l(!1)})}function D(){const e=document.querySelector(".site-header");if(!e)return;const t=()=>{e.classList.toggle("is-scrolled",window.scrollY>24)};t(),window.addEventListener("scroll",t,{passive:!0})}function H(){var u;const e=document.getElementById("hero-photo-stage"),t=document.getElementById("header-avatar");if(!e||!t)return;const s=window.matchMedia("(prefers-reduced-motion: reduce)"),o=(d,m,v)=>Math.min(Math.max(d,m),v);let a=null,i=null;const c=()=>{const d=e.style.transform;e.style.transform="";const m=e.getBoundingClientRect();a={left:m.left+window.scrollX,top:m.top+window.scrollY,width:m.width,height:m.height},e.style.transform=d},l=()=>{if(i=null,s.matches){const f=window.scrollY>120;t.classList.toggle("has-photo",f),e.classList.toggle("is-docked",f),e.style.transform="";return}a||c();const d=t.getBoundingClientRect(),m=32,v=Math.max(420,a.top-d.top+260),p=o((window.scrollY-m)/(v-m),0,1),h=p*p*p*(p*(p*6-15)+10),x=a.left+a.width/2-window.scrollX,w=a.top+a.height/2-window.scrollY,y=d.left+d.width/2,k=d.top+d.height/2,S=(y-x)*h,$=(k-w)*h,E=1+(d.width/a.width-1)*h;e.style.transform=`translate3d(${S}px, ${$}px, 0) scale(${E})`,e.classList.toggle("is-morphing",p>0&&p<1),e.classList.toggle("is-docked",p>.985),t.classList.toggle("has-photo",p>.86)},r=()=>{i||(i=requestAnimationFrame(l))};c(),l(),window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",()=>{a=null,r()}),(u=s.addEventListener)==null||u.call(s,"change",r)}function Y(){const e=document.querySelectorAll(".reveal");if(!e.length)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.forEach(s=>s.classList.add("is-visible"));return}const t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&(o.target.classList.add("is-visible"),t.unobserve(o.target))})},{threshold:.1,rootMargin:"0px 0px -40px 0px"});e.forEach(s=>t.observe(s))}function X(){const e=document.querySelectorAll("section[id]"),t=document.querySelectorAll(".site-nav__link[data-section]");if(!e.length||!t.length)return;const s=i=>{t.forEach(c=>{c.classList.toggle("is-active",c.dataset.section===i)})};let o=!1;const a=()=>{const i=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))||72,c=window.scrollY+i+100;let l=null;e.forEach(r=>{r.offsetTop<=c&&(l=r)}),l&&s(l.id),o=!1};window.addEventListener("scroll",()=>{o||(requestAnimationFrame(a),o=!0)},{passive:!0}),a()}function V(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;document.querySelectorAll(".interactive-card:not(.hero-chip), .surface-card, .project-card, .skill-card, .experience-card, .contact-card").forEach(t=>{t.addEventListener("mousemove",s=>{const o=t.getBoundingClientRect(),a=s.clientX-o.left,i=s.clientY-o.top,c=o.width/2,l=o.height/2;if(t.style.setProperty("--mouse-x",`${a}px`),t.style.setProperty("--mouse-y",`${i}px`),window.innerWidth>860){const r=(i-l)/l*-2.5,u=(a-c)/c*2.5;t.style.transform=`perspective(800px) rotateX(${r}deg) rotateY(${u}deg) translateY(-4px) scale(1.008)`}}),t.addEventListener("mouseleave",()=>{t.style.transform="",t.style.removeProperty("--mouse-x"),t.style.removeProperty("--mouse-y")}),t.addEventListener("mouseenter",()=>{t.style.transition="transform 0.42s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.4s ease"}),t.addEventListener("mouseleave",()=>{t.style.transition=""})})}
