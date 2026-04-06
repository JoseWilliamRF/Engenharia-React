import styles from './AreasAtuacaoHome.module.css';
import { Link } from 'react-router-dom';
import imgArmazenagem from '../../assets/cards/silo1.jpg';
import imgAlimenticia from '../../assets/cards/silo2.jpg';
import imgPortos from '../../assets/cards/intermodal.jpg';

function AreasAtuacaoHome() {
  return (
    <section id="areas-atuacao" className={styles.areas_container}>
      <div className={styles.section_header}>
        <h2 className={styles.top_title}>Áreas de Atuação</h2>
        <p className={styles.subtitle}>
          Soluções integradas do campo ao porto{' '}
        </p>
        <p className={styles.description}>
          {' '}
          Desde a armazenagem segura de grãos até a logística eficiente em
          portos, nossa metodologia BIM integra e otimiza cada etapa do seu
          projeto{' '}
        </p>
      </div>

      <div className={styles.cards_grid}>
        <div
          className={styles.card}
          style={{ backgroundImage: `url(${imgArmazenagem})` }}
        >
          <Link
            to="/AreasDeAtuacao#armazenagem"
            className={styles.card_content}
          >
            <h3 className={styles.card_title}>Projetos de Armazenagem</h3>
            <p className={styles.card_subtitle}>
              Projetos inteligentes para silos e armazéns industriais. <br />
              Otimizamos seu fluxo operacional e maximizamos sua capacidade de
              estocagem com segurança.
            </p>
          </Link>
        </div>
        <div
          className={styles.card}
          style={{ backgroundImage: `url(${imgAlimenticia})` }}
        >
          <Link
            to="/AreasDeAtuacao#alimenticia"
            className={styles.card_content}
          >
            <h3 className={styles.card_title}>
              Projetos para Indústria alimentícia
            </h3>
            <p className={styles.card_subtitle}>
              Projetos integrados para a indústria alimentícia. <br />
              Nossa engenharia otimiza todo o fluxo, da recepção e armazenagem
              da matéria-prima até o processamento e a expedição final.
            </p>
          </Link>
        </div>

        <div
          className={styles.card}
          style={{ backgroundImage: `url(${imgPortos})` }}
        >
          <Link
            to="/AreasDeAtuacao#intermodais"
            className={styles.card_content}
          >
            <h3 className={styles.card_title}>
              Projetos para portos e terminais intermodais
            </h3>
            <p className={styles.card_subtitle}>
              Projetos portuários e terminais intermodais do zero. <br /> Nossa
              engenharia planeja cada detalhe, dos pátios e balanças aos píeres
              e silos, para garantir a máxima eficiência logística.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AreasAtuacaoHome;
