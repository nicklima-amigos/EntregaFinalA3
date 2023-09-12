// @ts-check

import "./dto/createGradeDto.js";
import "./dto/updateGradeDto.js";
import { DatabaseConnection } from "../../infrastructure/database/connection.js";
import { createGradeQuery } from "./queries/createGrade.js";
import { deleteGradeQuery } from "./queries/deleteGrade.js";
import { findGradesQuery } from "./queries/findGrades.js";
import { findGradesByUserIdQuery } from "./queries/findGradesByUserId.js";
import { findOneGradeQuery } from "./queries/findOneGrade.js";
import { updateGradeQuery } from "./queries/updateGrade.js";
import Grade from "./gradeModel.js";

export class GradesRepository {
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
  create({ userId, gameId, grade }) {
    return this.db.exec(createGradeQuery, [userId, gameId, grade]);
  }

  /**
   *
   * @returns {Promise<Grade[]>}
   */
  find() {
    return this.db.query(findGradesQuery);
  }

  /**
   * @param {number} id
   * @returns {Promise<Grade>}
   */
  findOne(id) {
    return this.db.queryOne(findOneGradeQuery, [id]);
  }

  /**
   * @param {number} userId
   * @returns {Promise<Grade[]>}
   */
  findGradesByUser(userId) {
    return this.db.query(findGradesByUserIdQuery, [userId]);
  }

  /**
   * @param {number} id
   * @param {UpdateGradeDto} UpdatePlatformDto
   */
  update(id, { grade }) {
    return this.db.exec(updateGradeQuery, [grade, id]);
  }

  /**
   * @param {number} id
   */
  async delete(id) {
    return this.db.query(deleteGradeQuery, [id]);
  }
}
