import styles from './navbar.module.css';
import logo from '../../assets/images/logo.png';
import LinkButton from '../ui/LinkButton';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  // 2. Criamos o estado: menuAberto começa como 'false' (fechado)
  const [menuAberto, setMenuAberto] = useState(false);
  // 3. Função para inverter o estado (abrir/fechar)
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/">
          <img className={styles.logo_img} src={logo} alt="lOGO" />{' '}
        </Link>
        <ul
          className={`${styles.nav_list} ${menuAberto ? styles.menuAberto : ''}`}
        >
          <li>
            <NavLink
              onClick={() => setMenuAberto(false)}
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
              onClick={() => setMenuAberto(false)}
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
              onClick={() => setMenuAberto(false)}
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
              onClick={() => setMenuAberto(false)}
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
              onClick={() => setMenuAberto(false)}
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
              onClick={() => setMenuAberto(false)}
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

        <LinkButton
          onClick={() => setMenuAberto(false)}
          to="/Contato"
          text={'FALE CONOSCO'}
          customClass={styles.esconder_mobile}
        />
        <button className={styles.mobile_btn} onClick={toggleMenu}>
          <i
            className={menuAberto ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}
          ></i>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
