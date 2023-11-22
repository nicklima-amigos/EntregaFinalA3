import styles from "./GameCard.module.css";
import GradeForm from "../GradeForm/GradeForm";
import { useState } from "react";

export default function GameCard({ game }) {
  const [isEditing, setIsEditing] = useState(false);
  const cleanTitle = game.title.split(" ").join("").split(":").join("");

  return (
    <div className={styles.singleGame} key={game.id}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <div className={styles.imageContainer}>
            {game.image && <img src="" alt="" />}
          </div>
          <h3 className="card-title">{game.title}</h3>
        </div>
        <div className={styles.cardBack}>
          {game.grade ? <p>Nota: {game.grade}</p> : <p>Não avaliado</p>}
          <p>
            <span>Gênero:</span> {game.genre}
          </p>
          <p>
            <span>Preço:</span> {game.price}
          </p>
          <p>
            <span>Desenvolvido por:</span> {game.developed_by}
          </p>
          <p>
            <span>Data de lançamento:</span> {game.release_date}
          </p>
          <div>
            <p>
              <span>Categorias:</span>
              {/* {game.categories?.map((category) => (
                <></>
              ))} */}
            </p>
          </div>
          <div className="flex flex-wrap mt-auto">
            <button
              className="btn mx-2"
              type="button"
              data-bs-toggle="modal"
              data-bs-target={`#${cleanTitle}`}
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              Avaliar
            </button>
            <button className="btn mx-2">Adicionar Categoria</button>
          </div>
        </div>
      </div>
      <GradeForm game={game} cleanTitle={cleanTitle} />
    </div>
  );
}
