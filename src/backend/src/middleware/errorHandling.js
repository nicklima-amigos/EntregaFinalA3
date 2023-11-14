export const errorHandlingMiddleware = (error, req, res, next) => {
  console.error({ error });
  if (error.statusCode) {
    const { statusCode, message } = error;
    return res.status(statusCode).json({ error: message, statusCode });
  }
  return res.status(500).json({ error: error.message });
};
