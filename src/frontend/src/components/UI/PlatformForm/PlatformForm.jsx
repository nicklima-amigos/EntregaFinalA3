import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLogo from "../../icons/MainLogo";
import Button from "../Button/Button";
import FormField from "../FormField/FormField";

export default function PlatformForm({ handleSubmit, loading, platform }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    setName(platform?.name);
  }, [platform]);

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
            label="Nome"
            name="name"
            placeholder="Nome da plataforma"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button onClick={() => handleSubmit({ name })} loading={loading}>
            Salvar
          </Button>
        </form>
      </div>
    </div>
  );
}
