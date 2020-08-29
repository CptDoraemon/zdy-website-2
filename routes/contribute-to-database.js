const url = require('./urls').contributeToDatabase;
const parseFormMultipart = require('../middleware/form-mulitpart-parser');
const errorHandling = require('../utils/error-handling');
const successTemplate = require('../utils/response-template').success;

const contributionToDatabase = (app) => {
  app.post(
    url,
    parseFormMultipart('file'),
    async (req, res) => {
      try {
        const {
          name,
          email,
          note
        } = req.body;
        const file = req.file;

        setTimeout(() => {
          res.json(successTemplate('File received, thank you!'))
        }, 3000);
      } catch (e) {
        errorHandling(e, res)
      }
  })
};

module.exports = contributionToDatabase;
