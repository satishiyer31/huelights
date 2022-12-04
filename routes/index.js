const express = require('express');

const hueRouter = require('./hue');

const app = express();

app.use('/hue',hueRouter);

module.exports = app;