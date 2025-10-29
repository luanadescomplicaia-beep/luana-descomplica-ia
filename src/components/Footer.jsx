import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Luana Descomplica.IA</h4>
            <p>Leve no uso. Potente no impacto.</p>
            <p className="tagline">Transformando a forma como você usa Inteligência Artificial.</p>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="mailto:luanadescomplica.ia@gmail.com">
                  luanadescomplica.ia@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5567998896789" target="_blank" rel="noopener noreferrer">
                  (67) 99889-6789
                </a>
              </li>
              <li>Campo Grande - MS</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links-footer">
              <a href="https://instagram.com/luanadescomplica.ia" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://linkedin.com/in/luana-descomplica-ia" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Luana Descomplica.IA. Todos os direitos reservados.</p>
          <p>Desenvolvido com leveza e inteligência.</p>
        </div>
      </div>
    </footer>
  );
}

