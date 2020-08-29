const url = require('./urls').contributeToDatabase;
const multer  = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const contributionToDatabase = (app) => {
  app.post(
    url,
    upload.single('file'),
    (req, res) => {
      console.log(req.body);
      console.log(req.file)
  })
};

module.exports = contributionToDatabase;
