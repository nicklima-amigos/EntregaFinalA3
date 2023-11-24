import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
import MainLogo from "../../icons/MainLogo";

export default function GameForm({ handleSubmit, loading, error, game }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState(0);
  const [developedBy, setDevelopedBy] = useState("");
  const [releaseDate, setReleaseDate] = useState();

  useEffect(() => {
    if (game) {
      setTitle(game.title);
      setGenre(game.genre);
      setPrice(game.price);
      setDevelopedBy(game.developed_by);
      setReleaseDate(game.release_date);
    }
  }, [game]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-start">
      <Button onClick={goBack}>Voltar</Button>
      <div className="mx-auto d-flex flex-column align-items-center justify-content-center">
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
          <Button
            onClick={() =>
              handleSubmit({
                title,
                genre,
                price,
                developed_by: developedBy,
                release_date: releaseDate,
              })
            }
            loading={loading}
          >
            Salvar
          </Button>
          {error && <p>algo deu errado</p>}
        </form>
      </div>
    </div>
  );
}
