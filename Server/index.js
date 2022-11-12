require('dotenv').config();
const http = require('http');
const express = require('express');

// start app
const app = express();

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
  
module.exports = app;