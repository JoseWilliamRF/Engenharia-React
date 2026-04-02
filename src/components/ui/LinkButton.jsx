import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

function LinkButton({ to, text, customClass }) {
  return (
    <Link to={to} className={`${styles.btn_default} ${customClass || ''}`}>
      {text}{' '}
    </Link>
  );
}

export default LinkButton;
// Ele vai receber propriedades (props) para sabermos para qual link ele aponta (to),
// qual texto ele exibe (text)
// e se ele precisa de alguma classe extra do elemento pai (customClass).
