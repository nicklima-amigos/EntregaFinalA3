export const validateUpdateGame = (body) => {
  const { title, genre, price, developed_by, release_date } = body;
  const errors = {};
  if (!title) {
    errors.title = "Title is required";
  } else if (title.length > 255) {
    errors.title = "Title must be less than 255 characters";
  } else if (title.length < 2) {
    errors.title = "Title must be more than 2 characters";
  }
  if (!genre) {
    errors.genre = "Genre is required";
  }
  if (!price) {
    errors.price = "Price is required";
  }
  if (!developed_by) {
    errors.developed_by = "Developer is required";
  }
  if (!release_date) {
    errors.release_date = "Release date is required";
  }
  if (!genre) {
    errors.genre = "Genre is required";
  }
  if (Object.keys(errors).length > 0) {
    throw new ValidationError("invalid request body", errors);
  }
};
