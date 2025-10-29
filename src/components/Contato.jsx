import { useState } from 'react';
import './Contato.css';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Obrigada! Vamos em breve entrar em contato com você.');
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  const whatsappLink = `https://wa.me/5567998896789?text=Olá Luana! Gostaria de saber mais sobre seus produtos e serviços.`;

  return (
    <section id="contato" className="contato">
      <div className="contato-container">
        <h2 className="section-title">Vamos Conversar?</h2>
        <p className="section-subtitle">
          Entre em contato comigo para conhecer melhor as soluções em IA e como posso ajudar você.
        </p>

        <div className="contato-content">
          <div className="contato-info">
            <div className="info-card">
              <h3>WhatsApp</h3>
              <p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-link">
                  (67) 99889-6789
                </a>
              </p>
              <p className="info-text">Respondo rapidamente por aqui!</p>
            </div>

            <div className="info-card">
              <h3>Email</h3>
              <p>
                <a href="mailto:luanadescomplica.ia@gmail.com" className="contact-link">
                  luanadescomplica.ia@gmail.com
                </a>
              </p>
              <p className="info-text">Envie sua mensagem quando preferir</p>
            </div>

            <div className="info-card">
              <h3>Localização</h3>
              <p>Campo Grande - MS</p>
              <p className="info-text">Atendo presencialmente e online</p>
            </div>

            <div className="social-links">
              <h3>Redes Sociais</h3>
              <div className="social-icons">
                <a href="https://instagram.com/luanadescomplica.ia" target="_blank" rel="noopener noreferrer" className="social-icon">
                  Instagram
                </a>
                <a href="https://linkedin.com/in/luana-descomplica-ia" target="_blank" rel="noopener noreferrer" className="social-icon">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form className="contato-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(67) 99999-9999"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem *</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                placeholder="Como posso ajudá-lo?"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

