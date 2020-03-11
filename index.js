const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const routes = require('./routes/route');
require('./db');
const app = express();

app.use(bodyParser());

routes(app);

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});






