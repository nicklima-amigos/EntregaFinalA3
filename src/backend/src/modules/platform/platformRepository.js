import { createGamePlatformQuery } from "../common/queries/createGamePlatform.js";
import { createPlatformQuery } from "./queries/createPlatform.js";
import { deletePlatformQuery } from "./queries/deletePlatform.js";
import { findOnePlatformQuery } from "./queries/findOnePlatform.js";
import { findOnePlatformByNameQuery } from "./queries/findOnePlatformByName.js";
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
    const results = await this.db.query(findOnePlatformQuery, [id]);

    if (results.length === 0) {
      return null;
    }

    return {
      id: results[0].id,
      name: results[0].name,
      games: results
        .filter((row) => row.game_id)
        .map((row) => {
          return {
            id: row.game_id,
            title: row.title,
            genre: row.genre,
            price: row.price,
            developed_by: row.developed_by,
            release_date: row.release_date,
          };
        }),
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
