import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../assets/logo.png';

export default function Home() {
  return (
    <div className="App">
        <img src={logo} alt="Logo" className="logo" />
      <header className="App-header">
        <h1>Forma simples de controlar seus clientes.</h1>
        <p>Controle total sobre seus clientes.</p>
        <Link className='button' to="/clientes">
          <button>Começar</button>
        </Link>
      </header>
      <aside className="App-aside">
      </aside>
    </div>
  );
}
