import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar() {
  const navigate = useNavigate();
  const [sideBarModal, setSideBarModal] = useState(false);

  const handleSideBarModal = () => {
    setSideBarModal((prevState) => !prevState);
  };

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
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleSideBarModal}
          className={styles.icon + " col-1 d-md-none"}
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
        {sideBarModal && (
          <Sidebar navigate={navigate} onClose={handleSideBarModal} />
        )}
        <h1 className="col-10 col-md-3 ps-4" onClick={() => navigate("/")}>
          Nick Games
        </h1>
        <div className="container d-none d-md-flex pe-5 justify-content-evenly h-40 col-7">
          <Button onClick={() => navigate("/platforms")}>Plataformas</Button>
          <Button onClick={() => navigate("/platforms/create")}>
            Criar Plataforma
          </Button>
          <Button onClick={logout}>Deslogar</Button>
        </div>
      </div>
    </>
  );
}
