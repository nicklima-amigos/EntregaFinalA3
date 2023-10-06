import styles from "./Sidebar.module.css";
import CloseIcon from "../../../assets/close.svg";

export default function Sidebar({
  onClose,
  platforms,
  onSelectPlatform,
  handleLogout,
  navigate,
}) {
  return (
    <div className={styles.sidebar} onMouseLeave={onClose}>
      <div className={styles.content}>
        <img onClick={onClose} className={styles.icon} src={CloseIcon} />
        <div>
          <ul className={styles.list}>
            <li onClick={() => navigate("/platforms/create")}>Criar Jogos</li>
            <li onClick={() => navigate("/categories/create")}>
              Criar Categoria
            </li>
            <li onClick={handleLogout}>Deslogar</li>
          </ul>
        </div>
        <h2 className="text-center">Plataformas Cadastradas</h2>
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
