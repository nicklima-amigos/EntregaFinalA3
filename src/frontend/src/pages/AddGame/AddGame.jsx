import useGames from "../../hooks/useGames";
import { useParams } from "react-router-dom";
import { apiClient } from "../../services/apiClient";
import Navbar from "../../components/UI/Navbar/Navbar";
import styles from "../../components/shared/styles.module.css";
import { useEffect, useState } from "react";
import useSinglePlatform from "../../hooks/useSinglePlatform";
import Spinner from "../../components/UI/Loading/Spinner";

export default function AddGame() {
  const { games } = useGames();
  const { platformId } = useParams();
  const { platform, loading, getPlatform } = useSinglePlatform(platformId);

  const [remainingGames, setRemainingGames] = useState([]);

  const handleAddGame = async (gameId) => {
    await apiClient.post(`/games/${gameId}/platform/${platformId}`);
    getPlatform();
  };

  useEffect(() => {
    if (!games || !platform) return;
    const remainingGames = games.filter(
      (game) =>
        !platform.games.some((platformGame) => platformGame.id === game.id)
    );

    setRemainingGames(remainingGames);
  }, [games, platform]);

  if (loading || !games) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="mb-4">Adicionar jogo: {platform.name}</h2>

        <div className={styles.tableHeader + " row mb-2"}>
          <div className="col">Título</div>
          <div className="col"></div>
        </div>
        {remainingGames.map(({ title, id }) => {
          return (
            <div
              className={styles.tableRow + " row mb-2 border-bottom"}
              key={id}
            >
              <div className="col">{title}</div>
              <div className="col">
                <button
                  className="btn primary-btn"
                  onClick={() => handleAddGame(id)}
                >
                  Adicionar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
