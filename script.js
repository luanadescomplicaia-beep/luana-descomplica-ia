// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Modal Lista de Espera
function openWaitlistModal() {
    const modal = document.getElementById('waitlistModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWaitlistModal() {
    const modal = document.getElementById('waitlistModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora dele
window.addEventListener('click', (e) => {
    const modal = document.getElementById('waitlistModal');
    if (e.target === modal) {
        closeWaitlistModal();
    }
});

// Formulário de Lista de Espera
const waitlistForm = document.getElementById('waitlistForm');
if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome-waitlist').value;
        const email = document.getElementById('email-waitlist').value;
        
        alert(`Obrigada, ${nome}! Vamos em breve entrar em contato com você para discutir sua consultoria.`);
        
        // Limpar o formulário
        waitlistForm.reset();
        closeWaitlistModal();
    });
}

// Formulário de Contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const mensagem = document.getElementById('mensagem').value;
        
        alert(`Obrigada, ${nome}! Vamos em breve entrar em contato com você.`);
        
        // Limpar o formulário
        contactForm.reset();
    });
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Efeito de scroll para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.produto-card, .valor-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});



// Modal Formulário Piloto
const abrirModalPiloto = document.getElementById('abrirModalPiloto');
const modalPiloto = document.getElementById('modalPiloto');
const closeModalPiloto = document.getElementById('closeModalPiloto');

if (abrirModalPiloto) {
    abrirModalPiloto.addEventListener('click', () => {
        modalPiloto.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeModalPiloto) {
    closeModalPiloto.addEventListener('click', () => {
        modalPiloto.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Fechar modal ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === modalPiloto) {
        modalPiloto.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Formulário de Candidatura Piloto
const formularioPiloto = document.getElementById('formularioPiloto');
if (formularioPiloto) {
    formularioPiloto.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome_completo').value;
        const email = document.getElementById('email_profissional').value;
        
        // Coletar dados do formulário
        const formData = new FormData(formularioPiloto);
        const dados = Object.fromEntries(formData);
        
        // Coletar checkboxes (materiais)
        const materiais = Array.from(document.querySelectorAll('input[name="materiais"]:checked'))
            .map(el => el.value)
            .join(', ');
        dados.materiais = materiais || 'Nenhum selecionado';
        
        // Adicionar ID, data e status
        dados.id = Date.now();
        dados.criado_em = new Date().toISOString();
        dados.status = 'pendente';
        
        console.log('Dados do formulário:', dados);
        
        try {
            // Salvar no localStorage
            const stored = localStorage.getItem('candidaturas_piloto');
            const candidaturas = stored ? JSON.parse(stored) : [];
            candidaturas.push(dados);
            localStorage.setItem('candidaturas_piloto', JSON.stringify(candidaturas));
            
            alert(`Obrigada, ${nome}! Sua candidatura foi recebida com sucesso. Vamos analisar e entrar em contato em breve!`);
            
            // Limpar o formulário
            formularioPiloto.reset();
            
            // Fechar modal
            modalPiloto.classList.remove('active');
            document.body.style.overflow = 'auto';
        } catch (error) {
            console.error('Erro ao enviar candidatura:', error);
            alert('Desculpe, houve um erro ao enviar sua candidatura. Por favor, tente novamente.');
        }
    });
}




// ===== MODAIS DE PRODUTOS =====
// Função para fechar modais de produtos
function closeProductModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Fechar modais ao clicar no botão X
document.getElementById('closePalestra')?.addEventListener('click', () => closeProductModal('modalPalestra'));
document.getElementById('closeDP360')?.addEventListener('click', () => closeProductModal('modalDP360'));
document.getElementById('closeAgente')?.addEventListener('click', () => closeProductModal('modalAgente'));
document.getElementById('closeDados')?.addEventListener('click', () => closeProductModal('modalDados'));
document.getElementById('closeAutomacao')?.addEventListener('click', () => closeProductModal('modalAutomacao'));

// Fechar modais ao clicar fora deles
window.addEventListener('click', (e) => {
    const modals = ['modalPalestra', 'modalDP360', 'modalAgente', 'modalDados', 'modalAutomacao'];
    
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal && e.target === modal) {
            closeProductModal(modalId);
        }
    });
});

// Fechar modais ao pressionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modals = ['modalPalestra', 'modalDP360', 'modalAgente', 'modalDados', 'modalAutomacao'];
        modals.forEach(modalId => closeProductModal(modalId));
    }
});

// Prevenir scroll quando modal está aberto
function openProductModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

