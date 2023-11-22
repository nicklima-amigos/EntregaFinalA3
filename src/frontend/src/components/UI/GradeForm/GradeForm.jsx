import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../../services/apiClient";
import Modal from "../Modal/Modal";

export default function GradeForm({ game, cleanTitle }) {
  const [grade, setGrade] = useState(0);
  const [loading, setLoading] = useState(false);
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
    try {
      await apiClient.put(`/grades/${user.id}`, {
        grade,
      });
      setLoading(false);
      navigate(`/platforms/${platformId}`);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao atualizar a rota: ", error);
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
    </Modal>
  );
}
