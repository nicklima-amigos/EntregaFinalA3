export type CreateUserValidationErrors = {
  username?: string;
  email?: string;
  password?: string;
  birth_date?: string;
};

export type UpdateUserValidationErrors = {
  password?: string;
};
