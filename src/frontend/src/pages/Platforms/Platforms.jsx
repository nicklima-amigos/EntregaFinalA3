import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import { apiClient } from "../../services/apiClient";
import Spinner from "../../components/UI/Loading/Spinner";

export default function Platforms() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [platforms, setPlatforms] = useState([]);

  const getPlatforms = async () => {
    const response = await apiClient.get("/platforms");
    console.log(response);
    setPlatforms(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getPlatforms();
  }, []);

  const logout = () => {
    navigate(-1);
  };
  return (
    <div className="d-flex flex-column align-items-start h-100 w-100">
      <div className="d-flex align-items-center justify-content-between h-40 w-100 bg-warning">
        <h1 className="w-100">Nick Games</h1>
        <div className="container d-flex  justify-content-between h-40 w-100 ">
          <Button onClick={() => navigate("/platforms/create")}>
            Criar Plataforma
          </Button>
          <Button onClick={() => navigate("/categories/create")}>
            Criar Categoria
          </Button>
          <Button onClick={logout}>Deslogar</Button>
        </div>
      </div>

      <div className="container mt-5 mx-auto d-flex flex-column align-items-center justify-content-center w-100 ">
        {loading ? (
          <Spinner />
        ) : (
          platforms.map((platform) => (
            <div key={platform.id}>{platform.name}</div>
          ))
        )}
      </div>
    </div>
  );
}
