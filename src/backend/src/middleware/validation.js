export const validationMiddleware = (validationFunction) => {
  return async (req, res, next) => {
    try {
      validationFunction(req.body, req.params);
      next();
    } catch (error) {
      const { errors, message } = error;
      res.status(400).json({
        message,
        errors,
      });
    }
  };
};

export const validateUrlParam = (paramName) => {
  return (req, res, next) => {
    if (isNaN(req.params[paramName])) {
      res.status(400).json({
        error: "id url param must be a number",
      });
      return;
    }
    next();
  };
};
