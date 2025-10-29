import './Sobre.css';

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre-container">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="sobre-content">
          <div className="sobre-image">
            <img src="/luana-portrait.png" alt="Luana Fagundes Durrewald" />
          </div>

          <div className="sobre-text">
            <p className="intro-text">
              Sou <strong>Luana Fagundes Durrewald</strong>, especialista em Inteligência Artificial aplicada à produtividade e gestão.
            </p>

            <p>
              Depois de anos atuando no ambiente corporativo, liderando áreas administrativas e financeiras, percebi algo essencial: a verdadeira transformação não vem da tecnologia sozinha — vem de pessoas preparadas para usá-la com propósito.
            </p>

            <p>
              Foi assim que nasceu a <strong>Luana Descomplica.IA</strong>: um movimento para traduzir o complexo em simples, tornando a IA prática, acessível e transformadora.
            </p>

            <p>
              Hoje, ajudo profissionais e empresas a ganharem tempo, produtividade e clareza, aplicando inteligência artificial de forma humana, ética e eficiente.
            </p>

            <p>
              Minha missão é mostrar que não é preciso ser da área de tecnologia para usar a IA como aliada — é preciso apenas curiosidade, método e vontade de evoluir.
            </p>
          </div>
        </div>

        <div className="valores-section">
          <div className="valores-grid">
            <div className="valor-card">
              <h3>Missão</h3>
              <p>Tornar a Inteligência Artificial prática, acessível e transformadora, ajudando pessoas a viverem com mais tempo, propósito e liberdade.</p>
            </div>

            <div className="valor-card">
              <h3>Visão</h3>
              <p>Ser referência em IA prática e acessível, mostrando que o poder dessa tecnologia está ao alcance de todos.</p>
            </div>
          </div>

          <div className="valores-list">
            <h3>Valores</h3>
            <ul>
              <li><strong>Praticidade Absoluta</strong> – Clareza, aplicação imediata e respeito pelo tempo.</li>
              <li><strong>Energia Contagiante</strong> – Entusiasmo que inspira ação.</li>
              <li><strong>Autenticidade Radical</strong> – Verdade, vulnerabilidade e conexão real.</li>
              <li><strong>Serviço como Propósito</strong> – Impacto genuíno nas pessoas.</li>
              <li><strong>Inovação Descomplicada</strong> – Criatividade leve e acessível para o dia a dia.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

