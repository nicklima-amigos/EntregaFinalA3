/**
 * @typedef {object} UserModelProps
 * @property {number} id
 * @property {string} username
 * @property {string} email
 * @property {string} password
 * @property {string} birth_date
 */

class User {
  /**
   *
   * @param {UserModelProps} props
   */
  constructor(props) {
    this.id = props.id;
    this.username = props.username;
    this.email = props.email;
    this.password = props.password;
    this.birth_date = props.birth_date;
  }
}

export default User;
