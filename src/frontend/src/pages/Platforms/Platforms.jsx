import { useEffect, useState } from "react";
import styles from "./Platforms.module.css";
import SidebarIcon from "../../assets/sidebar.svg";
import { useNavigate } from "react-router-dom";
import CardGame from "../../components/UI/CardGame/CardGame";
import Button from "../../components/UI/Button/Button";
import { apiClient } from "../../services/apiClient";
import Spinner from "../../components/UI/Loading/Spinner";
import Sidebar from "../../components/UI/Sidebar/Sidebar";

export default function Platforms() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [sideBarModal, setSideBarModal] = useState(false);
  const getPlatforms = async () => {
    const response = await apiClient.get("/platforms");

    setPlatforms(response.data);
    setLoading(false);
  };
  const getGamesByPlatformId = async (platform_id) => {
    const response = await apiClient.get(`/platforms/${platform_id}`);

    setGames(response.data.games);
    setLoading(false);
  };

  const handleSideBarModal = () => {
    setSideBarModal((prevState) => !prevState);
  };

  useEffect(() => {
    getPlatforms();
    getGamesByPlatformId(1);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className={`d-flex align-items-start h-100 w-100 `}>
      {sideBarModal && (
        <Sidebar
          isOpen={sideBarModal}
          platforms={platforms}
          onSelectPlatform={getGamesByPlatformId}
          onClose={handleSideBarModal}
        />
      )}
      <div className="d-flex flex-column align-items-start h-100 w-100">
        <div className="d-flex align-items-center justify-content-between h-40 w-100 bg-warning">
          <img
            // onClick={handleSideBarModal}
            onMouseEnter={handleSideBarModal}
            className={styles.icon}
            src={SidebarIcon}
          />
          <h1 className="w-100" onClick={() => navigate("/platforms")}>
            Nick Games
          </h1>
          <div className="container d-flex  justify-content-between h-40 w-100 ">
            <Button onClick={() => navigate("/platforms/create")}>
              Criar Plataforma
            </Button>
            <Button onClick={() => navigate("/categories/create")}>
              Criar Categoria
            </Button>
            <Button onClick={logout}>Deslogar</Button>
          </div>
        </div>

        <div className="container mt-5 d-flex flex-wrap">
          {loading ? (
            <Spinner />
          ) : (
            games.map((game) => <CardGame key={game.id} game={game} />)
          )}
        </div>
      </div>
    </div>
  );
}
