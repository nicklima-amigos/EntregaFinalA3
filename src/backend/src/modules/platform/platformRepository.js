// @ts-check
import './dto/createPlatformDto.js';
import './dto/findOnePlatformDto.js';
import './dto/updatePlatformDto.js';
import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { createPlatformQuery } from "../../infrastructure/database/queries/platforms/createPlatform.js";
import { findPlatformsQuery } from "../../infrastructure/database/queries/platforms/findPlatforms.js";
import { findOnePlatformQuery } from "../../infrastructure/database/queries/platforms/findOnePlatform.js";
import { updatePlatformQuery } from '../../infrastructure/database/queries/platforms/updatePlatform.js';
import { deletePlatformQuery } from '../../infrastructure/database/queries/platforms/deletePlatform.js';
export class PlatformsRepository {
  /**
   * @constructor
   * @param {DatabaseConnection} db
   */
  constructor(db) {
    this.db = db;
  }

  /**
   * @param {CreatePlatformDto} CreatePlatformDto
   */
  async create({ name }) {
    return  await this.db.exec(createPlatformQuery, [
      name,
    ]);
  }

  async find() {
    return await this.db.query(findPlatformsQuery);
  }
  /**
    * @param {FindOnePlatformDto} FindOnePlatformDto
    */
  async findOne({ id }) {
    const result = await this.db.query(findOnePlatformQuery, [id]);
    return result[0]
  }

  /**
  * @param {UpdatePlatformDto} UpdatePlatformDto
  */
  async update({ id, name }) {
    const result = await this.db.exec(updatePlatformQuery, [ name,  id]);
    return result
  }

    /**
  * @param {deletePlatformDto} deletePlatformDto
  */
    async delete({ id }) {
      const result = this.db.query(deletePlatformQuery, [id]);
      return result
    }
}
