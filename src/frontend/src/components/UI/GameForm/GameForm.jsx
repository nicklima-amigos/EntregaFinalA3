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
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState(0);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
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
    if (gamePlatforms?.length > 0) {
      setSelectedPlatforms(gamePlatforms.map((p) => p.id));
    }

    console.log({ gamePlatforms });
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
              handleSubmit(
                {
                  title,
                  genre,
                  price,
                  developed_by: developedBy,
                  release_date: releaseDate,
                },
                selectedPlatforms
              )
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
