import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { apiClient } from "../../../services/apiClient";

export default function GradeForm({ game, cleanTitle }) {
  const [grade, setGrade] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

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

  const handleCreate = async () => {
    setLoading(true);
    await apiClient.put("/grades", {
      grade,
      user_Id: user.id,
      game_Id: game.id,
    });
    setLoading(false);
    navigate("/platforms");
  };

  return (
    <div
      className="modal !z-n1"
      id={cleanTitle}
      tabIndex="-1"
      aria-labelledby={cleanTitle}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={cleanTitle}>
              Avaliar {game.title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex justify-content-around">
            <label htmlFor="grade">Nota: </label>
            <input
              type="number"
              max={10}
              min={0}
              value={grade}
              id="grade"
              onChange={handleGradeChange}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
            <Button onClick={handleCreate} loading={loading}>
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
