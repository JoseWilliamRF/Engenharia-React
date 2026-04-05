import styles from './SocialLinks.module.css';

function SocialLinks({ customClass }) {
  const layoutClass = customClass === 'hero' ? styles.hero : styles.footer;

  return (
    <div className={`${styles.social_media} ${layoutClass}`}>
      <a
        href="#"
        className={styles.social_icon}
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        href="#"
        className={styles.social_icon}
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a
        href="#"
        className={styles.social_icon}
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
    </div>
  );
}

export default SocialLinks;
