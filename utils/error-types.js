class ValidationError extends Error {
  constructor(message = 'Validation Error', ...params) {
    super(...params);

    this.name = 'ValidationError';
    this.message = message;
  }
}

module.exports = {
  ValidationError
};
