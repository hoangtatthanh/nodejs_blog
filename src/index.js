const path = require('path');
const express = require('express')
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

// HTTP LOGGER
app.use(morgan('combined'))

// TEmplate engine
const hbs = handlebars.create({ extname: '.hbs' })
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route Init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})