const volleyball = require("volleyball");
const express = require("express");
const { db } = require('./models');
const views = require("./views/index")
const app = express();
const PORT = 3000;

app.use(volleyball);
app.use(express.static(__dirname + "/public/stylesheets"));
app.use(express.urlencoded( {extended: false} ));

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.get( "/", (req, res) => {
  res.send(views.main())
});

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})


//Lukas added a comment