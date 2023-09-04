// @ts-check

/**
 * @typedef {Object} GameProps;
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
  constructor(props) {
    this.title = props.title;
    this.genre = props.genre;
    this.price = props.price;
    this.developed_by = props.developed_by;
    this.release_date = props.release_date;
  }
}

export default Game;
