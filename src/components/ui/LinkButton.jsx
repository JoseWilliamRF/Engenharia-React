import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

function LinkButton({ to, text, customClass, onClick }) {
  // Verificamos se o link recebido é uma âncora (se começa com a hashtag)
  const isAnchor = to.startsWith('#');
  // Se for uma âncora, renderiza a tag <a> padrão do HTML para a tela rolar
  if (isAnchor) {
    return (
      <a
        href={to}
        className={`${styles.btn_default} ${customClass || ''}`}
        onClick={onClick}
      >
        {text}
      </a>
    );
  }

  // Se NÃO for âncora, renderiza o Link do React Router para trocar de página
  return (
    <Link
      to={to}
      className={`${styles.btn_default} ${customClass || ''}`}
      onClick={onClick}
    >
      {text}{' '}
    </Link>
  );
}

export default LinkButton;
// Ele vai receber propriedades (props) para sabermos para qual link ele aponta (to),
// qual texto ele exibe (text)
// e se ele precisa de alguma classe extra do elemento pai (customClass).
