  
// Created the express application
const express = require('express');
const bodyP = require('body-parser');

const app = express();

app.use(bodyP.json());

// Loaded in our routes file
const routes = require('./Config/routes');

// Register any middleware here

// Included and ran the routes
routes(app);

// Makes the app available elsewhere
module.exports = app;