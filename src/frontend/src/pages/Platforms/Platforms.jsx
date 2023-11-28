import { useEffect } from "react";
import { apiClient } from "../../services/apiClient";
import styles from "../../components/shared/styles.module.css";
import Navbar from "../../components/UI/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/UI/Loading/Spinner";
import usePlatforms from "../../hooks/usePlatforms";
import Button from "../../components/UI/Button/Button";
import { toast } from "react-toastify";

export default function Platforms() {
  const { platforms, loading, getPlatforms } = usePlatforms();
  const navigate = useNavigate();

  const handleDeletePlatform = async (id) => {
    try {
      await apiClient.delete(`/platforms/${id}`);
      getPlatforms();
      toast.success("Plataforma excluída com sucesso!");
    } catch (error) {
      console.error("error", error);
      toast.error("Erro ao excluir plataforma!");
    }
  };

  useEffect(() => {
    getPlatforms();
  }, [getPlatforms]);

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
        <h2 className="mb-4 text-center">Plataformas</h2>
        <div className={styles.tableHeader + " row mb-2"}>
          <div className="col">Nome</div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        {platforms.map(({ name, id }) => {
          return (
            <div
              className={styles.tableRow + " row mb-2 border-bottom"}
              key={id}
            >
              <div
                className="col pointer"
                onClick={() => navigate(`/platforms/${id}`)}
              >
                <u>{name}</u>
              </div>
              <div className="col">
                <button
                  className="btn primary-btn"
                  onClick={() => navigate(`/platforms/${id}/edit`)}
                >
                  Editar
                </button>
              </div>
              <div className="col">
                <button
                  className="btn primary-btn"
                  onClick={() => handleDeletePlatform(id)}
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
