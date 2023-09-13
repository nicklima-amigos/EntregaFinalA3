import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../../components/UI/FormField/FormField";
import Button from "../../components/UI/Button/Button";
import MainLogo from "../../components/icons/MainLogo";

export default function CategoryForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const handleCreate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(`categoria criada: Category: ${category}`);
    }, 2000);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-start h-100 w-100 ">
      <Button onClick={goBack}>Voltar</Button>
      <div className="container mt-5 mx-auto d-flex flex-column align-items-center justify-content-center h-100 w-100 ">
        <MainLogo />
        <form className="col-4 mx-auto d-flex align-content-center flex-wrap flex-column">
          <FormField
            type="text"
            label="Categoria"
            name="category"
            placeholder="categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button onClick={handleCreate} loading={loading}>
            Criar
          </Button>
        </form>
      </div>
    </div>
  );
}
