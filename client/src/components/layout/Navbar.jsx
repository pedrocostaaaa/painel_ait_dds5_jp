import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


function Header() {
  const menuShow = () => {
    // Adicione a lógica para exibir/esconder o menu mobile aqui
  };

  return (
    <header>
      <nav className="nav-bar">
        <div className="logo">
          <h1>ViverBem+</h1>
        </div>

        <div className="nav-list">
          <ul>
            <li className="nav-item">
              <a href="#" className="nav-link">Página inicial</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Login</a>
            </li>
          </ul>
        </div>

        <div className="mobile-menu-icon">
          <button onClick={menuShow}>
            {/* Adicione a lógica e a imagem do ícone do menu aqui */}
            {/* <img className="icon" src="assets/img/menu_white_36dp.svg" alt="Menu Icon" /> */}
          </button>
        </div>
      </nav>

      <div className="mobile-menu">
        <ul>
          <li className="nav-item">
            <a href="#" className="nav-link">Página inicial</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Login</a>
          </li>
        </ul>
      </div>

      <div className="logo-viver">
        {/* <img src="img/LOGO_VIVER_BEM_+_2-removebg-preview (1).png" alt="Logo ViverBem+" className="logo-form" /> */}
      </div>
    </header>
  );
}

export default Header;