import { useState } from "react";
import Modal from "../Modal/Modal";

export default function GradeForm({ game, cleanTitle }) {
  const [grade, setGrade] = useState(0);

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

  return (
    <Modal id={cleanTitle} title={`Avaliando ${game.title}`}>
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
