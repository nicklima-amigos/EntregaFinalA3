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

  create({ userId, gameId, grade }) {
    return this.db.exec(createGradeQuery, [userId, gameId, grade]);
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

  async update(id, { grade }) {
    return this.db.exec(updateGradeQuery, [grade, id]);
  }

  delete(id) {
    return this.db.query(deleteGradeQuery, [id]);
  }
}
