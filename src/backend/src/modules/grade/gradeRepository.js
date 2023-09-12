import { createGradeQuery } from "./queries/createGrade.js";
import { deleteGradeQuery } from "./queries/deleteGrade.js";
import { findGradesQuery } from "./queries/findGrades.js";
import { findGradesByUserIdQuery } from "./queries/findGradesByUserId.js";
import { findOneGradeQuery } from "./queries/findOneGrade.js";
import { updateGradeQuery } from "./queries/updateGrade.js";

export class GradesRepository {
  constructor(db) {
    this.db = db;
  }

<<<<<<< HEAD
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
  delete(id) {
    return this.db.query(deleteGradeQuery, [id]);
=======
  async create({ userId, gameId, grade }) {
    return await this.db.exec(createGradeQuery, [userId, gameId, grade]);
  }

  async find() {
    return await this.db.query(findGradesQuery);
  }

  async findOne(id) {
    return await this.db.queryOne(findOneGradeQuery, [id]);
  }

  async findGradesByUser(userId) {
    return this.db.query(findGradesByUserIdQuery, [userId]);
  }

  async update(id, { grade }) {
    const result = await this.db.exec(updateGradeQuery, [grade, id]);
    return result;
  }

  async delete(id) {
    const result = this.db.query(deleteGradeQuery, [id]);
    return result;
>>>>>>> dev
  }
}
