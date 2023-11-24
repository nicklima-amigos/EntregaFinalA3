import { useEffect, useState } from "react";
import Navbar from "../../components/UI/Navbar/Navbar";
import { apiClient } from "../../services/apiClient";
import styles from "../../components/shared/styles.module.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/UI/Loading/Spinner";

export default function Games() {
  const [games, setGames] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getGames = async () => {
    try {
      const response = await apiClient.get(`/games`);
      setGames(response.data);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteGame = async (id) => {
    try {
      await apiClient.delete(`/games/${id}`);
      getGames();
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={styles.tableHeader + " row mb-2"}>
          <div className="col">Título</div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        {games.map(({ title, id }) => {
          return (
            <div className={styles.tableRow + " row mb-2 border-bottom"} key={id}>
              <div className="col">{title}</div>
              <div className="col">
                <button
                  className="btn primary-btn"
                  onClick={() => navigate(`/games/${id}/edit`)}
                >
                  Editar
                </button>
              </div>
              <div className="col">
                <button
                  className="btn primary-btn"
                  onClick={() => handleDeleteGame(id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
