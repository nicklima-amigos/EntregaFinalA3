import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../../services/apiClient";
import Modal from "../Modal/Modal";

export default function GradeForm({ game, cleanTitle }) {
  const [grade, setGrade] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [platformId, setPlatformId] = useState(null);

  useEffect(() => {
    const idFromURL = window.location.pathname.split("/").pop();
    setPlatformId(idFromURL);
  }, []);

  const handleGradeChange = (e) => {
    const value = e.target.value;
    if (value > 10) {
      setGrade(10);
      return;
    }
    if (value < 0) {
      setGrade(0);
      return;
    }
    setGrade(value);
  };

  const handleUpdate = async () => {
    setLoading(true);
    setError(false);
    try {
      await apiClient.put(`/grades`, {
        user_id: user.id,
        game_id: game.id,
        grade,
      });
      navigate(`/platforms/${platformId}`);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      id={cleanTitle}
      title={`Avaliando ${game.title}`}
      handleSubmit={handleUpdate}
      loading={loading}
    >
      <label htmlFor="grade">Nota: </label>
      <input
        type="number"
        max={10}
        min={0}
        value={grade}
        id="grade"
        onChange={handleGradeChange}
      />
      {error && <p className="text-danger">Erro ao atualiar a nota</p>}
    </Modal>
  );
}
