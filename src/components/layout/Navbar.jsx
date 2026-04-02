import styles from './navbar.module.css';
import logo from '../../assets/images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="C3T lOGO" />{' '}
        </Link>
        <ul>
          <li>
            <NavLink to="/">ÍNICIO </NavLink>
          </li>
          <li>
            <NavLink to="/AreasDeAtuacao">ÁREAS DE ATUAÇÃO</NavLink>
          </li>
          <li>
            <NavLink to="/Projetos">PROJETOS</NavLink>
          </li>
          <li>
            <NavLink to="/Sobre">SOBRE</NavLink>
          </li>
          <li>
            <NavLink to="/TrabalheConosco">TRABALHE CONOSCO</NavLink>
          </li>
          <li>
            <NavLink to="/Contato">CONTATO</NavLink>
          </li>
        </ul>

        <NavLink to="/Contato">FALE CONOSCO</NavLink>
        <button></button>
      </nav>
    </header>
  );
}

export default Navbar;
