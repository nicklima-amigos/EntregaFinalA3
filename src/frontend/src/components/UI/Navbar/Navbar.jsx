import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export default function Navbar({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <div
        className={
          "d-flex align-items-center justify-content-between h-40 col-12 " +
          styles.navBar
        }
      >
        {children}
        <h1 className="col-10 col-md-3" onClick={() => navigate("/")}>
          Nick Games
        </h1>
        <div className="container d-none d-md-flex pe-5 justify-content-evenly h-40 col-7">
          <Button onClick={() => navigate("/platforms/create")}>
            Criar Plataforma
          </Button>
          <Button onClick={() => navigate("/categories/create")}>
            Criar Categoria
          </Button>
          <Button onClick={logout}>Deslogar</Button>
        </div>
      </div>
    </>
  );
}
