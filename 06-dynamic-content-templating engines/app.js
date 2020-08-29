const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// To use Handlebars, uncomment the line below:
// const expressHbs = require('express-handlebars');

const app = express();


// To use Handlebars, uncomment the line below:
// app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts', defaultLayout: 'main-layout'}));
// app.set('view engine', 'handlebars');

// To use Pug, uncomment the line below:
// app.set('view engine', 'pug');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);
