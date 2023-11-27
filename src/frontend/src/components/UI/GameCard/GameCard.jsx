import styles from "./GameCard.module.css";
import GradeForm from "../GradeForm/GradeForm";
import { useEffect, useState, useCallback } from "react";
import { apiClient } from "../../../services/apiClient";
import useUser from "../../../hooks/useUser";
import CategoryForm from "../../../pages/CategoryForm/CategoryForm";
import CategoryPill from "../CategoryPill/CategoryPill";
import TrashIcon from "../../icons/Trash";
import { useParams } from "react-router-dom";

export default function GameCard({ game, getPlatformGames }) {
  const [isEditing, setIsEditing] = useState(false);
  const [categories, setCategories] = useState(game.categories);
  const [isFlipped, setIsFlipped] = useState(false);
  const [grade, setGrade] = useState();
  const user = useUser();
  const { platformId } = useParams();
  const cleanTitle = game.title.split(" ").join("").split(":").join("");

  const fetchCategories = useCallback(async () => {
    if (!user || !game) {
      return;
    }
    const { data } = await apiClient.get(
      `/categories/game/${game.id}/user/${user.id}`
    );
    setCategories(data);
  }, [game, user]);

  const handleDeleteGame = async (e) => {
    e.stopPropagation();
    if (!user || !game) {
      return;
    }
    await apiClient.delete(`/games/${game.id}/platform/${platformId}`);
    getPlatformGames();
  };

  useEffect(() => {
    const fetchGrade = async () => {
      if (!user) {
        return;
      }
      const { data } = await apiClient.get(
        `/grades/user/${user.id}/game/${game.id}`
      );
      setGrade(data?.grade);
    };

    fetchGrade();
    fetchCategories();
  }, [isEditing, game, user, fetchCategories]);

  return (
    <div
      className={`${styles.singleGame} ${isFlipped ? styles.flipped : ""}`}
      key={game.id}
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
    >
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <div className={styles.imageContainer}>
            {game.image && <img src={game.image} alt="" />}
          </div>
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
              className={styles.editBtn + " btn mx-2"}
              type="button"
              data-bs-toggle="modal"
              data-bs-target={`#${cleanTitle}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
            >
              Avaliar
            </button>
            <button
              className={styles.editBtn + " btn mx-2"}
              data-bs-toggle="modal"
              data-bs-target={`#${cleanTitle}category`}
              onClick={(e) => e.stopPropagation()}
            >
              Adicionar Categoria
            </button>
            <button
              className={styles.deleteBtn + " btn btn-danger ms-auto"}
              onClick={handleDeleteGame}
            >
              <TrashIcon />{" "}
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
