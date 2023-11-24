import GameForm from "../../components/UI/GameForm/GameForm";
import { apiClient } from "../../services/apiClient";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UpdateGame() {
  const navigate = useNavigate();
  const [game, setGame] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { gameId } = useParams();

  const handleUpdate = async (game) => {
    setError(false);
    setLoading(true);
    try {
      await apiClient.put(`/games/${gameId}`, game);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
      navigate("/games");
    }
  };

  useEffect(() => {
    const fetchGame = async () => {
      setError(false);
      setLoading(true);

      try {
        const { data } = await apiClient.get(`/games/${gameId}`);
        setGame(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [gameId]);

  return (
    <GameForm
      loading={loading}
      error={error}
      handleSubmit={handleUpdate}
      game={game}
    />
  );
}
