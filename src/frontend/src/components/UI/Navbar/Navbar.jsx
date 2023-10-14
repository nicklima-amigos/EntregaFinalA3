import styles from "./Platforms.module.css";
import SidebarIcon from "../../assets/sidebar.svg";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export default function Navbar() {
  const [sideBarModal, setSideBarModal] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleSideBarModal = () => {
    setSideBarModal((prevState) => !prevState);
  };
  return (
    <>
      {sideBarModal && (
        <Sidebar
          isOpen={sideBarModal}
          platforms={platforms}
          navigate={navigate}
          handleLogout={logout}
          onSelectPlatform={getGamesByPlatformId}
          onClose={handleSideBarModal}
        />
      )}
      <div className="d-flex align-items-center justify-content-between h-40 col-12 bg-warning">
        <img
          onClick={handleSideBarModal}
          className={styles.icon + " col-1"}
          src={SidebarIcon}
        />
        <h1 className="col-10 col-md-3" onClick={() => navigate("/platforms")}>
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
