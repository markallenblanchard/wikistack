const express = require('express');
const router = express.Router();
const models = require('../models');
const views = require('../views');
router.use(express.urlencoded({ extended: false }));

router.get('/', (req, res) => {
  res.send('hello');
});

router.post('/', async (req, res, next) => {
  //console.log(req.body);
  try {
    const page = await models.Page.create({
      title: req.body.title,
      content: req.body.pageContent,
      status: 'open',
    });
    res.redirect('/');
  } catch (err) {
    next(err);
  }

  //console.log(page);
});

router.get('/add', (req, res) => {
  res.send(views.addPage());
});

router.get('/:slug', (req, res, next) => {
  res.send(`hit dynamic route at ${req.params.slug}`);
});

module.exports = router;
