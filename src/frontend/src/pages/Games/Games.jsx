import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Loading/Spinner";
import Navbar from "../../components/UI/Navbar/Navbar";
import styles from "../../components/shared/styles.module.css";
import { apiClient } from "../../services/apiClient";
import { toast } from "react-toastify";

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
      toast.success("Jogo excluído com sucesso!");
    } catch (error) {
      console.error("error", error);
      toast.error("Erro ao excluir jogo!");
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
        <Button className="mt-4" onClick={() => navigate(-1)}>
          Voltar
        </Button>
        <h2 className="mb-4 text-center">Jogos</h2>
        <div className={styles.tableHeader + " row mb-2"}>
          <div className="col">Título</div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        {games.map(({ title, id }) => {
          return (
            <div
              className={styles.tableRow + " row mb-2 border-bottom"}
              key={id}
            >
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
