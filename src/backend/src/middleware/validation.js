// @ts-check

/**
 * @typedef {function} ValidationFunction
 * @param {any} body
 * @returns {void}
 */

/**
 *
 * @param {ValidationFunction} validationFunction
 * @returns {import("express").RequestHandler}
 */
export const validationMiddleware = (validationFunction) => {
  return async (req, res, next) => {
    try {
      validationFunction(req.body);
      next();
    } catch (error) {
      const { errors, message } = error;
      res.status(400).json({
        message: message,
        errors: errors,
      });
    }
  };
};
