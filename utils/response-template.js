const cloneDeep = require('lodash').cloneDeep;

/**
 * Return an error JSON object
 * @param {string} [message]
 */
const error = (message) => {
  return {
    status: 'error',
    data: message || 'Unknown error, please try again later.'
  }
};

/**
 * Return an success JSON object
 * @param {*} [data]
 */
const success = (data) => {
  return {
    status: 'ok',
    data: cloneDeep(data)
  }
};

module.exports = {
  error,
  success
};
