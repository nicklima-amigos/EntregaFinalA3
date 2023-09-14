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

  async create({ name }) {
    return await this.db.exec(createPlatformQuery, [name]);
  }

  async addGame(id, gameId) {
    const result = await this.db.exec(createGamePlatformQuery, [gameId, id]);
    return result;
  }

  async find() {
    return await this.db.query(findPlatformsQuery);
  }

  async findOne(id) {
    const platform = await this.db.queryOne(findOnePlatformQuery, [id]);
    const games = await this.db.query(findPlatformGamesQuery, [id]);
    return {
      ...platform,
      games: games.map((game) => new Game(game)),
    };
  }

  async findOneByName(name) {
    return this.db.queryOne(findOnePlatformByNameQuery, [name]);
  }

  async update(id, { name }) {
    const result = await this.db.exec(updatePlatformQuery, [name, id]);
    return result;
  }

  async delete(id) {
    const result = this.db.query(deletePlatformQuery, [id]);
    return result;
  }
}
