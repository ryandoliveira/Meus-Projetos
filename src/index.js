import React from 'react';
import ReactDOM from 'react-dom';
import App from './paginas/App'; // Importe o componente principal do seu aplicativo

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderize o componente principal dentro do React.StrictMode */}
  </React.StrictMode>,
  document.getElementById('root') // Renderize o componente na div com o id "root" no seu arquivo HTML
);
