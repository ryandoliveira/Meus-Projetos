import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import Carousel from '../componentes/Carousel';
import Conteudo from '../componentes/Conteudo';
import Cardsection from '../componentes/Cardsection'; 
import Sobre from '../componentes/Sobre';
import Cadastro from './Cadastro';

import Recuperarsenha from './recuperarsenha';
import '../styles/style.css'; // Mantenha a importação do seu arquivo de estilos aqui

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Inverte o estado do menu ao ser clicado
  };

  return (
    <div>
      <Navbar />
      
      <Carousel />
      <Cardsection />
      <Conteudo />
     
      <Cadastro />
      <Recuperarsenha />
      <Sobre/>
      <Footer />
    </div>
  );
}

export default App;
