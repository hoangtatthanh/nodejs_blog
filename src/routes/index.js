const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouer = require('./site');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);

    app.use('/', siteRouer);
}

module.exports = route;
