const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
require('dotenv').config();

app.use(compression());
// frontend static files
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// API routers
// API routers end

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
