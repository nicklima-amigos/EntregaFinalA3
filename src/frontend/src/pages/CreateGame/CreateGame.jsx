import GameForm from "../../components/UI/GameForm/GameForm";
import { apiClient } from "../../services/apiClient";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateGame() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleCreate = async (game) => {
    setError(false);
    setLoading(true);
    try {
      await apiClient.post("/games", game);
      navigate("/games");
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GameForm handleSubmit={handleCreate} loading={loading} error={error} />
  );
}
