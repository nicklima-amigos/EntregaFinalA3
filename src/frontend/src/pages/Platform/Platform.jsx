import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/UI/Button/Button.jsx";
import GameCard from "../../components/UI/GameCard/GameCard.jsx";
import Spinner from "../../components/UI/Loading/Spinner.jsx";
import Navbar from "../../components/UI/Navbar/Navbar.jsx";
import { apiClient } from "../../services/apiClient.js";

export default function Platform() {
  const navigate = useNavigate();
  const { platformId } = useParams();
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [platformName, setPlatformName] = useState("");

  const getPlatformGames = useCallback(async () => {
    try {
      const response = await apiClient.get(`/platforms/${platformId}`);
      setPlatformName(response.data.name);
      setGames(response.data.games.sort((a, b) => b.id - a.id));
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }, [platformId]);

  useEffect(() => {
    getPlatformGames();
  }, [getPlatformGames]);

  return (
    <div className={`d-flex align-items-start h-100 col-12 `}>
      <div className="d-flex flex-column align-items-start col-12">
        <Navbar />
        <div className=" d-flex align-items-center col-12 px-3">
          <Button
            onClick={() => navigate(`/platforms/${platformId}/add-games`)}
          >
            Adicionar Jogo
          </Button>
        </div>
        <h2 className="px-3 mt-5 mx-auto">{platformName}</h2>
        <div className="container mt-5 d-flex flex-wrap text-center justify-content-around">
          {loading ? (
            <Spinner />
          ) : (
            games.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                getPlatformGames={getPlatformGames}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
