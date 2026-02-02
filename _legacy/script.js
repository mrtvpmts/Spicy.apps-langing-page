// SPICY.APPS - JavaScript Funcional

// === 1. THEME TOGGLE ===
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// === 2. SMOOTH SCROLL (Lenis) ===
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// === 3. GSAP ANIMATIONS ===
gsap.registerPlugin(ScrollTrigger);

// Hero entrance
window.addEventListener('load', () => {
    gsap.from('.hero-title', {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out'
    });

    gsap.from('.hero-actions .btn', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.5,
        stagger: 0.15,
        ease: 'back.out(1.7)'
    });

    gsap.from('.hero-pepper', {
        opacity: 0,
        scale: 0.9,
        x: 50,
        duration: 1.2,
        delay: 0.4,
        ease: 'power2.out'
    });
});

// Scroll animations
const animateOnScroll = (selector, options = {}) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power2.out',
            ...options
        });
    });
};

animateOnScroll('.value-card');
animateOnScroll('.service-card', { stagger: 0.1 });
animateOnScroll('.process-step', { stagger: 0.1 });
animateOnScroll('.portfolio-card', { stagger: 0.1 });
animateOnScroll('.differential-card', { stagger: 0.1 });
animateOnScroll('.testimonial-card');

// === 4. SERVICE CARDS MODAL ===
const serviceCards = document.querySelectorAll('.service-card');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

const serviceData = {
    mobile: {
        title: 'Aplicativos Mobile',
        desc: 'Apps nativos e híbridos com performance de ponta.',
        features: [
            'iOS e Android nativos (Swift, Kotlin)',
            'React Native e Flutter para cross-platform',
            'Integração com APIs e cloud',
            'Publicação nas stores',
            'Manutenção contínua'
        ]
    },
    web: {
        title: 'Sistemas Web & SaaS',
        desc: 'Plataformas web modernas e escaláveis.',
        features: [
            'Next.js e React',
            'Backend Node.js/Python',
            'Banco de dados otimizado',
            'Deploy em cloud',
            'Dashboard admin'
        ]
    },
    automation: {
        title: 'Automações & Integrações',
        desc: 'Conectamos sistemas e automatizamos processos.',
        features: [
            'Integração com ERPs/CRMs',
            'APIs REST e GraphQL',
            'Webhooks',
            'RPA customizado',
            'Sincronização de dados'
        ]
    },
    ai: {
        title: 'Inteligência Artificial',
        desc: 'IA aplicada estrategicamente ao seu negócio.',
        features: [
            'GPT-4, Claude, Gemini',
            'Agentes autônomos',
            'Análise preditiva',
            'Chatbots inteligentes',
            'Vision e NLP'
        ]
    },
    erp: {
        title: 'ERPs & CRMs Custom',
        desc: 'Gestão completa sob medida.',
        features: [
            'Módulos personalizados',
            'Gestão financeira',
            'Controle de estoque',
            'CRM com automação',
            'Relatórios analíticos'
        ]
    },
    design: {
        title: 'UI/UX Design',
        desc: 'Experiências que usuários amam.',
        features: [
            'Research e discovery',
            'Wireframes e protótipos',
            'Design system',
            'Testes de usabilidade',
            'Handoff para dev'
        ]
    }
};

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const type = card.getAttribute('data-service');
        const data = serviceData[type];

        modalBody.innerHTML = `
            <h2 class="fire-gradient" style="margin-bottom: 16px;">${data.title}</h2>
            <p style="color: var(--text-secondary); margin-bottom: 32px; font-size: 18px;">${data.desc}</p>
            <h4 style="margin-bottom: 20px; font-size: 20px;">O que inclui:</h4>
            <ul style="list-style: none; padding: 0;">
                ${data.features.map(f => `
                    <li style="padding: 12px 0; padding-left: 32px; position: relative; color: var(--text-secondary);">
                        <span style="position: absolute; left: 0; color: #FF3333;">🌶</span>
                        ${f}
                    </li>
                `).join('')}
            </ul>
            <button class="btn btn-fire" style="margin-top: 40px; width: 100%;">Iniciar Projeto</button>
        `;

        modal.style.display = 'flex';
        gsap.from('.modal-content', {
            scale: 0.9,
            opacity: 0,
            duration: 0.4,
            ease: 'back.out(1.5)'
        });
    });
});

const closeModalFn = () => {
    gsap.to('.modal-content', {
        scale: 0.9,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            modal.style.display = 'none';
        }
    });
};

modalClose.addEventListener('click', closeModalFn);
modalOverlay.addEventListener('click', closeModalFn);

// === 5. PORTFOLIO CARDS (Placeholder) ===
const portfolioCards = document.querySelectorAll('.portfolio-card');
portfolioCards.forEach(card => {
    card.addEventListener('click', () => {
        const project = card.getAttribute('data-project');
        modalBody.innerHTML = `
            <h2 class="fire-gradient" style="margin-bottom: 20px;">Projeto em Destaque</h2>
            <p style="color: var(--text-secondary); margin-bottom: 30px;">Detalhes sobre ${project} serão adicionados em breve.</p>
            <button class="btn btn-ghost" style="width: 100%;" onclick="document.getElementById('modal').style.display='none'">Fechar</button>
        `;
        modal.style.display = 'flex';
    });
});

// === 6. FAQ ACCORDION ===
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all
        faqItems.forEach(i => i.classList.remove('active'));

        // Open clicked if wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// === 7. SMOOTH NAV ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            lenis.scrollTo(target, {
                offset: -80,
                duration: 1.2
            });
        }
    });
});

console.log('🌶 SPICY.APPS loaded successfully');
