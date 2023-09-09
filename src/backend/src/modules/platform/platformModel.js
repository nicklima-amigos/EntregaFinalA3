/**
 * @typedef {Object} PlatformProps
 * @property {number} id
 * @property {string} name
 */

class Platform {
  /**
   * @param {PlatformProps} props
   */
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
  }
}

export default Platform;
