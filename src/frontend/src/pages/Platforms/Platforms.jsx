import { useEffect, useState } from "react";
import { apiClient } from "../../services/apiClient";
import styles from "../../components/shared/styles.module.css";
import Navbar from "../../components/UI/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/UI/Loading/Spinner";

export default function Platforms() {
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getPlatforms = async () => {
    try {
      const response = await apiClient.get(`/platforms`);
      setPlatforms(response.data);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePlatform = async (id) => {
    try {
      await apiClient.delete(`/platforms/${id}`);
      getPlatforms();
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getPlatforms();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={styles.tableHeader + " row mb-2"}>
          <div className="col">Nome</div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        {platforms.map(({ name, id }) => {
          return (
            <div className={styles.tableRow + " row mb-2"} key={id}>
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
