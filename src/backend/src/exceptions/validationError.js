export class ValidationError extends Error {
  /**
   * @param {string} message
   * @param {Record<string, string>} errors
   */
  constructor(message, errors) {
    super(message);
    this.errors = errors;
  }
}
