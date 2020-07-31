'use strict';

const { Router } = require('express');
const router = new Router();

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'The best books and coffee collection in the entire world.'
  });
});

module.exports = router;
