import { createGamePlatformQuery } from "../common/queries/createGamePlatform.js";
import Game from "../game/gameModel.js";
import { createPlatformQuery } from "./queries/createPlatform.js";
import { deletePlatformQuery } from "./queries/deletePlatform.js";
import { findOnePlatformQuery } from "./queries/findOnePlatform.js";
import { findOnePlatformByNameQuery } from "./queries/findOnePlatformByName.js";
import { findPlatformGamesQuery } from "./queries/findPlatformGames.js";
import { findPlatformsQuery } from "./queries/findPlatforms.js";
import { updatePlatformQuery } from "./queries/updatePlatform.js";

export class PlatformsRepository {
  constructor(db) {
    this.db = db;
  }

  create({ name }) {
    return this.db.exec(createPlatformQuery, [name]);
  }

  addGame(id, gameId) {
    return this.db.exec(createGamePlatformQuery, [gameId, id]);
  }

  find() {
    return this.db.query(findPlatformsQuery);
  }

  async findOne(id) {
    const platform = await this.db.queryOne(findOnePlatformQuery, [id]);
    if (!platform) {
      return null;
    }
    const games = await this.db.query(findPlatformGamesQuery, [id]);
    return {
      ...platform,
      games: games.map((game) => new Game(game)),
    };
  }

  findOneByName(name) {
    return this.db.queryOne(findOnePlatformByNameQuery, [name]);
  }

  update(id, { name }) {
    return this.db.exec(updatePlatformQuery, [name, id]);
  }

  delete(id) {
    return this.db.query(deletePlatformQuery, [id]);
  }
}
