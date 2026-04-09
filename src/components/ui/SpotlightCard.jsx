import React, { useRef, useState } from 'react';
import styles from './SpotlightCard.module.css';

function SpotlightCard({ children }) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = e => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.card_wrapper}
      style={{
        '--mouse-x': `${position.x}px`,
        '--mouse-y': `${position.y}px`,
        /* Oculta o brilho se o mouse não estiver no card */
        '--opacity': isHovered ? 1 : 0,
      }}
    >
      <div className={styles.card_border_glow}></div>
      <div className={styles.card_content}>{children}</div>
    </div>
  );
}

export default SpotlightCard;
