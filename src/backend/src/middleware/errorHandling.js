/**
 *
 * @param {Error} error
 * @param {import ('express').Request} req
 * @param {import ('express').Response} res
 * @param {import ('express').NextFunction} res
 * @returns
 */
export const errorHandlingMiddleware = (error, req, res, next) => {
  console.error({ error });
  if (error.status) {
    const { status, message } = error;
    return res.status(status).json({ error: message, status });
  }
  return res.status(500).json({ error: error.message });
};
