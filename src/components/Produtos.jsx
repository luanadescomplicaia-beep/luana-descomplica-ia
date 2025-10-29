import './Produtos.css';

export default function Produtos() {
  const produtos = [
    {
      id: 1,
      titulo: 'E-book "IA sem Mistérios"',
      descricao: 'Seu novo superpoder no mundo digital. O caminho descomplicado para dominar a Inteligência Artificial e otimizar cada área da sua vida, com leveza e resultados.',
      preco: 'R$ 49',
      link: 'https://pay.kiwify.com.br/4dpyG9V',
      tipo: 'E-book',
      destaque: true,
    },
    {
      id: 2,
      titulo: 'Palestra "IA Estratégica para Empresas"',
      descricao: 'Uma apresentação completa sobre como implementar Inteligência Artificial de forma estratégica nas operações empresariais. Ideal para líderes e gestores que desejam potencializar seus times com tecnologia prática e acessível.',
      preco: 'Consulte',
      link: '#contato',
      tipo: 'Palestra',
      destaque: false,
    },
    {
      id: 3,
      titulo: 'Treinamento DP360°',
      descricao: 'Técnica, Gestão e Inovação em RH. Uma imersão prática de um dia que conecta as rotinas do Departamento Pessoal à liderança e à Inteligência Artificial. Aprenda com especialistas em DP, gestão e inovação.',
      preco: 'Consulte',
      link: '#contato',
      tipo: 'Treinamento',
      destaque: false,
    },
    {
      id: 4,
      titulo: 'Consultoria de IA Personalizada',
      descricao: 'Soluções customizadas para sua empresa ou negócio. Análise de processos, implementação de ferramentas de IA e treinamento de equipes. Transforme sua operação com inteligência artificial prática.',
      preco: 'Em construção',
      link: '#contato',
      tipo: 'Consultoria',
      destaque: false,
      emConstrucao: true,
    },
  ];

  return (
    <section id="produtos" className="produtos">
      <div className="produtos-container">
        <h2 className="section-title">Produtos e Serviços</h2>
        <p className="section-subtitle">
          Soluções práticas e acessíveis para transformar sua relação com a Inteligência Artificial
        </p>

        <div className="produtos-grid">
          {produtos.map((produto) => (
            <div key={produto.id} className={`produto-card ${produto.destaque ? 'destaque' : ''}`}>
              {produto.destaque && <div className="badge-destaque">Mais Popular</div>}
              {produto.emConstrucao && <div className="badge-construcao">Em Construção</div>}
              
              <div className="produto-tipo">{produto.tipo}</div>
              <h3 className="produto-titulo">{produto.titulo}</h3>
              <p className="produto-descricao">{produto.descricao}</p>
              
              <div className="produto-footer">
                <span className="produto-preco">{produto.preco}</span>
                {!produto.emConstrucao && (
                  <a href={produto.link} className="produto-link">
                    {produto.link === 'https://pay.kiwify.com.br/4dpyG9V' ? 'Acessar' : 'Saiba Mais'}
                  </a>
                )}
                {produto.emConstrucao && (
                  <button className="produto-link-waitlist">
                    Lista de Espera
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

