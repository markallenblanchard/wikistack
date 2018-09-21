const volleyball = require('volleyball');
const express = require('express');
const models = require('./models');
const views = require('./views/index');
const app = express();
const PORT = 3000;

app.use(volleyball);
app.use(express.static(__dirname + '/public/stylesheets'));
app.use(express.urlencoded({ extended: false }));

models.db.authenticate().then(() => {
  console.log('connected to the database');
});

app.get('/', (req, res) => {
  res.send(views.main());
});

const init = async () => {
  await models.db.sync({ force: true });
  //await models.User.sync();
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();

//Lukas added a comment
