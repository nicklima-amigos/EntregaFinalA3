import { createGradeQuery } from "./queries/createGrade.js";
import { deleteGradeQuery } from "./queries/deleteGrade.js";
import { findGradesQuery } from "./queries/findGrades.js";
import { findGradesByUserIdQuery } from "./queries/findGradesByUserId.js";
import { findOneGradeQuery } from "./queries/findOneGrade.js";
import { updateGradeQuery } from "./queries/updateGrade.js";
import { upsertGradeQuery } from "./queries/upsertGrade.js";
import { findGradeByUserAndGameQuery } from "./queries/findGradeByUserAndGame.js";

export class GradesRepository {
  constructor(db) {
    this.db = db;
  }

  create({ user_id, game_id, grade }) {
    return this.db.exec(createGradeQuery, [user_id, game_id, grade]);
  }

  find() {
    return this.db.query(findGradesQuery);
  }

  findOne(id) {
    return this.db.queryOne(findOneGradeQuery, [id]);
  }

  findGradesByUser(userId) {
    return this.db.query(findGradesByUserIdQuery, [userId]);
  }

  findGradeByUserAndGame(userId, gameId) {
    return this.db.queryOne(findGradeByUserAndGameQuery, [userId, gameId]);
  }

  upsert({ user_id, game_id, grade }) {
    return this.db.exec(upsertGradeQuery, [user_id, game_id, grade, grade]);
  }

  update(id, { grade }) {
    return this.db.exec(updateGradeQuery, [grade, id]);
  }

  delete(id) {
    return this.db.query(deleteGradeQuery, [id]);
  }
}
