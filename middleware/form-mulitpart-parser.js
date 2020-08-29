const multer  = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const errorResponse = require('../utils/response-template').error;

const parseFormMultipart = (fileFieldKey) => {
  return (req, res, next) => {
    const _upload = upload.single(fileFieldKey);
    _upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        res.json(errorResponse('wrong fields provided'));
      } else if (err) {
        // An unknown error occurred when uploading.
        res.json(errorResponse());
      }

      // Everything went fine.
      next()
    })
  }
};

module.exports = parseFormMultipart;
