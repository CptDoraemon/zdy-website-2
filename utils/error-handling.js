const errorTypes = require('./error-types');
const responseTemplate = require('./response-template');

/**
 * @param {Error} error Error Object
 * @param {Object} res Express response object
 */
const errorHandling = (error, res) => {
  console.log(error);

  if (error instanceof errorTypes.ValidationError) {
    res.json(responseTemplate.error(error.message))
  } else {
    // default
    res.json(responseTemplate.error('Server Error'))
  }
};

module.exports = errorHandling;
