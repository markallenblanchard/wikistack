const volleyball = require('volleyball');
const express = require('express');
const models = require('./models');
const views = require('./views/index');
const app = express();
const routers = require('./routes/index');
const PORT = 3000;

app.use(volleyball);
app.use(express.static('./public/stylesheets'));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', routers.wiki);
app.use('/users', routers.user);
models.db.authenticate().then(() => {
  console.log('connected to the database');
});
app.get('/', async (req, res) => {
  res.send(views.main());
  // console.log(await models.User.;
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
