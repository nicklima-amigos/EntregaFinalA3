class Game {
  constructor({ id, title, genre, price, developed_by, release_date, image }) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.price = price;
    this.developed_by = developed_by;
    this.release_date = release_date;
    this.image = image;
  }
}

export default Game;
