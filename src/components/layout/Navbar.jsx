import styles from './navbar.module.css';
import logo from '../../assets/images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/">
          <img className={styles.logo_img} src={logo} alt="lOGO" />{' '}
        </Link>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              ÍNICIO{' '}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AreasDeAtuacao"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              ÁREAS DE ATUAÇÃO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projetos"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              PROJETOS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Sobre"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              SOBRE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/TrabalheConosco"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              TRABALHE CONOSCO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contato"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              CONTATO
            </NavLink>
          </li>
        </ul>

        <Link to="/Contato">FALE CONOSCO</Link>
        <button></button>
      </nav>
    </header>
  );
}

export default Navbar;
