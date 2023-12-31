import { createGamePlatformQuery } from "../common/queries/createGamePlatform.js";
import { deleteGamePlatformQuery } from "../common/queries/deleteGamePlatform.js";
import { createGameQuery } from "./queries/createGame.js";
import { deleteGameQuery } from "./queries/deleteGame.js";
import { listGames } from "./queries/findGames.js";
import { findGamesByPlatformIdQuery } from "./queries/findGamesByPlatformId.js";
import { findOneGameQuery } from "./queries/findOneGame.js";
import { findOneGameByTitleQuery } from "./queries/findOneGameByTitle.js";
import { updateGameQuery } from "./queries/updateGame.js";
import { findGamePlatformsQuery } from "./queries/findGamePlatforms.js";

export class GamesRepository {
  constructor(db) {
    this.db = db;
  }

  async create({ title, genre, price, developed_by, release_date, image }) {
    return await this.db.exec(createGameQuery, [
      title,
      genre,
      price,
      developed_by,
      release_date,
      image,
    ]);
  }

  find() {
    return this.db.query(listGames);
  }

  findByPlatform(platformId) {
    return this.db.query(findGamesByPlatformIdQuery, [platformId]);
  }

  findGamePlatforms(gameId) {
    return this.db.query(findGamePlatformsQuery, [gameId]);
  }

  associate({ gameId, platformId }) {
    return this.db.exec(createGamePlatformQuery, [gameId, platformId]);
  }

  dissociate({ gameId, platformId }) {
    return this.db.exec(deleteGamePlatformQuery, [gameId, platformId]);
  }

  findOne(id) {
    return this.db.queryOne(findOneGameQuery, [id]);
  }

  findOneByTitle(title) {
    return this.db.queryOne(findOneGameByTitleQuery, [title]);
  }

  delete(id) {
    return this.db.exec(deleteGameQuery, [id]);
  }

  update(id, { title, genre, price, developed_by, release_date }) {
    return this.db.exec(updateGameQuery, [
      title,
      genre,
      price,
      developed_by,
      release_date,
      id,
    ]);
  }
}
