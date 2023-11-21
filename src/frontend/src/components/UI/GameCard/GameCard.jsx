export default function GameCard({ game }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 px-2" key={game.id}>
      <div
      /* style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}*/
      >
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>
          <p className="card-text">Genre: {game.genre}</p>
          <p className="card-text">Price: {game.price}</p>
          <p className="card-text">Developed by: {game.developed_by}</p>
          <p className="card-text">Release Date: {game.release_date}</p>
        </div>
      </div>
    </div>
  );
}
