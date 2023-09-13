import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";

export default function Platforms() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const handleCreate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(`Plataforma criada: ${name}`);
    }, 2000);
  };
  const logout = () => {
    navigate(-1);
  };
  return (
    <div className="container  d-flex flex-column align-items-start h-100 w-100">
      <div className="container  d-flex align-items-center justify-content-between h-40 w-100 bg-warning">
        <h1 className="  w-100 ">Nick Games</h1>
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

      <div className="container mt-5 mx-auto d-flex flex-column align-items-center justify-content-center h-100 w-100 "></div>
    </div>
  );
}
