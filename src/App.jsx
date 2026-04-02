import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';

import Home from './pages/Home.jsx';
import AreasDeAtuacao from './pages/AreasDeAtuacao.jsx';
import Projetos from './pages/Projetos.jsx';
import Sobre from './pages/Sobre.jsx';
import TrabalheConosco from './pages/TrabalheConosco.jsx';
import Contato from './pages/Contato.jsx';

import styles from './styles/App.module.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AreasDeAtuacao" element={<AreasDeAtuacao />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/TrabalheConosco" element={<TrabalheConosco />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
