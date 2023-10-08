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
  const [platformName, setPlatformName] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [sideBarModal, setSideBarModal] = useState(false);
  const getPlatforms = async () => {
    try {
      const response = await apiClient.get("/platforms");
      setPlatforms(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  const getGamesByPlatformId = async (platform_id) => {
    try {
      const response = await apiClient.get(`/platforms/${platform_id}`);
      setPlatformName(response.data.name);
      setGames(response.data.games);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
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
    <div className={`d-flex align-items-start h-100 col-12 `}>
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
      <div className="d-flex flex-column align-items-start col-12">
        <div className="d-flex  align-items-center justify-content-between h-40 col-12 bg-warning">
          <img
            onClick={handleSideBarModal}
            className={styles.icon + " col-1"}
            src={SidebarIcon}
          />
          <h1
            className="col-10 col-md-3"
            onClick={() => navigate("/platforms")}
          >
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
        <div className=" d-flex align-items-center col-12 px-3">
          <Button onClick={() => navigate("/games/create")}>Criar Jogo</Button>
          <h2 className="px-3">{platformName}</h2>
        </div>
        <div className="container mt-5 d-flex flex-wrap text-center">
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
