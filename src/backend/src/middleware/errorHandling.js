/**
 *
 * @param {Error} error
 * @param {import ('express').Request} req
 * @param {import ('express').Response} res
 * @param {import ('express').NextFunction} res
 * @returns
 */
export const errorHandlingMiddleware = (error, req, res, next) => {
  console.log(error);
  if (error.status) {
    return res.status(error.status).json({ error: error.message });
  }
  return res.status(500).json({ error: error.message });
};
