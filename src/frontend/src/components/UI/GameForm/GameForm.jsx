import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLogo from "../../icons/MainLogo";
import Button from "../Button/Button";
import FormField from "../FormField/FormField";

export default function GameForm({
  handleSubmit,
  loading,
  error,
  game,
  gamePlatforms,
}) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [genre, setGenre] = useState("");
  const [genreError, setGenreError] = useState("");
  const [price, setPrice] = useState(0);
  const [priceError, setPriceError] = useState("");
  const [developedBy, setDevelopedBy] = useState("");
  const [developedByError, setDevelopedByError] = useState("");
  const [releaseDate, setReleaseDate] = useState();

  const formIsValid = () => {
    const titleIsValid = title.length > 0;
    const genreIsValid = genre.length > 0;
    const priceIsValid = price >= 0;
    const developedByIsValid = developedBy.length > 0;

    if (!titleIsValid) {
      setTitleError("Título é obrigatório");
      return false;
    }
    if (!genreIsValid) {
      setGenreError("Gênero é obrigatório");
      return false;
    }
    if (!priceIsValid) {
      setPriceError("Preço deve ser maior ou igual a 0");
      return false;
    }
    if (!developedByIsValid) {
      setDevelopedByError("Desenvolvedora é obrigatório");
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (game) {
      setTitle(game.title);
      setGenre(game.genre);
      setPrice(game.price);
      setDevelopedBy(game.developed_by);
      setReleaseDate(game.release_date);
    }
  }, [game, gamePlatforms]);

  return (
    <div className="container mt-5 d-flex flex-column align-items-start">
      <Button onClick={() => navigate(-1)}>Voltar</Button>
      <div className="mx-auto d-flex flex-column align-items-center justify-content-center">
        <MainLogo />
        <form className="mx-auto d-flex align-content-center flex-wrap flex-column">
          <FormField
            type="text"
            label="Título"
            name="title"
            placeholder="Título do jogo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fieldError={titleError}
          />
          <FormField
            type="text"
            label="Gênero"
            name="genre"
            placeholder="Gênero do jogo"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            fieldError={genreError}
          />
          <FormField
            type="number"
            label="Preço"
            name="price"
            placeholder="Preço do jogo"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fieldError={priceError}
          />
          <FormField
            type="text"
            label="Desenvolvido por"
            name="developedBy"
            placeholder="Desenvolvido por"
            value={developedBy}
            onChange={(e) => setDevelopedBy(e.target.value)}
            fieldError={developedByError}
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
            onClick={() => {
              if (!formIsValid()) return;
              return handleSubmit({
                title,
                genre,
                price,
                developed_by: developedBy,
                release_date: releaseDate,
              });
            }}
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
