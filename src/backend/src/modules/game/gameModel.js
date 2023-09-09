// @ts-check

/**
 * @typedef {Object} GameProps;
 * @property {number} id
 * @property {string} title
 * @property {string} genre
 * @property {number} price
 * @property {string} developed_by
 * @property {string} release_date
 */
class Game {
  /**
   *
   * @param {GameProps} props
   */
  constructor({ id, title, genre, price, developed_by, release_date }) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.price = price;
    this.developed_by = developed_by;
    this.release_date = release_date;
  }
}

export default Game;
