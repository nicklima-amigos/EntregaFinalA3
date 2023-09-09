// @ts-check

/**
 * @typedef {object} GradeProps
 * @property {number} userId
 * @property {number} gameId
 * @property {number} grade
 */

class Grade {
  /**
   * @param {GradeProps} props
   */
  constructor(props) {
    this.userId = props.userId;
    this.gameId = props.gameId;
    this.grade = props.grade;
  }
}

export default Grade;
