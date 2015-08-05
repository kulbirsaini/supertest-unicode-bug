'use strict';

var express = require('express');
var logger = require('morgan');

function createApp() {
  var app = express();
  var router = express.Router();

  router.route('/')
  .get(function requestHandler(request, response, next) {
    response.status(200).send('Yo!');
    next();
  });

  app.use(logger());
  app.use(router);
  return app;
}

module.exports = createApp;
