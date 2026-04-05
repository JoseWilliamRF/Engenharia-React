import styles from './Home.module.css';
import LinkButton from '../components/ui/LinkButton';
import SocialLinks from '../components/ui/SocialLinks';
import { NavLink, Link } from 'react-router-dom';
import backgroundVideo from '../assets/video/backgroundVideo.mp4';

function Home() {
  return (
    <main className={styles.main_content}>
      <section className={styles.home}>
        <video src={backgroundVideo} autoPlay loop muted playsInline>
          {' '}
        </video>
        <div className={styles.overlay}></div>
        <div className={styles.hero_social}>
          {' '}
          <SocialLinks customClass="hero" />
        </div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>
            Projetos Otimizados. <br />
            <span> Resultados Ampliados. </span>
          </h1>

          <h2 className={styles.hero_subtitle}>
            "Planejamos seu projeto agroindustrial do início ao fim com a
            metodologia BIM, garantindo precisão e eliminando incertezas."
          </h2>

          <div className={styles.hero_cta}>
            <LinkButton
              to="/AreasDeAtuacao"
              text={'ÁREAS DE ATUAÇÃO'}
              customClass={styles.esconder_mobile}
            />

            <LinkButton
              to="/NossosClientes"
              text={'NOSSOS CLIENTES'}
              customClass={styles.esconder_mobile}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
