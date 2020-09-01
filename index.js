const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
// require routes
const contributionToDatabase = require('./routes/contribute-to-database');
// require routes ends
require('dotenv').config();

// Global Middlewares
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));

// frontend static files
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// API routers
contributionToDatabase(app);
// API routers end

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
