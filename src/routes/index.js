const newsRouter = require('./news');
const siteRouer = require('./site');

function route(app){

    app.use('/news', newsRouter);

    app.use('/', siteRouer);
    
}

module.exports = route;