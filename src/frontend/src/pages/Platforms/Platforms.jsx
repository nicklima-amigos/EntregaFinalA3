import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import CardGame from "../../components/UI/CardGame/CardGame.jsx";
import Button from "../../components/UI/Button/Button.jsx";
import { apiClient } from "../../services/apiClient.js";
import Spinner from "../../components/UI/Loading/Spinner.jsx";
import Navbar from "../../components/UI/Navbar/Navbar.jsx";
import Sidebar from "../../components/UI/Sidebar/Sidebar.jsx";
import styles from "./Platforms.module.css";

export default function Platforms() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [platformName, setPlatformName] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [sideBarModal, setSideBarModal] = useState(false);

  const handleSideBarModal = () => {
    setSideBarModal((prevState) => !prevState);
  };
  const getPlatforms = async () => {
    try {
      const response = await apiClient.get(`/platforms`);
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

  useEffect(() => {
    getPlatforms();
    getGamesByPlatformId(1);
  }, []);

  return (
    <div className={`d-flex align-items-start h-100 col-12 `}>
      <div className="d-flex flex-column align-items-start col-12">
        {sideBarModal && (
          <Sidebar
            isOpen={sideBarModal}
            platforms={platforms}
            navigate={navigate}
            onSelectPlatform={getGamesByPlatformId}
            onClose={handleSideBarModal}
          />
        )}
        <Navbar>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleSideBarModal}
            className={styles.icon + " col-1"}
          >
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
        </Navbar>
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
