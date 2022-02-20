const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// COnnect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(methodOverride('_method'));

// HTTP LOGGER
app.use(morgan('combined'));

// TEmplate engine
const hbs = handlebars.create({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    },
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'resources/views'));
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route Init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port} at http://localhost:${port}`);
});
