import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../../components/UI/FormField/FormField";
import Button from "../../components/UI/Button/Button";
import MainLogo from "../../components/icons/MainLogo";

export default function GameForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState(0);
  const [developedBy, setDevelopedBy] = useState("");
  const [releaseDate, setReleaseDate] = useState();

  const handleCreate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(
        `game criado: Title: ${title} genre: ${genre} price: ${price} developed_by: ${developedBy} release_date: ${releaseDate}`
      );
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
            label="Título"
            name="title"
            placeholder="Título do jogo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormField
            type="text"
            label="Gênero"
            name="genre"
            placeholder="Gênero do jogo"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <FormField
            type="number"
            label="Preço"
            name="price"
            pattern="^\d+(\.\d{2})?$"
            placeholder="Preço do jogo"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <FormField
            type="text"
            label="Desenvolvido por"
            name="developedBy"
            placeholder="Desenvolvido por"
            value={developedBy}
            onChange={(e) => setDevelopedBy(e.target.value)}
          />
          <FormField
            type="date"
            label="Lançado em"
            name="releaseDate"
            placeholder="Lançado em"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
          <Button onClick={handleCreate} loading={loading}>
            Criar
          </Button>
        </form>
      </div>
    </div>
  );
}
