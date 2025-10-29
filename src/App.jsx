import { Suspense, lazy } from 'react';
import './App.css';

const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./components/Home'));
const Sobre = lazy(() => import('./components/Sobre'));
const Produtos = lazy(() => import('./components/Produtos'));
const Contato = lazy(() => import('./components/Contato'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Carregando...</div>}>
        <Header />
        <main>
          <Home />
          <Sobre />
          <Produtos />
          <Contato />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

