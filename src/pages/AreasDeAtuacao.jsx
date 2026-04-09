import SpotlightCard from '../components/ui/SpotlightCard';
import { areasData } from '../data/areasData';
import styles from './AreasDeAtuacao.module.css';

function AreasDeAtuacao() {
  return (
    <main className={styles.areas_main}>
      <h2 className={styles.main_title}>Áreas de Atuação</h2>

      {areasData.map(area => (
        <section key={area.id} className={styles.area_section}>
          <div className={styles.area_titulo}>
            <SpotlightCard>
              <div className={styles.title_wrapper}>
                <h3>{area.titulo}</h3>
              </div>
              <ul>
                {area.itens.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </SpotlightCard>
          </div>
          <div className={styles.area_images}>
            {area.imagens.map((imagemUrl, index) => (
              <SpotlightCard key={index}>
                <img
                  src={imagemUrl}
                  alt={`${area.titulo} ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    borderRadius: '15px',
                  }}
                />
              </SpotlightCard>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default AreasDeAtuacao;
