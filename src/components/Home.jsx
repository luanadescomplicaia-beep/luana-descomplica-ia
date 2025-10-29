import './Home.css';

export default function Home() {
  const handleCTA = () => {
    const element = document.getElementById('produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">Leve no uso, potente no impacto.</h1>
            <p className="home-subtitle">
              Transforme sua rotina com Inteligência Artificial prática, acessível e estratégica.
            </p>
            <button className="cta-button" onClick={handleCTA}>
              Descubra como aplicar IA agora mesmo
            </button>
          </div>
          <div className="home-visual">
            <div className="visual-placeholder">
              <img src="/luana-foto.png" alt="Luana Descomplica.IA" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

