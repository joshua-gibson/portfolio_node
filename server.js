'use strict';

const express = require('express');
var path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// Routing
var dir = __dirname+'/src'; // Path of the index.js but one dir further (public)
app.use(express.static(dir)); // serve all files in '/var/www/nodeserver/public/'