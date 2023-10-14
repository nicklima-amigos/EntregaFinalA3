import styles from "./Sidebar.module.css";

export default function Sidebar({
  onClose,
  platforms,
  onSelectPlatform,
  navigate,
}) {
  return (
    <div className={styles.sidebar} onMouseLeave={onClose}>
      <div className={styles.content}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClose}
          className={styles.icon}
        >
          <line x1="4" y1="4" x2="20" y2="20" stroke="black" strokeWidth="2" />
          <line x1="20" y1="4" x2="4" y2="20" stroke="black" strokeWidth="2" />
        </svg>
        <div>
          <ul className={styles.list}>
            <li onClick={() => navigate("/platforms/create")}>Criar Jogos</li>
            <li onClick={() => navigate("/categories/create")}>
              Criar Categoria
            </li>
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
