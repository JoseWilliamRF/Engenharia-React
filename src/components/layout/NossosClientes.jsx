import styles from './NossosClientes.module.css';
import { clientesData } from '../../data/clientesData';
import React, { useState, useEffect } from 'react';

// --- NOVO: Mini-componente que sabe contar sozinho ---
function Contador({ alvo }) {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    let atual = 0;
    // Pega o número alvo e divide por 50 passos para a animação ficar fluida
    const incremento = Math.ceil(alvo / 100);

    const timer = setInterval(() => {
      atual += incremento;
      if (atual >= alvo) {
        setNumero(alvo); // Trava no número exato do alvo
        clearInterval(timer); // Para o cronômetro
      } else {
        setNumero(atual);
      }
    }, 60); // Velocidade: 40 milissegundos por atualização

    // Limpeza de segurança caso o usuário saia da página antes de terminar
    return () => clearInterval(timer);
  }, [alvo]);

  // Retorna o número e adiciona o "+" no final para dar ideia de "mais de X"
  return <>{numero}+</>;
}
// -----

function NossosClientes() {
  const clientes = clientesData.map(({ id, src, alt }) => {
    return (
      <div
        key={id}
        className={styles.card}
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className={styles.card_content}>
          {/* Usamos o 'alt' provisoriamente como título. Você pode limpar os textos no seu arquivo clientesData.js depois */}
          <h3 className={styles.card_title}>{alt}</h3>
        </div>
      </div>
    );
  });

  const clientesCopia = clientesData.map(({ id, src, alt }) => {
    return (
      <div
        key={`${id}-copia`}
        className={styles.card}
        style={{ backgroundImage: `url(${src})` }}
        aria-hidden="true"
      >
        <div className={styles.card_content}>
          <h3 className={styles.card_title}>{alt}</h3>
        </div>
      </div>
    );
  });

  return (
    <section id="clientes" className={styles.clientes_container}>
      <div className={styles.section_header}>
        <h2 className={styles.section_toptitle}> Nossos Clientes</h2>
        <p className={styles.subtitle}>
          {' '}
          Acreditamos que cada cliente seja único
        </p>
      </div>
      <div className={styles.slider_container}>
        <div className={styles.slider_track}>
          {clientes}
          {clientesCopia}
        </div>
      </div>
      <div className={styles.stats_container}>
        <div className={styles.stat_item}>
          <h4 className={styles.stat_number}>
            {' '}
            <Contador alvo={150} />
          </h4>
          <p className={styles.stat_label}>Projetos Entregues</p>
        </div>
        <div className={styles.stat_item}>
          <h4 className={styles.stat_number}>
            {' '}
            <Contador alvo={50} />
          </h4>
          <p className={styles.stat_label}>Clientes Satisfeitos</p>
        </div>
        <div className={styles.stat_item}>
          <h4 className={styles.stat_number}>
            {' '}
            <Contador alvo={10} />
          </h4>
          <p className={styles.stat_label}>Anos de Mercado</p>
        </div>
      </div>
    </section>
  );
}

export default NossosClientes;
