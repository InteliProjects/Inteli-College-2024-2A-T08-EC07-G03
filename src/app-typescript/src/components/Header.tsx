import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const pageNames: { [key: string]: string } = {
  '/': 'Home',
  '/training': 'Treinar',  
  '/progress': 'Treinar',
  '/trained': 'Modelo treinado',
  '/exc': 'Executar',
  '/excProgress': 'Executar',
  '/excModel': 'Modelo executado',
};

const Header: React.FC = () => {
  const location = useLocation();
  const currentPage = pageNames[location.pathname] || 'Página Desconhecida';

  return (
    <header className="flex items-center space-x-4 p-4">
      <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
      <span className="text-gray-400">{'>'}</span>

      <span className="text-white">{currentPage}</span>
    </header>
  );
};

export default Header;
