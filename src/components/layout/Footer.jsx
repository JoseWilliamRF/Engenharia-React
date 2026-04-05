import styles from './Footer.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import SocialLinks from '../ui/SocialLinks';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <Link to="/">
          <img
            className={styles.footer_logo}
            src={logo}
            alt="Logo da Empresa"
          />{' '}
        </Link>

        <div className={styles.footer_info}>
          <h3>ONDE ESTAMOS</h3>
          <p>"Av. Afonso Pena, 1234 - Campo Grande, MS"</p>
          <div className={styles.map_container}>
            <iframe
              title="Mapa de Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.186541006018!2d-54.592287528335625!3d-20.45753011305348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e8954ac0b10d%3A0x7149aba0cb5688b8!2sShopping%20Campo%20Grande!5e0!3m2!1spt-BR!2sbr!4v1775326399253!5m2!1spt-BR!2sbr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <SocialLinks />
      </div>
      <div className={styles.copy_right}>
        <p>
          &copy; {new Date().getFullYear()} Tempindustra. Todos os direitos
          reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
