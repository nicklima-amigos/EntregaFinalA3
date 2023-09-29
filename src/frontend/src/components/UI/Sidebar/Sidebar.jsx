import styles from "./Sidebar.module.css";
import CloseIcon from "../../../assets/close.svg";
//import Button from "../Button/Button";

export default function Sidebar({ onClose, platforms, onSelectPlatform }) {
  return (
    <div className={styles.sidebar} onMouseLeave={onClose}>
      <div className={styles.content}>
        <img onClick={onClose} className={styles.icon} src={CloseIcon} />
        {/* <Button className="close-button" onClick={onClose}>
          Fechar
  </Button>*/}
        <h2>Plataformas Cadastradas</h2>
        <ul>
          {platforms.map((platform) => (
            <li key={platform.id} onClick={() => onSelectPlatform(platform.id)}>
              {platform.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
