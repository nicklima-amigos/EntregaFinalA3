import styles from "./Sidebar.module.css";
//import Button from "../Button/Button";

export default function Sidebar({
  isOpen,
  onClose,
  platforms,
  onSelectPlatform,
}) {
  return (
    <div className={styles.sidebar} onMouseLeave={onClose}>
      <div className={styles.content}>
        <button className={styles.closeButton} onClick={onClose}>
          Fechar
        </button>
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
