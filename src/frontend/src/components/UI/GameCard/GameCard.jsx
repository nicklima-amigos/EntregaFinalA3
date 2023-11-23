import styles from "./GameCard.module.css";
import GradeForm from "../GradeForm/GradeForm";
import { useEffect, useState, useCallback } from "react";
import { apiClient } from "../../../services/apiClient";
import useUser from "../../../hooks/useUser";
import CategoryForm from "../../../pages/CategoryForm/CategoryForm";
import CategoryPill from "../CategoryPill/CategoryPill";
import TrashIcon from "../../icons/Trash";

export default function GameCard({ game }) {
  const [isEditing, setIsEditing] = useState(false);
  const [categories, setCategories] = useState(game.categories);
  const [grade, setGrade] = useState();
  const user = useUser();
  const cleanTitle = game.title.split(" ").join("").split(":").join("");

  const fetchCategories = useCallback(async () => {
    if (!user || !game) {
      return;
    }
    console.log("updating categories...");
    const { data } = await apiClient.get(
      `/categories/game/${game.id}/user/${user.id}`
    );
    setCategories(data);
  }, [game, user]);

  useEffect(() => {
    const fetchGrade = async () => {
      if (!user) {
        return;
      }
      const { data } = await apiClient.get(
        `/grades/user/${user.id}/game/${game.id}`
      );
      setGrade(data.grade);
    };
    fetchGrade();
    fetchCategories();
  }, [isEditing, game, user, fetchCategories]);

  return (
    <div className={styles.singleGame} key={game.id}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <button className="btn btn-danger ms-auto">
            <TrashIcon />{" "}
          </button>
          <div className={styles.imageContainer}>{<img src="" alt="" />}</div>
          <h3 className="card-title">{game.title}</h3>
        </div>
        <div className={styles.cardBack}>
          {grade ? (
            <p>
              <span>Nota:</span> {grade}
            </p>
          ) : (
            <p>
              <span>Nota:</span> Não avaliado
            </p>
          )}
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
            <span>Categorias:</span>
            <div className={styles.categoriesContainer}>
              {categories?.map((category) => (
                <CategoryPill
                  key={category.id}
                  category={category}
                  fetchCategories={fetchCategories}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap mt-auto">
            <button
              className="btn mx-2"
              type="button"
              data-bs-toggle="modal"
              data-bs-target={`#${cleanTitle}`}
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Avaliar
            </button>
            <button
              className="btn mx-2"
              data-bs-toggle="modal"
              data-bs-target={`#${cleanTitle}category`}
            >
              Adicionar Categoria
            </button>
          </div>
        </div>
      </div>
      <CategoryForm
        game={game}
        setCategories={setCategories}
        cleanTitle={cleanTitle}
      />
      <GradeForm
        game={game}
        cleanTitle={cleanTitle}
        setIsEditing={setIsEditing}
      />
    </div>
  );
}
