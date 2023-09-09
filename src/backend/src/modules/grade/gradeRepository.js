// @ts-check
import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { createGradeQuery } from "../../infrastructure/database/queries/grades/createGrade.js";
import { deleteGradeQuery } from "../../infrastructure/database/queries/grades/deleteGrade.js";
import { findGradesQuery } from "../../infrastructure/database/queries/grades/findGrades.js";
import { findGradesByUserIdQuery } from "../../infrastructure/database/queries/grades/findGradesByUserId.js";
import { findOneGradeQuery } from "../../infrastructure/database/queries/grades/findOneGrade.js";
import { updateGradeQuery } from "../../infrastructure/database/queries/grades/updateGrade.js";

export class PlatformsRepository {
  /**
   * @constructor
   * @param {DatabaseConnection} db
   */
  constructor(db) {
    this.db = db;
  }

  /**
   * @param {CreateGradeDto} CreatePlatformDto
   */
  async create({ userId, gameId, grade }) {
    return await this.db.exec(createGradeQuery, [userId, gameId, grade]);
  }

  async find() {
    return await this.db.query(findGradesQuery);
  }
  /**
   * @param {number} id
   */
  async findOne(id) {
    return await this.db.queryOne(findOneGradeQuery, [id]);
  }

  /**
   * @param {number} userId
   */
  async findGradesByUser(userId) {
    return this.db.queryOne(findGradesByUserIdQuery, [userId]);
  }

  /**
   * @param {UpdateGradeDto} UpdatePlatformDto
   */
  async update({ id, grade }) {
    const result = await this.db.exec(updateGradeQuery, [grade, id]);
    return result;
  }

  /**
   * @param {number} id
   */
  async delete(id) {
    const result = this.db.query(deleteGradeQuery, [id]);
    return result;
  }
}
