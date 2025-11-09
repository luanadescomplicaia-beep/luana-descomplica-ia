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
        
        console.log('Dados do formulário:', dados);
        
        try {
            // Enviar para API
            const response = await fetch('/api/candidaturas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });
            
            if (response.ok) {
                alert(`Obrigada, ${nome}! Sua candidatura foi recebida com sucesso. Vamos analisar e entrar em contato em breve!`);
                
                // Limpar o formulário
                formularioPiloto.reset();
                
                // Fechar modal
                modalPiloto.classList.remove('active');
                document.body.style.overflow = 'auto';
            } else {
                alert('Desculpe, houve um erro ao enviar sua candidatura. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar candidatura:', error);
            alert('Desculpe, houve um erro ao enviar sua candidatura. Por favor, tente novamente.');
        }
    });
}

