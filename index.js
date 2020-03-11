const express = require('express');
const http = require('http');
const routes = require('./route');
const app = express();

routes(app);

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});






